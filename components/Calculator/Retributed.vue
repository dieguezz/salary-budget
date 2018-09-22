<template>
  <div class="retributed">
    <div class="add">
      <h3 @click="showModal">Permisos Retribuidos</h3>
      <div class="add-row"><button
        :disabled="retributedDays.length >= 6"
        @click="add(true)">Agregar</button></div>
    </div>
    <ul
      v-if="retributedDays.length"
      class="permissions">
      <li
        v-for="item in retributedDays"
        :key="item.id"
        class="permission">
        <input
          v-model.lazy="item.description"
          placeholder="Descripción"
          @input="update(item)" >
        <input
          v-model.number="item.days"
          type="number"
          class="input-number"
          placeholder="Días"
          @change="update(item)" >
        <button @click="remove(item.id)">Eliminar</button>
      </li>
    </ul>
    <Modal
      :is-visible="isVisible"
      title="Permisos retribuídos"
      @onClose="closeModal">
      <template slot="body">
        <modalRetributed />
      </template>
    </Modal>
  </div>
</template>


<script>
import { mapGetters, mapActions } from 'vuex';
import modalRetributed from '@/components/Modals/modalRetributed.vue';
import Modal from '@/components/Modal'

export default {
  name: 'Retributed',
  components: { modalRetributed, Modal },
  data() {
    return {
      isVisible: false,
    };
  },
  computed: {
    ...mapGetters({
      retributedDays: 'retributions/retributedDays',
    }),
  },
  methods: {
    ...mapActions({ add: 'retributions/add', remove: 'retributions/remove', update: 'retributions/update' }),
    showModal() {
      this.isVisible = true;
    },
    closeModal() {
      this.isVisible = false;
    }
  },
};
</script>

<style scoped>
.input-number {
  margin: 0 10px;
}
</style>
