<template>
  <div class="salary">
    <vue-numeric
      :value="value"
      :min="12000"
      :max="999999"
      :currency="'€'"
      :separator="'.'"
      :precision="2"
      currency-symbol-position="suffix"
      @input="updateValue"
    />
    <small>
      Salario del trabajador anual total en bruto sin incluir ningún gasto.
    </small>
  </div>
</template>

<script>
export default {
  name: 'Salary',
  props: {
    value: {
      type: Number,
      default: 0
    }
  },
  methods: {
    updateValue(value) {
      this.$emit('input', value);
    },
  },
};
</script>

<style scoped>
  .salary {
    display: flex;
    align-items: center;
    flex-flow: column;
    width: 100%;
  }
  label {
    padding-right: 15px;
    font-size: 14px;
  }
  .anual-salary {
    border: none;
    border-bottom: 1px solid;
    border-bottom-color: #59b9ff!important;
    border-radius: 0;
    font-size: 32px;
    font-weight: 500;
    color: #000;
    max-width: none;
    height: 100%;
    padding: 10px 20px 10px 0;
    width: 100%!important;
    box-sizing: border-box;
  }

  .salary small {
    margin-top: 10px;
    position: relative;
    padding-left: 0px;
    left: 0px;
    z-index: 2;
    font-size: 12px;
  }

  .salary small .simple-icon {
    position: absolute;
    display: none;
    z-index: -1;
    font-size: 16px;
    top: 0;
    left: 0;
    transform: translate(-60%,-40%);
    cursor: auto;
    user-select: none;
    pointer-events: none;
  }


  input {
    padding: 10px;
    border-radius: 10px;
    box-shadow: none;
    border: 2px dotted #278ee9;
    outline: 0;
    width: 50%;
    font-size: 20px;
  }

  @media all and (min-width: 890px) {
    .anual-salary {
      max-width: 200px;
      width: 100% !important;
    }

    .salary {
      align-items: center!important;
      flex-flow: row;
      justify-content: space-between !important;
    }

    .salary small {
      color: #8898a5;
      margin-top: 0;
      padding: 12px;
      background: #eef4f9;
      margin-left: 20px;
      width: 50%;
    }

    .salary small .simple-icon {
      display: block;
    }
  }

  .anual-salary::after {
    content: '€';
    display: inline-block;
    position: absolute;
    top: 0;
    right: 0;
  }

</style>
