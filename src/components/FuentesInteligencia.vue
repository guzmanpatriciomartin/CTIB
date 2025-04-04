<template>
    <div id="fuentes" class="card mb-4 animate__animated animate__fadeIn">
      <div class="card-header">
        <h2>Fuentes de Inteligencia</h2>
      </div>
      <div class="card-body">
        <ul class="list-group">
          <li v-for="(fuente, index) in fuentes" :key="index" class="list-group-item">
            <strong>{{ fuente.nombre }}:</strong> {{ fuente.referencia }}
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
      fuentes: {
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