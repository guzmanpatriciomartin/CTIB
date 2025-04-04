<template>
    <div class="zero-day-form">
      <div v-for="(zeroDay, index) in zeroDays" :key="index" class="zero-day-item">
        <div class="zero-day-header">
          <h5>Zero-Day #{{ index + 1 }}</h5>
          <button type="button" class="btn btn-sm btn-danger" @click="$emit('remove', index)">
            <i class="fas fa-trash"></i>
          </button>
        </div>
        <div class="form-grid">
          <div class="form-group">
            <label>ID:</label>
            <input v-model="zeroDay.id" type="text" class="form-control" placeholder="ZD-2025-001" />
          </div>
          <div class="form-group">
            <label>Nombre:</label>
            <input v-model="zeroDay.nombre" type="text" class="form-control" />
          </div>
          <div class="form-group">
            <label>Plataforma:</label>
            <input v-model="zeroDay.plataforma" type="text" class="form-control" />
          </div>
          <div class="form-group">
            <label>Fecha:</label>
            <input v-model="zeroDay.fecha" type="date" class="form-control" />
          </div>
          <div class="form-group">
            <label>Estado:</label>
            <select v-model="zeroDay.activo" class="form-control">
              <option :value="true">Activo</option>
              <option :value="false">Mitigado</option>
            </select>
          </div>
          <div class="form-group">
            <label>Enlace:</label>
            <input v-model="zeroDay.link" type="url" class="form-control" placeholder="https://..." />
          </div>
        </div>
        <div class="form-group">
          <label>Descripción:</label>
          <textarea v-model="zeroDay.descripcion" class="form-control" rows="3"></textarea>
        </div>
      </div>
      <button type="button" class="btn btn-secondary mt-3" @click="$emit('add')">
        <i class="fas fa-plus"></i> Añadir Zero-Day
      </button>
    </div>
  </template>
  
  <script>
  import { watch } from 'vue'
  
  export default {
    props: {
      zeroDays: {
        type: Array,
        required: true
      }
    },
    emits: ['add', 'update', 'remove'],
    setup(props, { emit }) {
      watch(() => props.zeroDays, (newValue) => {
        emit('update', newValue)
      }, { deep: true })
    }
  }
  </script>
  
  <style scoped>
  .zero-day-form {
    border: 1px solid var(--border-color);
    border-radius: 8px;
    padding: 1rem;
    background-color: var(--card-bg);
  }
  
  .zero-day-item {
    padding: 1rem;
    margin-bottom: 1rem;
    border: 1px solid var(--border-color);
    border-radius: 4px;
    background-color: var(--highlight-bg);
  }
  
  .zero-day-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }
  
  .form-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
  }
  
  /* Dark mode styles */
  .dark-mode .zero-day-form {
    border-color: var(--dark-border-color);
    background-color: var(--dark-card-bg);
  }
  
  .dark-mode .zero-day-item {
    border-color: var(--dark-border-color);
    background-color: var(--dark-highlight-bg);
  }
  </style>