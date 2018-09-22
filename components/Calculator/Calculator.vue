<template>
  <div class="calculator">
    <div class="content">
      <div class="items">
        <h2>Salario anual bruto</h2>
        <Salary v-model="bruteSalary"/>
      </div>
      <div class="items">
        <h2>Bajas laborales</h2>
        <Lows />
        <Retributed />
      </div>
      <div class="total">
        <div><h3>Coste total</h3><span class="anual">Anual</span></div>
        <p>
          <vue-numeric
            :value="totalCost"
            :min="12000"
            :max="999999"
            :currency="'€'"
            :separator="'.'"
            :precision="2"
            currency-symbol-position="suffix"
            read-only
            read-only-class="total-price"
            class="main-input"
          />
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Salary from '@/components/Calculator/Salary.vue';
import Lows from '@/components/Calculator/Lows.vue';
import Retributed from '@/components/Calculator/Retributed.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'Calculator',
  components: { Salary, Lows, Retributed },
  data() {
    return {
      bruteSalary: 25000,
    };
  },
  computed: {
    ...mapGetters({
      retributedDays: 'retributions/retributedDays',
      totalRetributedDays: 'retributions/totalRetributedDays',
      commonLows: 'lows/commonLows',
      laboralLows: 'lows/laboralLows',
    }),
    salaryPerDay() {
      return parseInt(this.bruteSalary, 10) / 365;
    },
    retributedDaysCost() {
      return this.totalRetributedDays * this.salaryPerDay;
    },
    lowsCost() {
      const commonCost = this.commonLows.map((low) => {
        low.days = parseInt(low.days, 10);
        if (low.days > 20) {
          low.days = 19;
        }
        if (low.days <= 3) {
          return 0;
        }
        return Math.round(low.days * this.salaryPerDay * 100) / 100;
      }).reduce((prev, curr) => prev + curr, 0);

      const laboralCost = (this.laboralLows.length * this.salaryPerDay) * 0.75;

      return (commonCost + laboralCost) * -1;
    },
    totalCost() {
      return Math.round((this.lowsCost + this.retributedDaysCost + this.taxes) * 100) / 100;
    },
    taxes() {
      const commonConts = this.bruteSalary * 0.236;
      const unemployment = this.bruteSalary * 0.55;
      const accidents = this.bruteSalary * 0.35;
      const formation = this.bruteSalary * 0.06;
      const fogasa = this.bruteSalary * 0.02;

      return Math.round(((commonConts + unemployment + accidents + formation + fogasa) * 100) / 100);
    },
  },
};
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Work+Sans:300,400,600,800');

  * {
    font-family: 'Work Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .items {
    padding: 0 40px 20px 40px;
  }

  .content {
    background: #FFF;
  }

  .items h2 {
    padding: 10px 0;
    border-bottom: 1px solid rgba(132, 158, 179, 0.25);;
    color: #849eb3;
    margin-bottom: 15px;
    font-weight: 600;
    position: relative;
  }

  .total {
    background: #51a9e8;
    background: linear-gradient(to bottom, #51a9e8 0%,#108ee9 100%);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    margin: 20px 40px 40px 40px;
    position: sticky;
    bottom: 0;
  }

  .total div {
    display: flex;
    align-items: flex-start;
  }

  .total h3 {
    color: #FFF;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 18px;
  }

  .total-price {
    font-size: 20px;
  }

  .anual {
    color: #ededed;
    text-transform: uppercase;
    padding: 3px 0 0 3px;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.5px;
  }

  .total p {
    color: #FFF;
    font-size: 28px;
    font-weight: 600;
  }

  .calculator {
    max-height: calc(100vh - 108px);
    overflow-y: scroll;

  }

  .calculator::-webkit-scrollbar {
      width: 5px;
  }

  .calculator::-webkit-scrollbar-track {
      background: #f1f1f1;
  }

  .calculator::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background: #51a9e8;
  }

  .calculator::-webkit-scrollbar-thumb:hover {
      background: #4084b5;
  }

  @media all and (max-width: 800px) {
    .items {
      padding: 0 20px 20px 20px;
    }

    .total {
      margin: 20px 20px 40px 20px;
    }
  }

</style>
