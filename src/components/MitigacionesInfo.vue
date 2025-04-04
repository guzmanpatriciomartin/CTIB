<template>
    <div id="mitigaciones" class="card mb-4 animate__animated animate__fadeIn">
      <div class="card-header">
        <h2>Mitigaciones</h2>
      </div>
      <div class="card-body">
        <p>
          Para contrarrestar las amenazas cibernéticas identificadas, se recomiendan las siguientes medidas de mitigación:
        </p>
        <ul class="list-group">
          <li v-for="(mitigacion, index) in mitigaciones" :key="index" class="list-group-item">
            {{ mitigacion }}
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
      mitigaciones: {
        type: Array,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  .list-group-item {
    background-color: var(--card-bg);
    border-color: var(--border-color);
  }
  
  .dark-mode .list-group-item {
    background-color: var(--dark-card-bg);
    border-color: var(--dark-border-color);
  }
  
  .alert-secondary {
    background-color: rgba(108, 117, 125, 0.1);
    border-color: rgba(108, 117, 125, 0.2);
    color: var(--text-color);
  }
  
  .dark-mode .alert-secondary {
    background-color: rgba(108, 117, 125, 0.2);
    color: var(--dark-text);
  }
  </style>