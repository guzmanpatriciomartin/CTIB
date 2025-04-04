<template>
  <div>
    <form @submit.prevent="guardar">
      <!-- Sección Resumen Ejecutivo -->
      <div class="form-section">
        <h3 class="section-title">Resumen Ejecutivo</h3>
        
        <!-- Lista de puntos personalizados con subpuntos -->
        <div class="form-group">
          <label class="form-label">Puntos del Resumen:</label>
          <div v-for="(punto, pIndex) in localPuntosResumen" :key="pIndex" class="mb-3">
            <div class="input-group">
              <textarea
                v-model="punto.texto"
                class="form-control"
                rows="2"
                placeholder="Título del punto"
              ></textarea>
              <button
                type="button"
                class="btn btn-danger btn-remove"
                @click="removeItem('localPuntosResumen', pIndex)"
              >
                <i class="fas fa-times"></i>
              </button>
            </div>
            
            <!-- Subpuntos dinámicos -->
            <div class="subpuntos-container">
              <div v-for="(subpunto, sIndex) in punto.subpuntos" :key="sIndex" class="subpunto-item">
                <div class="input-group">
                  <input
                    v-model="punto.subpuntos[sIndex]"
                    type="text"
                    class="form-control"
                    placeholder="Detalle del subpunto"
                  >
                  <button
                    type="button"
                    class="btn btn-outline-danger btn-sm"
                    @click="removeSubpunto(pIndex, sIndex)"
                  >
                    <i class="fas fa-times"></i>
                  </button>
                </div>
              </div>
              <button
                type="button"
                class="btn btn-outline-secondary btn-sm mt-2"
                @click="addSubpunto(pIndex)"
              >
                <i class="fas fa-plus me-2"></i>Añadir Subpunto
              </button>
            </div>
            
            <small class="form-text text-muted mt-1">Ejemplo: {{ ejemplos[pIndex % ejemplos.length] }}</small>
          </div>
          <button
            type="button"
            class="btn btn-outline-primary btn-sm"
            @click="addPunto"
          >
            <i class="fas fa-plus me-2"></i>Añadir Punto Principal
          </button>
        </div>

        <!-- Sección de Indicadores -->
        <h3 class="section-title mt-4">Indicadores del Dashboard</h3>
        <div class="indicators-grid">
          <div v-for="(indicator, key) in localIndicadores" :key="key" class="indicator-form-group">
            <h5 class="indicator-title">{{ getIndicatorLabel(key) }}</h5>
            <div class="form-row">
              <div class="form-group col-md-4">
                <label>Valor</label>
                <input v-model="indicator.valor" type="number" class="form-control" min="0">
              </div>
              <div class="form-group col-md-4">
                <label>Porcentaje</label>
                <input v-model="indicator.porcentaje" type="text" class="form-control" placeholder="+XX%">
              </div>
              <div class="form-group col-md-4">
                <label>Estado</label>
                <select v-model="indicator.clase" class="form-select">
                  <option value="text-success">Bajo</option>
                  <option value="text-muted">Neutral</option>
                  <option value="text-danger">Alto</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Sección Zero-Days -->
      <div class="form-section">
        <h3 class="section-title">Vulnerabilidades Zero-Day</h3>
        <div v-if="localZeroDays && localZeroDays.length">
          <div v-for="(zeroDay, index) in localZeroDays" :key="index" class="list-item">
            <div class="form-row">
              <div class="form-group">
                <label>ID:</label>
                <input v-model="zeroDay.id" type="text" class="form-control" placeholder="ZD-2023-001" required />
              </div>
              <div class="form-group">
                <label>Nombre:</label>
                <input v-model="zeroDay.nombre" type="text" class="form-control" placeholder="Ej: Windows Kernel Exploit" required />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label>Plataforma:</label>
                <input v-model="zeroDay.plataforma" type="text" class="form-control" placeholder="Ej: Microsoft Windows" required />
              </div>
              <div class="form-group">
                <label>Fecha de Detección:</label>
                <input v-model="zeroDay.fecha" type="date" class="form-control" required />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label>Enlace (URL):</label>
                <input v-model="zeroDay.link" type="url" class="form-control" placeholder="https://ejemplo.com/zero-day" />
              </div>
              <div class="form-group">
                <label>Estado:</label>
                <select v-model="zeroDay.activo" class="form-control" required>
                  <option :value="true">Activo</option>
                  <option :value="false">Mitigado</option>
                </select>
              </div>
            </div>
            <div class="form-group">
              <label>Descripción:</label>
              <textarea v-model="zeroDay.descripcion" class="form-control" rows="3" placeholder="Detalles técnicos del zero-day"></textarea>
            </div>
            <button
              type="button"
              class="btn btn-danger btn-sm mt-2"
              @click="removeItem('localZeroDays', index)"
            >
              Eliminar Zero-Day
            </button>
            <hr v-if="index < localZeroDays.length - 1" />
          </div>
        </div>
        <button
          type="button"
          class="btn btn-secondary mb-4"
          @click="addItem('localZeroDays', zeroDayFields)"
        >
          Añadir Zero-Day
        </button>
      </div>

      <!-- Sección Incidentes Detectados -->
      <div class="form-section">
        <h3 class="section-title">Incidentes Detectados</h3>
        <div v-if="localIncidentes && localIncidentes.length">
          <div v-for="(incidente, index) in localIncidentes" :key="index" class="list-item">
            <div class="form-row">
              <div class="form-group">
                <label>Fecha:</label>
                <input v-model="incidente.fecha" type="text" class="form-control" required />
              </div>
              <div class="form-group">
                <label>Empresa:</label>
                <input v-model="incidente.empresa" type="text" class="form-control" required />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label>Sector:</label>
                <input v-model="incidente.sector" type="text" class="form-control" required />
              </div>
              <div class="form-group">
                <label>País:</label>
                <input v-model="incidente.pais" type="text" class="form-control" required />
              </div>
            </div>
            <div class="form-group">
              <label>Descripción:</label>
              <textarea v-model="incidente.descripcion" class="form-control" rows="3" required></textarea>
            </div>
            <button
              type="button"
              class="btn btn-danger btn-sm mt-2"
              @click="removeItem('localIncidentes', index)"
            >
              Eliminar Incidente
            </button>
            <hr v-if="index < localIncidentes.length - 1" />
          </div>
        </div>
        <button
          type="button"
          class="btn btn-secondary mb-4"
          @click="addItem('localIncidentes', incidenteFields)"
        >
          Añadir Incidente
        </button>
      </div>

      <!-- Sección Exploits Publicados -->
      <div class="form-section">
        <h3 class="section-title">Exploits Publicados</h3>
        <div v-if="localExploits && localExploits.length">
          <div v-for="(exploit, index) in localExploits" :key="index" class="list-item">
            <div class="form-row">
              <div class="form-group">
                <label>Fecha:</label>
                <input v-model="exploit.fecha" type="text" class="form-control" required />
              </div>
              <div class="form-group">
                <label>Nombre:</label>
                <input v-model="exploit.nombre" type="text" class="form-control" required />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label>Tipo:</label>
                <input v-model="exploit.tipo" type="text" class="form-control" required />
              </div>
              <div class="form-group">
                <label>Plataforma:</label>
                <input v-model="exploit.plataforma" type="text" class="form-control" required />
              </div>
            </div>
            <div class="form-group">
              <label>Descripción:</label>
              <textarea v-model="exploit.descripcion" class="form-control" rows="3" required></textarea>
            </div>
            <button
              type="button"
              class="btn btn-danger btn-sm mt-2"
              @click="removeItem('localExploits', index)"
            >
              Eliminar Exploit
            </button>
            <hr v-if="index < localExploits.length - 1" />
          </div>
        </div>
        <button
          type="button"
          class="btn btn-secondary mb-4"
          @click="addItem('localExploits', exploitFields)"
        >
          Añadir Exploit
        </button>
      </div>

      <!-- Sección Vulnerabilidades CVE -->
      <div class="form-section">
        <h3 class="section-title">Vulnerabilidades CVE</h3>
        <div v-if="localCves && localCves.length">
          <div v-for="(cve, index) in localCves" :key="index" class="list-item">
            <div class="form-row">
              <div class="form-group">
                <label>ID:</label>
                <input v-model="cve.id" type="text" class="form-control" required />
              </div>
              <div class="form-group">
                <label>CVSS:</label>
                <input v-model="cve.cvss" type="text" class="form-control" required />
              </div>
            </div>
            <div class="form-group">
              <label>Aplicativo Afectado:</label>
              <input v-model="cve.aplicativo" type="text" class="form-control" required />
            </div>
            <div class="form-group">
              <label>Descripción:</label>
              <textarea v-model="cve.descripcion" class="form-control" rows="3" required></textarea>
            </div>
            <button
              type="button"
              class="btn btn-danger btn-sm mt-2"
              @click="removeItem('localCves', index)"
            >
              Eliminar CVE
            </button>
            <hr v-if="index < localCves.length - 1" />
          </div>
        </div>
        <button
          type="button"
          class="btn btn-secondary mb-4"
          @click="addItem('localCves', cveFields)"
        >
          Añadir CVE
        </button>
      </div>

      <!-- Sección Alertas de Amenazas -->
      <div class="form-section">
        <h3 class="section-title">Alertas de Amenazas</h3>
        <div v-if="localAlertas && localAlertas.length">
          <div v-for="(alerta, index) in localAlertas" :key="index" class="list-item">
            <div class="form-group">
              <label>Tipo:</label>
              <input v-model="alerta.tipo" type="text" class="form-control" required />
            </div>
            <div class="form-group">
              <label>Descripción:</label>
              <textarea v-model="alerta.descripcion" class="form-control" rows="3" required></textarea>
            </div>
            <div class="form-group">
              <label>Severidad:</label>
              <select v-model="alerta.severidad" class="form-control" required>
                <option value="Bajo">Bajo</option>
                <option value="Medio">Medio</option>
                <option value="Alto">Alto</option>
                <option value="Crítico">Crítico</option>
              </select>
            </div>
            <button
              type="button"
              class="btn btn-danger btn-sm mt-2"
              @click="removeItem('localAlertas', index)"
            >
              Eliminar Alerta
            </button>
            <hr v-if="index < localAlertas.length - 1" />
          </div>
        </div>
        <button
          type="button"
          class="btn btn-secondary mb-4"
          @click="addItem('localAlertas', alertaFields)"
        >
          Añadir Alerta
        </button>
      </div>

      <!-- Sección Fuentes de Inteligencia -->
      <div class="form-section">
        <h3 class="section-title">Fuentes de Inteligencia</h3>
        <div v-if="localFuentes && localFuentes.length">
          <div v-for="(fuente, index) in localFuentes" :key="index" class="list-item">
            <div class="form-group">
              <label>Nombre:</label>
              <input v-model="fuente.nombre" type="text" class="form-control" required />
            </div>
            <div class="form-group">
              <label>Referencia:</label>
              <input v-model="fuente.referencia" type="text" class="form-control" required />
            </div>
            <button
              type="button"
              class="btn btn-danger btn-sm mt-2"
              @click="removeItem('localFuentes', index)"
            >
              Eliminar Fuente
            </button>
            <hr v-if="index < localFuentes.length - 1" />
          </div>
        </div>
        <button
          type="button"
          class="btn btn-secondary mb-4"
          @click="addItem('localFuentes', fuenteFields)"
        >
          Añadir Fuente
        </button>
      </div>

      <!-- Sección Mitigaciones -->
      <div class="form-section">
        <h3 class="section-title">Mitigaciones</h3>
        <div v-if="localMitigaciones && localMitigaciones.length">
          <div v-for="(mitigacion, index) in localMitigaciones" :key="index" class="list-item">
            <div class="form-group">
              <label>Mitigación {{ index + 1 }}:</label>
              <input v-model="localMitigaciones[index]" type="text" class="form-control" required />
            </div>
            <button
              type="button"
              class="btn btn-danger btn-sm mt-2"
              @click="removeItem('localMitigaciones', index)"
            >
              Eliminar Mitigación
            </button>
            <hr v-if="index < localMitigaciones.length - 1" />
          </div>
        </div>
        <button
          type="button"
          class="btn btn-secondary mb-4"
          @click="addItem('localMitigaciones', mitigacionFields)"
        >
          Añadir Mitigación
        </button>
      </div>

      <!-- Botones de Acción -->
      <div class="form-actions">
        <button type="submit" class="btn btn-primary">Guardar Cambios</button>
        <button type="button" class="btn btn-secondary" @click="cerrar">Cancelar</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    mes: String,
    año: String,
    totalVulnerabilidades: Number,
    vulnerabilidadesCriticas: Number,
    vulnerabilidadesAltas: Number,
    vulnerabilidadesMedias: Number,
    sectoresAfectados: String,
    gruposRansomware: String,
    campañasIngenieria: String,
    indicadores: Object,
    zeroDays: Array,
    incidentes: Array,
    exploits: Array,
    cves: Array,
    alertas: Array,
    fuentes: Array,
    mitigaciones: Array,
    puntosPersonalizados: {
      type: Array,
      default: () => [
        {
          texto: 'Actividad destacada de APT29 relacionada con campaña de phishing',
          subpuntos: [
            'Targeting sector energético',
            'Nuevo malware CloudWizard detectado'
          ]
        }
      ]
    }
  },
  data() {
    return {
      localPuntosResumen: JSON.parse(JSON.stringify(this.puntosPersonalizados)),
      ejemplos: [
        'Ejemplo 1: Incremento de ataques de phishing en sector financiero',
        'Ejemplo 2: Nuevas vulnerabilidades críticas en sistemas de acceso remoto',
        'Ejemplo 3: Campaña de ransomware dirigida a infraestructura crítica'
      ],
      meses: [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
      ],
      sectoresDisponibles: [
        { id: 1, nombre: 'Salud', icono: 'fa-hospital', color: '#e63946' },
        { id: 2, nombre: 'Industrial', icono: 'fa-industry', color: '#457b9d' },
        { id: 3, nombre: 'Gubernamental', icono: 'fa-landmark', color: '#1d3557' },
        { id: 4, nombre: 'Financiero', icono: 'fa-coins', color: '#2a9d8f' },
        { id: 5, nombre: 'Educación', icono: 'fa-graduation-cap', color: '#e9c46a' },
        { id: 6, nombre: 'Energía', icono: 'fa-bolt', color: '#f4a261' },
        { id: 7, nombre: 'Telecomunicaciones', icono: 'fa-tower-cell', color: '#9b5de5' }
      ],
      sectoresSeleccionados: [],
      otrosSectores: '',
      localMes: this.mes,
      localAño: this.año,
      localTotalVulnerabilidades: this.totalVulnerabilidades,
      localVulnerabilidadesCriticas: this.vulnerabilidadesCriticas,
      localVulnerabilidadesAltas: this.vulnerabilidadesAltas,
      localVulnerabilidadesMedias: this.vulnerabilidadesMedias,
      localSectoresAfectados: this.sectoresAfectados,
      localGruposRansomware: this.gruposRansomware,
      localCampañasIngenieria: this.campañasIngenieria,
      localIndicadores: JSON.parse(JSON.stringify(this.indicadores)),
      localZeroDays: JSON.parse(JSON.stringify(this.zeroDays || [])),
      localIncidentes: JSON.parse(JSON.stringify(this.incidentes || [])),
      localExploits: JSON.parse(JSON.stringify(this.exploits || [])),
      localCves: JSON.parse(JSON.stringify(this.cves || [])),
      localAlertas: JSON.parse(JSON.stringify(this.alertas || [])),
      localFuentes: JSON.parse(JSON.stringify(this.fuentes || [])),
      localMitigaciones: JSON.parse(JSON.stringify(this.mitigaciones || [])),
      incidenteFields: [
        { key: 'fecha', label: 'Fecha' },
        { key: 'empresa', label: 'Empresa' },
        { key: 'sector', label: 'Sector' },
        { key: 'pais', label: 'País' },
        { key: 'descripcion', label: 'Descripción' }
      ],
      exploitFields: [
        { key: 'fecha', label: 'Fecha' },
        { key: 'nombre', label: 'Nombre' },
        { key: 'tipo', label: 'Tipo' },
        { key: 'plataforma', label: 'Plataforma' },
        { key: 'descripcion', label: 'Descripción' }
      ],
      cveFields: [
        { key: 'id', label: 'ID' },
        { key: 'aplicativo', label: 'Aplicativo' },
        { key: 'cvss', label: 'CVSS' },
        { key: 'descripcion', label: 'Descripción' }
      ],
      alertaFields: [
        { key: 'tipo', label: 'Tipo' },
        { key: 'descripcion', label: 'Descripción' },
        { key: 'severidad', label: 'Severidad' }
      ],
      fuenteFields: [
        { key: 'nombre', label: 'Nombre' },
        { key: 'referencia', label: 'Referencia' }
      ],
      zeroDayFields: [
        { key: 'id', label: 'ID' },
        { key: 'nombre', label: 'Nombre' },
        { key: 'plataforma', label: 'Plataforma' },
        { key: 'fecha', label: 'Fecha' },
        { key: 'link', label: 'Enlace' },
        { key: 'activo', label: 'Estado', default: true },
        { key: 'descripcion', label: 'Descripción' }
      ],
      mitigacionFields: [
        { key: 'text', label: 'Mitigación' }
      ]
    }
  },
  computed: {
    sectoresAfectadosComputed() {
      const sectoresSeleccionados = this.sectoresSeleccionados.join(', ');
      const otros = this.otrosSectores.trim();
      
      if (sectoresSeleccionados && otros) {
        return `${sectoresSeleccionados}, ${otros}`;
      }
      return sectoresSeleccionados || otros;
    }
  },
  methods: {
    addItem(sectionKey, fields) {
      const newItem = {};
      fields.forEach(field => {
        newItem[field.key] = field.default !== undefined ? field.default : '';
      });
      this[sectionKey].push(newItem);
    },
    addPunto() {
      this.localPuntosResumen.push({ texto: '', subpuntos: [] });
    },
    addSubpunto(pIndex) {
      this.localPuntosResumen[pIndex].subpuntos.push('');
    },
    removeSubpunto(pIndex, sIndex) {
      this.localPuntosResumen[pIndex].subpuntos.splice(sIndex, 1);
    },
    getIndicatorLabel(key) {
      const labels = {
        incidentes: 'Incidentes',
        zeroDays: 'Zero Days',
        exploits: 'Exploits',
        nuevosCVE: 'Nuevos CVE',
        mitigaciones: 'Mitigaciones',
        alertas: 'Alertas'
      };
      return labels[key] || key;
    },
    removeItem(sectionKey, index) {
      this[sectionKey].splice(index, 1);
    },
    guardar() {
      const nuevosDatos = {
        mes: this.localMes,
        año: this.localAño,
        totalVulnerabilidades: this.localTotalVulnerabilidades,
        vulnerabilidadesCriticas: this.localVulnerabilidadesCriticas,
        vulnerabilidadesAltas: this.localVulnerabilidadesAltas,
        vulnerabilidadesMedias: this.localVulnerabilidadesMedias,
        sectoresAfectados: this.sectoresAfectadosComputed,
        gruposRansomware: this.localGruposRansomware,
        campañasIngenieria: this.localCampañasIngenieria,
        indicadores: JSON.parse(JSON.stringify(this.localIndicadores)),
        zeroDays: JSON.parse(JSON.stringify(this.localZeroDays)),
        incidentes: JSON.parse(JSON.stringify(this.localIncidentes)),
        exploits: JSON.parse(JSON.stringify(this.localExploits)),
        cves: JSON.parse(JSON.stringify(this.localCves)),
        alertas: JSON.parse(JSON.stringify(this.localAlertas)),
        fuentes: JSON.parse(JSON.stringify(this.localFuentes)),
        mitigaciones: JSON.parse(JSON.stringify(this.localMitigaciones)),
        puntosPersonalizados: JSON.parse(JSON.stringify(this.localPuntosResumen))
      };
      this.$emit('guardar', nuevosDatos);
    },
    cerrar() {
      this.$emit('cerrar');
    }
  },
  mounted() {
    const sectoresEnProps = this.sectoresAfectados.split(', ').map(s => s.trim());
    this.sectoresSeleccionados = this.sectoresDisponibles
      .filter(sector => sectoresEnProps.includes(sector.nombre))
      .map(sector => sector.nombre);
      
    this.otrosSectores = sectoresEnProps
      .filter(sector => !this.sectoresDisponibles.some(s => s.nombre === sector))
      .join(', ');

    if (!this.localZeroDays || this.localZeroDays.length === 0) {
      this.localZeroDays = [{
        id: '',
        nombre: '',
        plataforma: '',
        fecha: new Date().toISOString().split('T')[0],
        activo: true,
        link: '',
        descripcion: ''
      }];
    }
  }
};
</script>

<style scoped>
.form-section {
  background: #f8f9fa;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.section-title {
  color: #2c3e50;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #dee2e6;
}

.form-row {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -0.5rem;
}

.form-group {
  flex: 1 0 200px;
  margin: 0 0.5rem 1rem;
}

.form-control {
  width: 100%;
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #ced4da;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.form-control:focus {
  border-color: #80bdff;
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

textarea.form-control {
  min-height: 100px;
}

.subpuntos-container {
  margin-left: 2rem;
  margin-top: 0.5rem;
  border-left: 2px solid #dee2e6;
  padding-left: 1rem;
}

.subpunto-item {
  margin-bottom: 0.5rem;
}

.subpunto-item .input-group {
  margin-bottom: 0.3rem;
}

.btn-remove {
  margin-left: 0.5rem;
  border-radius: 0 4px 4px 0;
}

.indicators-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}

.indicator-form-group {
  background: white;
  padding: 1rem;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.list-item {
  background: white;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 2rem;
}

.btn {
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.15s ease-in-out;
}

.btn-primary {
  background-color: #007bff;
  color: white;
  border: none;
}

.btn-primary:hover {
  background-color: #0069d9;
}

.btn-secondary {
  background-color: #6c757d;
  color: white;
  border: none;
}

.btn-secondary:hover {
  background-color: #5a6268;
}

.btn-danger {
  background-color: #dc3545;
  color: white;
  border: none;
}

.btn-danger:hover {
  background-color: #c82333;
}

.btn-sm {
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
}

@media (max-width: 768px) {
  .form-row {
    flex-direction: column;
  }
  
  .form-group {
    flex: 1 0 auto;
  }
  
  .indicators-grid {
    grid-template-columns: 1fr;
  }
}
</style>