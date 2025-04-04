<template>
    <div class="indicator-form">
      <h4 class="indicator-title">{{ formattedName }}</h4>
      <div class="indicator-fields">
        <div class="form-group">
          <label>Valor:</label>
          <input v-model="localValue.valor" type="number" class="form-control" />
        </div>
        <div class="form-group">
          <label>Porcentaje:</label>
          <input v-model="localValue.porcentaje" type="text" class="form-control" />
        </div>
        <div class="form-group">
          <label>Estado:</label>
          <select v-model="localValue.clase" class="form-control">
            <option value="text-danger">Alto</option>
            <option value="text-success">Bajo</option>
            <option value="text-muted">Neutral</option>
          </select>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, watch, computed } from 'vue'
  
  export default {
    props: {
      name: {
        type: String,
        required: true
      },
      indicator: {
        type: Object,
        required: true
      }
    },
    emits: ['update'],
    setup(props, { emit }) {
      const localValue = ref({ ...props.indicator })
  
      const formattedName = computed(() => {
        return props.name
          .replace(/([A-Z])/g, ' $1')
          .replace(/^./, str => str.toUpperCase())
      })
  
      watch(localValue, (newValue) => {
        emit('update', newValue)
      }, { deep: true })
  
      return {
        localValue,
        formattedName
      }
    }
  }
  </script>
  
  <style scoped>
  .indicator-form {
    padding: 1rem;
    border: 1px solid var(--border-color);
    border-radius: 8px;
    background-color: var(--card-bg);
  }
  
  .indicator-title {
    margin-top: 0;
    margin-bottom: 1rem;
    font-size: 1rem;
    color: var(--text-color);
  }
  
  .indicator-fields {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 0.5rem;
  }
  
  /* Dark mode styles */
  .dark-mode .indicator-form {
    border-color: var(--dark-border-color);
    background-color: var(--dark-card-bg);
  }
  
  .dark-mode .indicator-title {
    color: var(--dark-text-color);
  }
  </style>