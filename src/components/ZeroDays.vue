<template>
    <div id="zero-days" class="card mb-4 animate__animated animate__fadeIn">
      <div class="card-header">
        <h2>Zero-Day</h2>
      </div>
      <div class="card-body">
        <p class="text-muted">El conocimiento de los "zero days" o vulnerabilidades de día cero es fundamental en el ámbito de la ciberseguridad. Estas vulnerabilidades son fallos de seguridad en software o hardware que son desconocidos para los fabricantes y, por lo tanto, no tienen un parche o solución disponible en el momento de su descubrimiento
        </p>
        
        <div v-if="filteredZeroDays.length === 0" class="text-center py-4">
          <p>No se han reportado zero-days este período</p>
        </div>
        
        <div v-else>
          <table class="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Plataforma</th>
                <th>Fecha Detección</th>
                <th>Estado</th>
                <th v-if="hasActions">Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(zeroDay, index) in filteredZeroDays" :key="zeroDay.id || index">
                <td>{{ zeroDay.id || 'N/A' }}</td>
                <td>
                  <a v-if="zeroDay.link" :href="zeroDay.link" target="_blank" rel="noopener noreferrer">
                    {{ zeroDay.nombre || 'Sin nombre' }}
                  </a>
                  <span v-else>{{ zeroDay.nombre || 'Sin nombre' }}</span>
                </td>
                <td>{{ zeroDay.plataforma || 'N/A' }}</td>
                <td>{{ formatDate(zeroDay.fecha) }}</td>
                <td>
                  <span class="badge" :class="zeroDay.activo ? 'bg-danger' : 'bg-secondary'">
                    {{ zeroDay.activo ? 'Activo' : 'Mitigado' }}
                  </span>
                </td>
                <td v-if="hasActions">
                  <button 
                    v-if="editable"
                    @click="$emit('edit-zero-day', zeroDay)"
                    class="btn btn-sm btn-outline-primary"
                  >
                    <i class="fas fa-edit"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div class="alert alert-secondary mt-3">
          <em>Clasificación: TLP:CLEAR | La información contenida en este informe puede ser compartida sin restricción.</em>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ZeroDays',
    props: {
      zeroDays: {
        type: Array,
        required: true,
        default: () => [],
        validator: (value) => {
          return value.every(item => {
            const hasRequiredFields = 'nombre' in item && 'plataforma' in item
            const hasValidStatus = 'activo' in item ? typeof item.activo === 'boolean' : true
            return hasRequiredFields && hasValidStatus
          })
        }
      },
      editable: {
        type: Boolean,
        default: false
      },
      showMitigated: {
        type: Boolean,
        default: true
      }
    },
    computed: {
      filteredZeroDays() {
        if (this.showMitigated) {
          return this.zeroDays
        }
        return this.zeroDays.filter(day => day.activo)
      },
      hasActions() {
        return this.editable
      }
    },
    methods: {
      formatDate(dateString) {
        if (!dateString) return 'N/A'
        try {
          const options = { year: 'numeric', month: 'short', day: 'numeric' }
          return new Date(dateString).toLocaleDateString('es-ES', options)
        } catch {
          return dateString
        }
      }
    },
    watch: {
      zeroDays: {
        handler(newVal) {
          console.log('ZeroDays actualizados:', newVal)
        },
        deep: true
      }
    }
  }
  </script>
  
  <style scoped>
  .table {
    width: 100%;
    margin-bottom: 1rem;
    color: inherit;
    border-collapse: collapse;
  }
  
  .table th,
  .table td {
    padding: 0.75rem;
    vertical-align: top;
    border-top: 1px solid var(--border-color, #dee2e6);
  }
  
  .table thead th {
    vertical-align: bottom;
    border-bottom: 2px solid var(--border-color, #dee2e6);
  }
  
  .table-striped tbody tr:nth-of-type(odd) {
    background-color: var(--striped-row-bg, rgba(0, 0, 0, 0.05));
  }
  
  .dark-mode .table-striped tbody tr:nth-of-type(odd) {
    --striped-row-bg: rgba(255, 255, 255, 0.05);
  }
  
  .badge {
    padding: 0.35em 0.65em;
    font-size: 0.75em;
    font-weight: 700;
    border-radius: 0.25rem;
    display: inline-block;
  }
  
  .bg-danger {
    background-color: var(--danger-color, #dc3545);
    color: white;
  }
  
  .bg-secondary {
    background-color: var(--secondary-color, #6c757d);
    color: white;
  }
  
  .btn-outline-primary {
    border-color: var(--primary-color, #007bff);
    color: var(--primary-color, #007bff);
  }
  
  .btn-outline-primary:hover {
    background-color: var(--primary-color, #007bff);
    color: white;
  }
  
  .text-muted {
    color: var(--text-muted, #6c757d) !important;
  }
  
  .alert-secondary {
    background-color: var(--alert-secondary-bg, rgba(108, 117, 125, 0.1));
    border-color: var(--alert-secondary-border, rgba(108, 117, 125, 0.2));
    color: inherit;
  }
  
  .dark-mode .alert-secondary {
    --alert-secondary-bg: rgba(108, 117, 125, 0.2);
    --alert-secondary-border: rgba(108, 117, 125, 0.3);
  }
  </style>