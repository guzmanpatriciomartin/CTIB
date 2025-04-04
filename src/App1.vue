<template>
  <div id="app">
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
        <h2>Editar Threat Intelligence Brief</h2>
        <div class="modal-body">
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
    </div>

    <IncidentesDetectados :incidentes="incidentes" />
    <ExploitsPublicados :exploits="exploits" />
    <VulnerabilidadesCVE :cves="cves" />
    <AlertasAmenazas :alertas="alertas" />
    <FuentesInteligencia :fuentes="fuentes" />
    <Mitigaciones :mitigaciones="mitigaciones" />
    <button @click="editarContenido" class="btn btn-primary mb-4">
      Cyber Threat Intelligence Brief
    </button>
  </div>
</template>

<script>
import ResumenEjecutivo from './components/ResumenEjecutivo.vue';
import IncidentesDetectados from './components/IncidentesDetectados.vue';
import ExploitsPublicados from './components/ExploitsPublicados.vue';
import VulnerabilidadesCVE from './components/VulnerabilidadesCVE.vue';
import AlertasAmenazas from './components/AlertasAmenazas.vue';
import FuentesInteligencia from './components/ReferenciasSector.vue';
import Mitigaciones from './components/MitigacionesSector.vue';
import FormularioThreatIntelligenceBrief from './components/FormularioThreatIntelligenceBrief.vue';

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
  },
  data() {
    return {
      mes: 'Febrero',
      año: '2025',
      totalVulnerabilidades: 3711,
      vulnerabilidadesCriticas: 1,
      vulnerabilidadesAltas: 49,
      vulnerabilidadesMedias: 729,
      sectoresAfectados: 'Salud, Industrial, Gubernamental',
      gruposRansomware: 'DragonRaaS, Akira',
      campañasIngenieria: 'troyanos bancarios y Botnets',
      indicadores: {
        incidentes: { valor: 4, porcentaje: "+400%", clase: "text-danger" },
        zeroDays: { valor: 6, porcentaje: "0%", clase: "text-muted" },
        exploits: { valor: 22, porcentaje: "+25%", clase: "text-success" },
        nuevosCVE: { valor: 9, porcentaje: "+10%", clase: "text-success" },
        mitigaciones: { valor: 0, porcentaje: "0%", clase: "text-muted" },
        alertas: { valor: 4, porcentaje: "+400%", clase: "text-danger" },
      },
      incidentes: [
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
          descripcion: '360 Energy, una gran firma de energía en el sector del petróleo y el gas en Argentina, ha sido añadida al sitio de víctimas de Akira. Probablemente fue el objetivo de un ataque de ransomware.',
        },
        {
          fecha: '10/02',
          empresa: 'Sizte',
          sector: 'Consultoría',
          pais: 'Argentina',
          descripcion: 'El sitio web de la consultora Sizte sufrió una modificación no autorizada por el grupo DragonRaaS, presentando alteraciones y contenido eliminado.',
        },
        {
          fecha: '11/02',
          empresa: 'AGESIC',
          sector: 'Gobierno',
          pais: 'Uruguay',
          descripcion: 'Un actor de amenazas puso a la venta una base de datos presuntamente perteneciente a AGESIC (UY), con sede en Montevideo, Uruguay, que contiene 574.600 registros, incluyendo 404.568 correos electrónicos únicos y 87.238 números de teléfono únicos.',
        },
      ],
      exploits: [
        { fecha: '28/02', nombre: 'XSS en Label Studio', tipo: 'Network', plataforma: 'Label Studio' },
        { fecha: '28/02', nombre: 'RCE en FortiManager 7.6.0', tipo: 'Remote Code', plataforma: 'Fortinet' },
      ],
      cves: [
        { id: 'CVE-2025-0108', aplicativo: 'Palo Alto PAN-OS', cvss: 7.3, descripcion: 'Descripción del CVE-2025-0108' },
        { id: 'CVE-2024-45569', aplicativo: 'Qualcomm Snapdragon', cvss: 9.8, descripcion: 'Descripción del CVE-2024-45569' },
      ],
      alertas: [
        { tipo: 'Campaña del troyano bancario Coyote', descripcion: 'Archivos LNK que inyectan PowerShell', severidad: 'Alto' },
        { tipo: 'Ransomware Makop y Lynx', descripcion: 'Ataques en LATAM', severidad: 'Crítico' },
      ],
      fuentes: [
        { nombre: 'FortiGuard Labs', referencia: 'Detección de campañas de ransomware' },
        { nombre: 'MITRE ATT&CK', referencia: 'Tácticas y técnicas de grupos de amenazas' },
      ],
      mitigaciones: [
        'Actualizaciones y Parches',
        'Protección contra Ransomware',
        'Detección de Troyanos Bancarios',
      ],
      mostrarFormulario: false,
    };
  },
  methods: {
    editarContenido() {
      this.mostrarFormulario = true;
    },
    cerrarFormulario() {
      this.mostrarFormulario = false;
    },
    guardarContenido(nuevosDatos) {
      // Actualiza todas las propiedades del estado con los nuevos datos
      this.mes = nuevosDatos.mes;
      this.año = nuevosDatos.año;
      this.totalVulnerabilidades = nuevosDatos.totalVulnerabilidades;
      this.vulnerabilidadesCriticas = nuevosDatos.vulnerabilidadesCriticas;
      this.vulnerabilidadesAltas = nuevosDatos.vulnerabilidadesAltas;
      this.vulnerabilidadesMedias = nuevosDatos.vulnerabilidadesMedias;
      this.sectoresAfectados = nuevosDatos.sectoresAfectados;
      this.gruposRansomware = nuevosDatos.gruposRansomware;
      this.campañasIngenieria = nuevosDatos.campañasIngenieria;
      this.indicadores = nuevosDatos.indicadores;
      this.incidentes = nuevosDatos.incidentes;
      this.exploits = nuevosDatos.exploits;
      this.cves = nuevosDatos.cves;
      this.alertas = nuevosDatos.alertas;
      this.fuentes = nuevosDatos.fuentes;
      this.mitigaciones = nuevosDatos.mitigaciones;
      this.cerrarFormulario();
    },
  },
};
</script>

<style>
/* Estilos generales */
#app {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
}

/* Estilos para el botón de editar */
.btn-primary {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.btn-primary:hover {
  background-color: #0056b3;
}

/* Estilos para el modal */
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
  padding: 20px;
  border-radius: 8px;
  width: 90%;
  max-width: 800px;
  max-height: 90vh; /* Altura máxima del modal */
  overflow-y: auto; /* Habilitar scroll vertical */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.modal-content h2 {
  margin-bottom: 20px;
  font-size: 1.5rem;
  color: #333;
}

.modal-body {
  padding: 10px;
}

/* Estilos para el formulario dentro del modal */
.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

.form-group input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
}

/* Estilos para los botones del formulario */
.btn-secondary {
  background-color: #6c757d;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 10px;
}

.btn-secondary:hover {
  background-color: #5a6268;
}
</style>