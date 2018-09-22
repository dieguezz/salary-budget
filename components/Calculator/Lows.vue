<template>
  <div class="lows">
    <!--<h3>Bajas laborales</h3>-->
    <div>
      <div class="add">
        <h3 @click="showModal('common')">Contingencias comunes</h3>
        <div class="add-row"><button
          :disabled="commonLows.length >= 6"
          type="primary"
          @click="add(true)">Agregar</button></div>
      </div>
      <ul
        v-if="commonLows.length"
        class="common">
        <li
          v-for="item in commonLows"
          :key="item.id"
          class="low">
          <input
            v-model="item.description"
            placeholder="Descripción"
            @input="update({low: item, isCommon: true})" >
          <input
            v-model="item.days"
            type="number"
            class="input-number"
            placeholder="Días"
            @change="update({low: item, isCommon: true})" >
          <button
            type="primary"
            @click="remove({isCommon: true, id: item.id})">Eliminar</button>
        </li>
      </ul>
    </div>
    <div>
      <div class="add">
        <h3 @click="showModal('laboral')">Contingencias profesionales</h3>
        <div class="add-row"><button
          :disabled="laboralLows.length >= 6"
          type="primary"
          @click="add(false)">Agregar</button></div>
      </div>
      <ul
        v-if="laboralLows.length"
        class="laboral">
        <li
          v-for="item in laboralLows"
          :key="item.id"
          class="low">
          <input
            :value="item.description"
            placeholder="Descripción"
            @input="update({low: item, isCommon: false})" >
          <input
            v-model="item.days"
            type="number"
            class="input-number"
            placeholder="Días"
            @change="update({low: item, isCommon: false})" >
          <button @click="remove({isCommon: false, id: item.id})">Eliminar</button>
        </li>
      </ul>
    </div>
    <Modal
      :is-visible="isVisible"
      :title="modals.common ? 'Contingencias comunes' : 'Contingencias profesionales'"
      @onClose="closeModal">
      <template slot="body">
        <modalCommon v-if="modals.common" />
        <modalLaboral v-if="modals.laboral" />
      </template>
    </Modal>
  </div>
</template>


<script>
import { mapGetters, mapActions } from 'vuex';
import modalCommon from '@/components/Modals/modalCommon.vue';
import modalLaboral from '@/components/Modals/modalLaboral.vue';
import Modal from '@/components/Modal'
export default {
  name: 'Lows',
  components: { modalCommon, modalLaboral, Modal },
  data() {
    return {
      modals: { common: false, laboral: false },
      isVisible: false,
    };
  },
  computed: {
    ...mapGetters({
      commonLows: 'lows/commonLows',
      laboralLows: 'lows/laboralLows',
    }),
  },
  methods: {
    ...mapActions({ add: 'lows/add', remove: 'lows/remove', update: 'lows/update' }),
    showModal(modal) {
      Object.keys(this.modals).forEach(v => this.modals[v] = false);
      this.isVisible = true;
      this.modals[modal] = true;
    },
    closeModal() {
      this.isVisible = false;
    }
  },
};
</script>

<style>

.add {
  margin: 25px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.add h3 {
  font-size: 16px;
  border-bottom: 2px dotted #51a9e8;
  cursor: help;
  font-weight: 400;
}

.low, .permission {
  display: flex;
  padding: 5px;
}

.input-number {
  margin: 0 10px;
}

input {
    padding: 10px;
    border-radius: 10px;
    border: 1px solid #ebebeb;
}

ul {
  padding: 0;
  list-style: none;
}
</style>
