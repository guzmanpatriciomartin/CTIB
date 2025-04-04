<template>
  <div id="app" :class="{ 'dark-mode': darkMode }">
    <header class="app-header">
      <h1>Cyber Threat Intelligence Brief</h1>
      <div class="controls">
        <button @click="toggleDarkMode" class="btn btn-mode">
          <i :class="darkMode ? 'fas fa-sun' : 'fas fa-moon'"></i>
        </button>
        <button @click="editarContenido" class="btn btn-primary">
          <i class="fas fa-edit"></i> Editar Brief
        </button>
      </div>
    </header>

    <ResumenEjecutivo
      :mes="mes"
      :año="año"
      :totalVulnerabilidades="totalVulnerabilidades"
      :vulnerabilidadesCriticas="vulnerabilidadesCriticas"
      :vulnerabilidadesAltas="vulnerabilidadesAltas"
      :vulnerabilidadesMedias="vulnerabilidadesMedias"
      :sectoresAfectados="sectoresAfectados"
      :gruposRansomware="gruposRansomware"
      :campañasIngenieria="campañasIngenieria"
      :indicadores="indicadores"
    />

    <div v-if="mostrarFormulario" class="modal-overlay">
      <div class="modal-content">
        <FormularioThreatIntelligenceBrief
          :mes="mes"
          :año="año"
          :totalVulnerabilidades="totalVulnerabilidades"
          :vulnerabilidadesCriticas="vulnerabilidadesCriticas"
          :vulnerabilidadesAltas="vulnerabilidadesAltas"
          :vulnerabilidadesMedias="vulnerabilidadesMedias"
          :sectoresAfectados="sectoresAfectados"
          :gruposRansomware="gruposRansomware"
          :campañasIngenieria="campañasIngenieria"
          :indicadores="indicadores"
          :incidentes="incidentes"
          :exploits="exploits"
          :cves="cves"
          :alertas="alertas"
          :fuentes="fuentes"
          :mitigaciones="mitigaciones"
          @guardar="guardarContenido"
          @cerrar="cerrarFormulario"
        />
      </div>
    </div>

    

    <IncidentesDetectados :incidentes="incidentes" />
    <ExploitsPublicados :exploits="exploits" />
    <ZeroDays :zero-days="zeroDays" />
    <VulnerabilidadesCVE :cves="cves" />
    <AlertasAmenazas :alertas="alertas" />
    <FuentesInteligencia :fuentes="fuentes" />
    <Mitigaciones :mitigaciones="mitigaciones" />
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import ZeroDays from './components/ZeroDays.vue'
import ResumenEjecutivo from './components/ResumenEjecutivo.vue'
import IncidentesDetectados from './components/IncidentesDetectados.vue'
import ExploitsPublicados from './components/ExploitsPublicados.vue'
import VulnerabilidadesCVE from './components/VulnerabilidadesCVE.vue'
import AlertasAmenazas from './components/AlertasAmenazas.vue'
import FuentesInteligencia from './components/FuentesInteligencia.vue'
import Mitigaciones from './components/MitigacionesInfo.vue'
import FormularioThreatIntelligenceBrief from './components/FormularioThreatIntelligenceBrief.vue'

export default {
  components: {
    ResumenEjecutivo,
    IncidentesDetectados,
    ExploitsPublicados,
    VulnerabilidadesCVE,
    AlertasAmenazas,
    FuentesInteligencia,
    Mitigaciones,
    FormularioThreatIntelligenceBrief,
    ZeroDays
  },
  setup() {
    const darkMode = ref(false)
    const mostrarFormulario = ref(false)

    // Datos del estado
    const mes = ref('Febrero')
    const año = ref('2025')
    const totalVulnerabilidades = ref(3711)
    const vulnerabilidadesCriticas = ref(1)
    const vulnerabilidadesAltas = ref(49)
    const vulnerabilidadesMedias = ref(729)
    const sectoresAfectados = ref('Salud, Industrial, Gubernamental, Financiero, Educación, Energía, Telecomunicaciones')
    const gruposRansomware = ref('DragonRaaS, Akira, LockBit, BlackCat')
    const campañasIngenieria = ref('troyanos bancarios, Botnets, Phishing, Supply Chain')

    const indicadores = ref({
      incidentes: { valor: 4, porcentaje: "+400%", clase: "text-danger" },
      zeroDays: { valor: 6, porcentaje: "0%", clase: "text-muted" },
      exploits: { valor: 22, porcentaje: "+25%", clase: "text-success" },
      nuevosCVE: { valor: 9, porcentaje: "+10%", clase: "text-success" },
      mitigaciones: { valor: 0, porcentaje: "0%", clase: "text-muted" },
      alertas: { valor: 4, porcentaje: "+400%", clase: "text-danger" }
    })

    const sectores = ref([
      { id: 1, nombre: 'Salud', icono: 'fa-hospital', color: '#e63946' },
      { id: 2, nombre: 'Industrial', icono: 'fa-industry', color: '#457b9d' },
      { id: 3, nombre: 'Gubernamental', icono: 'fa-landmark', color: '#1d3557' },
      { id: 4, nombre: 'Financiero', icono: 'fa-coins', color: '#2a9d8f' },
      { id: 5, nombre: 'Educación', icono: 'fa-graduation-cap', color: '#e9c46a' },
      { id: 6, nombre: 'Energía', icono: 'fa-bolt', color: '#f4a261' },
      { id: 7, nombre: 'Telecomunicaciones', icono: 'fa-tower-cell', color: '#9b5de5' }
    ])

    const incidentes = ref([
      {
        fecha: '03/02',
        empresa: 'Technico',
        sector: 'Agro',
        pais: 'Brasil',
        descripcion: 'Technico, empresa del sector agro en Brasil, fue incluida en el sitio de filtración de datos del grupo de ransomware Arcus Media, lo que sugiere un posible ataque de ransomware.',
      },
      {
        fecha: '04/02',
        empresa: '360 Energy',
        sector: 'Energía',
        pais: 'Argentina',
        descripcion: '360 Energy, una gran firma de energía en el sector del petróleo y el gas en Argentina, ha sido añadida al sitio de víctimas de Akira.'
      },
      {
        fecha: '10/02',
        empresa: 'Sizte',
        sector: 'Consultoría',
        pais: 'Argentina',
        descripcion: 'El sitio web de la consultora Sizte sufrió una modificación no autorizada por el grupo DragonRaaS.'
      }
    ])

    const exploits = ref([
      { fecha: '28/02', nombre: 'XSS en Label Studio', tipo: 'Network', plataforma: 'Label Studio' },
      { fecha: '28/02', nombre: 'RCE en FortiManager 7.6.0', tipo: 'Remote Code', plataforma: 'Fortinet' }
    ])
    const zeroDays = ref([
      {
        id: 'ZD-2025-001',
        nombre: 'Windows Kernel Privilege Escalation',
        plataforma: 'Microsoft Windows',
        fecha: '15/02/2025',
        activo: true,
        link: 'https://example.com/zero-day-001'
      },
      {
        id: 'ZD-2025-002',
        nombre: 'Apache Struts RCE',
        plataforma: 'Apache Struts',
        fecha: '22/02/2025',
        activo: false,
        link: 'https://example.com/zero-day-002'
      }
    ])
    const cves = ref([
      { id: 'CVE-2025-0108', aplicativo: 'Palo Alto PAN-OS', cvss: 7.3, descripcion: 'Descripción del CVE-2025-0108' },
      { id: 'CVE-2024-45569', aplicativo: 'Qualcomm Snapdragon', cvss: 9.8, descripcion: 'Descripción del CVE-2024-45569' }
    ])

    const alertas = ref([
      { tipo: 'Campaña del troyano bancario Coyote', descripcion: 'Archivos LNK que inyectan PowerShell', severidad: 'Alto' },
      { tipo: 'Ransomware Makop y Lynx', descripcion: 'Ataques en LATAM', severidad: 'Crítico' }
    ])

    const fuentes = ref([
      { nombre: 'FortiGuard Labs', referencia: 'Detección de campañas de ransomware' },
      { nombre: 'MITRE ATT&CK', referencia: 'Tácticas y técnicas de grupos de amenazas' }
    ])

    const mitigaciones = ref([
      'Actualizaciones y Parches',
      'Protección contra Ransomware',
      'Detección de Troyanos Bancarios'
    ])

    // Computed
    const incidentesPorSector = computed(() => {
      return (sectorNombre) => {
        return incidentes.value.filter(incidente => 
          incidente.sector.toLowerCase().includes(sectorNombre.toLowerCase())
        )
      }
    })

    // Métodos
    const toggleDarkMode = () => {
      darkMode.value = !darkMode.value
    }

    const editarContenido = () => {
      mostrarFormulario.value = true
    }

    const cerrarFormulario = () => {
      mostrarFormulario.value = false
    }

    const guardarContenido = (nuevosDatos) => {
      mes.value = nuevosDatos.mes
      año.value = nuevosDatos.año
      totalVulnerabilidades.value = nuevosDatos.totalVulnerabilidades
      vulnerabilidadesCriticas.value = nuevosDatos.vulnerabilidadesCriticas
      vulnerabilidadesAltas.value = nuevosDatos.vulnerabilidadesAltas
      vulnerabilidadesMedias.value = nuevosDatos.vulnerabilidadesMedias
      sectoresAfectados.value = nuevosDatos.sectoresAfectados
      gruposRansomware.value = nuevosDatos.gruposRansomware
      campañasIngenieria.value = nuevosDatos.campañasIngenieria
      indicadores.value = nuevosDatos.indicadores
      incidentes.value = nuevosDatos.incidentes
      exploits.value = nuevosDatos.exploits
      cves.value = nuevosDatos.cves
      alertas.value = nuevosDatos.alertas
      fuentes.value = nuevosDatos.fuentes
      mitigaciones.value = nuevosDatos.mitigaciones
      cerrarFormulario()
    }

    return {
      darkMode,
      mostrarFormulario,
      mes,
      año,
      totalVulnerabilidades,
      vulnerabilidadesCriticas,
      vulnerabilidadesAltas,
      vulnerabilidadesMedias,
      sectoresAfectados,
      gruposRansomware,
      campañasIngenieria,
      indicadores,
      sectores,
      incidentes,
      exploits,
      cves,
      alertas,
      fuentes,
      mitigaciones,
      incidentesPorSector,
      toggleDarkMode,
      editarContenido,
      cerrarFormulario,
      guardarContenido,
      zeroDays
    }
  }
}
</script>

<style scoped>
#app {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  transition: background-color 0.3s, color 0.3s;
}

.dark-mode {
  background-color: #1a1a1a;
  color: #f0f0f0;
}

.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #dee2e6;
}

.dark-mode .app-header {
  border-bottom-color: #444;
}

.controls {
  display: flex;
  gap: 1rem;
}

.btn {
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.btn-primary {
  background-color: #007bff;
  color: white;
  border: none;
}

.btn-primary:hover {
  background-color: #0056b3;
}

.btn-mode {
  background-color: transparent;
  border: 1px solid #dee2e6;
}

.dark-mode .btn-mode {
  border-color: #666;
  color: #f0f0f0;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  width: 90%;
  max-width: 800px;
  max-height: 90vh;
  overflow-y: auto;
}

.dark-mode .modal-content {
  background-color: #2d2d2d;
}

.sectors-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}
</style>