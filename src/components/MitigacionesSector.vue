<template>
  <div id="mitigaciones" class="card mb-4 animate__animated animate__fadeIn">
    <div class="card-header">
      <h2>Mitigaciones</h2>
    </div>
    <div class="card-body">
      <p>
        Para contrarrestar las amenazas cibernéticas identificadas en {{ mes }} de {{ año }}, se recomiendan las siguientes medidas de mitigación:
      </p>
      <ul>
        <li v-for="(mitigacion, index) in mitigaciones" :key="index">
          <strong>{{ mitigacion }}</strong>
        </li>
      </ul>
      <div class="alert alert-secondary mt-3">
        <em>Clasificación: TLP:CLEAR | La información contenida en este informe puede ser compartida sin restricción.</em>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    mes: String,
    año: String,
    mitigaciones: Array,
  },
};
</script>

<style scoped>
.alert-secondary {
  background-color: rgba(108, 117, 125, 0.1);
  border-color: rgba(108, 117, 125, 0.2);
  color: var(--text-color);
  margin-top: 1.5rem;
}
</style>