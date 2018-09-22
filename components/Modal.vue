<template>
  <transition name="fade">
    <div
      v-if="isVisible"
      class="modal absolute-center">
      <div
        class="modal-bg absolute-center"
        @click="close()" />
      <div
        class="modal-body"
        @click="preventClose()">
        <div class="title">{{ title }}</div>
        <slot name="body" />
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    title: {
      type: String,
      default: 'Calculadora coste trabajador',
    },
    isVisible: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return { canClose: false }
  },
  methods: {
    close() {
      this.$emit('onClose');
    },
  }
}
</script>

<style lang="scss" scoped>

  .modal {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .modal-bg {
    width: 100vw;
    height: 100vh;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.65);
  }

  .title {
    font-size: 20px;
    font-weight: bold;
  }

  .absolute-center {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 8;
  }

  .modal-body {
    display: block;
    max-width: 600px;
    max-height: 600px;
    margin: auto;
    background-color: white;
    padding: 25px;
    z-index: 9;
    border-radius: 14px;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .25s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>

<style>
  .modal-content {
    padding: 20px 0;
  }
</style>
