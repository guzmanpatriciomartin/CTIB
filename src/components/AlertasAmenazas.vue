<template>
  <div id="alertas" class="card mb-4 animate__animated animate__fadeIn">
    <div class="card-header">
      <h2>Alertas de Amenazas Cibernéticas</h2>
    </div>
    <div class="card-body">
      <p class="text-muted">
        Las alertas de Cyber Threat Intelligence son notificaciones que informan sobre amenazas cibernéticas identificadas, como vulnerabilidades o ataques activos. El <strong>Traffic Light Protocol (TLP)</strong> es un conjunto de directrices que regulan la divulgación de información sensible, utilizando colores para indicar los límites de compartición establecidos por el remitente. La importancia de estas alertas y del TLP radica en su capacidad para comunicar información crítica de manera segura y eficiente, asegurando que solo las partes adecuadas tengan acceso a la información necesaria para protegerse contra amenazas cibernéticas.
      </p>
      <div v-for="(alerta, index) in alertas" :key="index" class="mt-4">
        <h4>Threat Landscape: {{ alerta.tipo }}</h4>
        <p>{{ alerta.descripcion }}</p>
      </div>
      <div class="alert alert-secondary mt-3">
        <em>Clasificación: TLP:CLEAR | La información contenida en este informe puede ser compartida sin restricción.</em>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    alertas: Array,
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