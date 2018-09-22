<template>
  <div class="home">
    <section class="main">
      <header>
        <h1>Calcular coste trabajador</h1>
      </header>
      <Calculator />
    </section>
    <aside class="lateral-info">
      <a
        href="https://etereo.io"
        target="_blank">
        <img
          src="etereo-sponsor-transparent-white.png"
          alt="Calculadora de costes derivados de la contratación">
      </a>

      <div class="info-product">
        <p>
          Calcula el coste que le supone a tu empresa contratar a un trabajador en base a su salario bruto anual.
        </p>
        <p>
          <small>Si tienes dudas o sugerencias, escribe a <a href="mailto:dev@etereo.io">dev@etereo.io</a></small>
        </p>
        <!--        <a href="#">
          Go Pro
          <v-button class="simple-icon" type="primary" icon="arrow-right" @click="add(true)"></v-button>
        </a>-->
      </div>

    </aside>
  </div>
</template>

<script>
// @ is an alias to /src
import Calculator from '@/components/Calculator/Calculator.vue';

export default {
  name: 'Home',
  head () {
    return {
      title: 'Calculadora Coste Trabajador',
      meta: [
        { hid: 'description', name: 'description', content: 'Calcula el coste que le supone a tu empresa contratar a un trabajador en base a su salario bruto anual.' },
        { hid: 'keywords', name: 'keywords', content: 'calculadora, coste trabajador, coste trabajador para la empresa' }
      ],
      script: [
        {
          innerHTML: '{ "@context": "http://schema.org" }',
          type: 'application/ld+json',
          '@type': "WebApplication",
          url: 'http://www.calcularcostetrabajador.com',
          name: 'Calculadora costes laborales',
          copyrightYear: '2018',
          about: 'Calcula el coste que le supone a tu empresa contratar a un trabajador en base a su salario bruto anual.',
          fileSize: '450kb',
          countriesSupported: 'ES',
          copyrightHolder: 'etéreo experience S.L.',
          browserRequirements: 'IE7+',
          applicationCategory: 'Finanzas'}
      ],
    }
  },
  components: {
    Calculator,
  },
};
</script>

<style scoped>

  * {
      font-family: 'Work Sans', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

  .home {
    margin: 0 auto;
    box-shadow: 0px 10px 15px rgba(178, 208, 232,0.5);
    display: flex;
    width: 100%;
    height: 100vh;
    animation: intro 0.35s ease-in-out;
    will-change: opacity, transform ;
  }

  @keyframes intro {
    from {
      opacity: 0;
      transform: scale(0.93);
    }

    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  .home .lateral-info {
    background: url("~/image.jpg");
    background-size: cover;
    background-position: 57% 50%;
    box-sizing: border-box;
    position: relative;
    border-bottom-left-radius: 10px;
    border-top-left-radius: 10px;
    width: 40%;
    display: flex;
    justify-content: space-between;
    flex-flow: column;
    order: -1;
    padding: 40px;
  }

  .home .lateral-info a {
    align-self: flex-end;
    transition: all 0.25s ease-in;
  }

  .home .lateral-info a img {
    position: relative;
    max-width: 120px;
    width: 100%;
  }

  .home .lateral-info p {
    color: #FFF;
    position: relative;
    z-index: 2;
    width: 100%;
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 40px;
  }

  .home .lateral-info .info-product a {
    background: #FFF;
    position: relative;
    z-index: 2;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    width: auto;
    display: block;
    padding: 15px;
    transition: all 0.25s ease-in;
  }

  .home .lateral-info a:hover {
    transform: scale(1.1);
  }

  .home .lateral-info::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    background: #59b9ff;
    background: linear-gradient(to bottom, #59b9ff 0%,#108ee9 100%);
    border-bottom-left-radius: 10px;
    border-top-left-radius: 10px;
    opacity: 0.85;
    height: 100%;
    width: 100%;
  }

  .home .main {
    background: #FFF;
    border-bottom-right-radius: 10px;
    border-top-right-radius: 10px;
    width: 60%;
  }

  h1 {
    line-height: 1em;
    padding: 40px 40px 20px 40px;
    color: #288ee9;
    background: #FFF;
    font-size: 28px;
    font-weight: 600;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  @media all and (max-width: 800px) {
    .home .lateral-info {
      padding: 40px 20px;
    }

    h1 {
      padding: 40px 20px 20px 20px;
    }
  }

  @media all and (max-width: 600px) {
    .home {
      flex-flow: column;
    }

    .home .lateral-info, .home .lateral-info::before, .home .main {
      width: 100%;
      border-radius: 0;
    }

    .home .lateral-info {
      flex-flow: row;
      order: 0;
      padding-bottom: 100px;
    }

    .home .lateral-info::after {
      content: "Calculadora coste trabajador";
      position: absolute;
      bottom: 20px;
      color: #FFF;
      font-weight: 600;
      font-size: 23px;
    }

    .home .lateral-info p {
      display: none;
    }

    .home .main {
      padding-top: 20px;
    }

    .home .main h1{
      display: none;
    }

  }
</style>
