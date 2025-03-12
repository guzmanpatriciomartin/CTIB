<template>
  <div id="fuentes" class="card mb-4 animate__animated animate__fadeIn">
    <div class="card-header">
      <h2>Referencias</h2>
    </div>
    <div class="card-body">
      <p>
        La información presentada en este informe ha sido recopilada de las siguientes fuentes confiables:
      </p>
      <ul>
        <li v-for="(fuente, index) in fuentes" :key="index"><strong>{{ fuente.nombre }}</strong>: {{ fuente.referencia }}</li>
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
    fuentes: Array,
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