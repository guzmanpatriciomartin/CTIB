<template>
  <div id="incidentes" class="card mb-4 animate__animated animate__fadeIn">
    <div class="card-header">
      <h2>Incidentes Detectados</h2>
    </div>
    <div class="card-body">
      <p class="text-muted">
        El conocimiento y la vigilancia de los ciber incidentes es fundamentales para la seguridad de cualquier organización. La respuesta ante estos incidentes y su posterior análisis post mortem son cruciales para el proceso de fortalecimiento de los sistemas. Al mantenerse informadas sobre los últimos ataques, las organizaciones pueden identificar y mitigar posibles amenazas.
      </p>
      <ul class="list-group">
        <!-- Iterar sobre incidentesLocales en lugar de incidentes -->
        <li v-for="(incidente, index) in incidentesLocales" :key="index" class="list-group-item">
          <div @click="toggleDescription(index)" class="incidente-header">
            <strong>{{ incidente.fecha }}:</strong> {{ incidente.empresa }}
            <span class="badge badge-primary">{{ incidente.pais }}</span>
            <span class="badge badge-secondary">{{ incidente.sector }}</span>
          </div>
          <div v-if="incidente.showDescription" class="incidente-description mt-2">
            <p>{{ incidente.descripcion }}</p>
          </div>
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
    incidentes: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      // Copia local de los incidentes con showDescription
      incidentesLocales: this.incidentes.map(incidente => ({
        ...incidente,
        showDescription: false, // Añadimos showDescription a cada incidente
      })),
    };
  },
  watch: {
    // Observar cambios en la prop incidentes
    incidentes: {
      handler(newIncidentes) {
        // Actualizar incidentesLocales cuando cambia la prop incidentes
        this.incidentesLocales = newIncidentes.map(incidente => ({
          ...incidente,
          showDescription: false, // Reiniciar showDescription
        }));
      },
      deep: true, // Observar cambios profundos en el array
    },
  },
  methods: {
    // Método para expandir/contraer la descripción de un incidente
    toggleDescription(index) {
      this.incidentesLocales[index].showDescription = !this.incidentesLocales[index].showDescription;
    },
  },
};
</script>

<style scoped>
.list-group-item {
  background-color: var(--light-card-bg);
  border-color: var(--light-border);
  color: var(--light-text);
  cursor: pointer;
}

.dark-mode .list-group-item {
  background-color: var(--dark-card-bg);
  border-color: var(--dark-border);
  color: var(--dark-text);
}

.incidente-header {
  display: flex;
  align-items: center;
  gap: 10px;
}

.badge {
  padding: 5px 10px;
  border-radius: 12px;
  font-size: 0.9rem;
}

.badge-primary {
  background-color: #007bff;
  color: white;
}

.badge-secondary {
  background-color: #6c757d;
  color: white;
}

.incidente-description {
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  margin-top: 10px;
}

.dark-mode .incidente-description {
  background-color: rgba(255, 255, 255, 0.05);
}
</style>