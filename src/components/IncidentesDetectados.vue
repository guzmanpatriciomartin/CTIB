<template>
  <div id="incidentes" class="card mb-4 animate__animated animate__fadeIn">
    <div class="card-header">
      <h2>Incidentes Detectados</h2>
    </div>
    <div class="card-body">
      <p class="text-muted">El conocimiento y la vigilancia de los ciber incidentes es fundamentales para la seguridad de cualquier organización. La respuesta ante estos incidentes y su posterior análisis post mortem son cruciales para el proceso de fortalecimiento de los sistemas. Al mantenerse informadas sobre los últimos ataques, las organizaciones pueden identificar y mitigar posibles amenazas.</p>
      <ul class="list-group">
        <li v-for="(incidente, index) in incidentes" :key="index" class="list-group-item">
          <strong>{{ incidente.fecha }}:</strong> {{ incidente.empresa }} - {{ incidente.sector }}
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
    incidentes: Array,
  },
};
</script>

<style scoped>
.list-group-item {
  background-color: var(--light-card-bg);
  border-color: var(--light-border);
  color: var(--light-text);
}

.dark-mode .list-group-item {
  background-color: var(--dark-card-bg);
  border-color: var(--dark-border);
  color: var(--dark-text);
}
</style>