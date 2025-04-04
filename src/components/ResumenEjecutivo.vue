<template>
  <div class="card mb-4 animate__animated animate__fadeIn">
    <img src="../assets/Acc_Branded Tools_Email Banners_20210923.png" alt="CTI Brief Banner">
    <div class="card-header">
      <h2>Resumen Ejecutivo</h2>
    </div>
    <div class="card-body">
      <div class="resumen-grid">
        <div class="resumen-texto">
          <ul class="lista-principal">
            <li v-for="(punto, index) in puntosPersonalizados" :key="index">
              <div class="punto-contenido">
                {{ punto.texto }}
                <ul v-if="punto.subpuntos && punto.subpuntos.length" class="subpuntos">
                  <li v-for="(subpunto, subIndex) in punto.subpuntos" :key="subIndex">
                    {{ subpunto }}
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div class="resumen-dashboard">
          <div class="indicator-grid">
            <div class="indicator-item" @click="scrollToSection('incidentes')">
              <i class="fas fa-exclamation-triangle fa-2x icono"></i>
              <h4>{{ indicadores.incidentes.valor }}</h4>
              <small>Incidentes</small> <br>
              <span :class="indicadores.incidentes.clase">{{ indicadores.incidentes.porcentaje }}</span>
            </div>
            <div class="indicator-item" @click="scrollToSection('zero-days')">
              <i class="fas fa-bug fa-2x icono"></i>
              <h4>{{ indicadores.zeroDays.valor }}</h4>
              <small>Zero Days</small><br>
              <span :class="indicadores.zeroDays.clase">{{ indicadores.zeroDays.porcentaje }}</span>
            </div>
            <div class="indicator-item" @click="scrollToSection('exploits')">
              <i class="fas fa-code fa-2x icono"></i>
              <h4>{{ indicadores.exploits.valor }}</h4>
              <small>Exploits</small><br>
              <span :class="indicadores.exploits.clase">{{ indicadores.exploits.porcentaje }}</span>
            </div>
            <div class="indicator-item" @click="scrollToSection('vulnerabilidades')">
              <i class="fas fa-shield-alt fa-2x icono"></i>
              <h4>{{ indicadores.nuevosCVE.valor }}</h4>
              <small>Nuevos CVE</small><br>
              <span :class="indicadores.nuevosCVE.clase">{{ indicadores.nuevosCVE.porcentaje }}</span>
            </div>
            <div class="indicator-item" @click="scrollToSection('conclusiones')">
              <i class="fas fa-tools fa-2x icono"></i>
              <h4>{{ indicadores.mitigaciones.valor }}</h4>
              <small>Mitigaciones</small><br>
              <span :class="indicadores.mitigaciones.clase">{{ indicadores.mitigaciones.porcentaje }}</span>
            </div>
            <div class="indicator-item" @click="scrollToSection('alertas')">
              <i class="fas fa-bell fa-2x icono"></i>
              <h4>{{ indicadores.alertas.valor }}</h4>
              <small>Alertas</small><br>
              <span :class="indicadores.alertas.clase">{{ indicadores.alertas.porcentaje }}</span>
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
    puntosPersonalizados: {
      type: Array,
      required: true,
      default: () => [
        {
          texto: 'Actividad destacada de APT29 relacionada con campaña de phishing',
          subpuntos: [
            'Targeting sector energético',
            'Nuevo malware CloudWizard detectado',
            'Técnicas de evasión mejoradas'
          ]
        },
        {
          texto: 'Aumento de vulnerabilidades en software de virtualización',
          subpuntos: [
            'CVE-2024-12345 crítico en Hypervisor X',
            'Parche disponible desde 15/03/2024',
            'Exploits activos reportados'
          ]
        }
      ]
    },
    indicadores: {
      type: Object,
      required: true,
      default: () => ({
        incidentes: { valor: 0, porcentaje: '0%', clase: "text-muted" },
        zeroDays: { valor: 0, porcentaje: '0%', clase: "text-muted" },
        exploits: { valor: 0, porcentaje: '0%', clase: "text-muted" },
        nuevosCVE: { valor: 0, porcentaje: '0%', clase: "text-muted" },
        mitigaciones: { valor: 0, porcentaje: '0%', clase: "text-muted" },
        alertas: { valor: 0, porcentaje: '0%', clase: "text-muted" }
      })
    }
  },
  methods: {
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
};
</script>

<style scoped>
.resumen-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;
}

.lista-principal {
  list-style-type: none;
  padding-left: 1rem;
}

.lista-principal > li {
  margin-bottom: 1.5rem;
  position: relative;
  padding-left: 1.5rem;
  line-height: 1.6;
}

.lista-principal > li::before {
  content: "•";
  color: #007bff;
  font-weight: bold;
  display: inline-block;
  width: 1em;
  margin-left: -1.5rem;
  position: absolute;
  left: 0;
}

.subpuntos {
  list-style-type: circle;
  margin-top: 0.5rem;
  padding-left: 2rem;
}

.subpuntos li {
  font-size: 0.95em;
  color: #6c757d;
  margin-bottom: 0.3rem;
  position: relative;
}

.subpuntos li::before {
  content: "◦";
  color: #6c757d;
  margin-right: 0.5rem;
}

.punto-contenido {
  background: rgba(0, 123, 255, 0.03);
  padding: 0.8rem;
  border-radius: 4px;
  transition: background 0.2s ease;
}

.punto-contenido:hover {
  background: rgba(0, 123, 255, 0.05);
}

.indicator-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.indicator-item {
  background: rgba(0, 123, 255, 0.05);
  border: 1px solid #dee2e6;
  border-radius: 8px;
  padding: 1.25rem;
  text-align: center;
  transition: all 0.2s ease;
  cursor: pointer;
}

.indicator-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
}

.alert-secondary {
  background-color: rgba(108, 117, 125, 0.05);
  border: 1px solid rgba(108, 117, 125, 0.15);
  color: #4a4a4a;
  font-size: 0.9em;
}

.text-success { color: #28a745; }
.text-danger { color: #dc3545; }
.text-muted { color: #6c757d; }

.fa-2x {
  font-size: 1.75em;
  margin-bottom: 0.5rem;
}
</style>