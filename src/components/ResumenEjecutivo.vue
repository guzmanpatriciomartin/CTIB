<template>
  <div class="card mb-4 animate__animated animate__fadeIn">
    <div class="card-header">
      <h2>Resumen Ejecutivo</h2>
    </div>
    <div class="card-body">
      <div class="resumen-grid">
        <div class="resumen-texto">
          <ul>
            <li v-for="(punto, index) in puntosResumen" :key="index">
              {{ punto }}
            </li>
          </ul>
        </div>
        <div class="resumen-dashboard">
          <div class="indicator-grid">
            <!-- Indicador 1: Incidentes -->
            <div class="indicator-item" @click="scrollToSection('incidentes')">
              <i class="fas fa-exclamation-triangle fa-2x icono"></i>
              <h4>4</h4>
              <small>Incidentes</small>
              <span class="text-danger">+400%</span>
            </div>

            <!-- Indicador 2: Zero Days -->
            <div class="indicator-item" @click="scrollToSection('zero-days')">
              <i class="fas fa-bug fa-2x icono"></i>
              <h4>6</h4>
              <small>Zero Days</small>
              <span class="text-muted">0%</span>
            </div>

            <!-- Indicador 3: Exploits -->
            <div class="indicator-item" @click="scrollToSection('exploits')">
              <i class="fas fa-code fa-2x icono"></i>
              <h4>22</h4>
              <small>Exploits</small>
              <span class="text-success">+25%</span>
            </div>

            <!-- Indicador 4: Nuevos CVE -->
            <div class="indicator-item" @click="scrollToSection('vulnerabilidades')">
              <i class="fas fa-shield-alt fa-2x icono"></i>
              <h4>9</h4>
              <small>Nuevos CVE</small>
              <span class="text-success">+10%</span>
            </div>

            <!-- Indicador 5: Mitigaciones -->
            <div class="indicator-item" @click="scrollToSection('conclusiones')">
              <i class="fas fa-tools fa-2x icono"></i>
              <h4>0</h4>
              <small>Mitigaciones</small>
              <span class="text-muted">0%</span>
            </div>

            <!-- Indicador 6: Alertas -->
            <div class="indicator-item" @click="scrollToSection('alertas')">
              <i class="fas fa-bell fa-2x icono"></i>
              <h4>4</h4>
              <small>Alertas</small>
              <span class="text-danger">+400%</span>
            </div>
          </div>
        </div>
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
    mes: String,
    año: String,
    totalVulnerabilidades: Number,
    vulnerabilidadesCriticas: Number,
    vulnerabilidadesAltas: Number,
    vulnerabilidadesMedias: Number,
    sectoresAfectados: String,
    gruposRansomware: String,
    campañasIngenieria: String,
  },
  computed: {
    puntosResumen() {
      return [
        `En ${this.mes} de ${this.año}, se publicaron ${this.totalVulnerabilidades} nuevas vulnerabilidades. De estas, ${this.vulnerabilidadesCriticas} fue crítica, ${this.vulnerabilidadesAltas} se calificaron como altas y ${this.vulnerabilidadesMedias} como medias.`,
        `En el mes de ${this.mes} se registraron importantes ataques dirigidos al sector de ${this.sectoresAfectados}.`,
        `Se descubrieron nuevas vulnerabilidades explotadas en naturaleza que impactan a Microsoft, Fortinet y Palo Alto.`,
        `Los grupos más destacados en la publicación de nuevas víctimas fueron ${this.gruposRansomware}.`,
        `Además, se descubrieron nuevas campañas de ${this.campañasIngenieria}.`,
      ];
    },
  },
  methods: {
    scrollToSection(sectionId) {
      document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    },
  },
};
</script>

<style scoped>
.resumen-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;
}

.resumen-texto ul {
  list-style-type: disc;
  padding-left: 1.5rem;
}

.resumen-texto ul li {
  margin-bottom: 0.5rem;
  font-size: 1rem;
  line-height: 1.6;
}

.resumen-texto ul li strong {
  color: var(--primary-color);
}

.indicator-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.indicator-item {
  background: rgba(0, 123, 255, 0.1);
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.indicator-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.indicator-item h4 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.indicator-item small {
  font-size: 0.9rem;
  color: #666;
}

.indicator-item .text-success {
  color: #28a745;
}

.indicator-item .text-danger {
  color: #dc3545;
}

.indicator-item .text-muted {
  color: #6c757d;
}

.alert-secondary {
  background-color: rgba(108, 117, 125, 0.1);
  border-color: rgba(108, 117, 125, 0.2);
  color: var(--text-color);
  margin-top: 1.5rem;
}
</style>