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
    />
    <IncidentesDetectados :incidentes="incidentes" />
    <ExploitsPublicados :exploits="exploits" />
    <VulnerabilidadesCVE :cves="cves" />
    <AlertasAmenazas :alertas="alertas" />
    <FuentesInteligencia :fuentes="fuentes" />
    <Mitigaciones :mitigaciones="mitigaciones" />
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

export default {
  components: {
    ResumenEjecutivo,
    IncidentesDetectados,
    ExploitsPublicados,
    VulnerabilidadesCVE,
    AlertasAmenazas,
    FuentesInteligencia,
    Mitigaciones,
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
      incidentes: [
        { fecha: '03/02', empresa: 'Technico', sector: 'Ransomware Arcus Media' },
        { fecha: '04/02', empresa: '360 Energy', sector: 'Akira' },
        { fecha: '13/02', empresa: 'Swiss Medical', sector: '574,600 registros' },
      ],
      exploits: [
        { fecha: '28/02', nombre: 'XSS en Label Studio', tipo: 'Network', plataforma: 'Label Studio' },
        { fecha: '28/02', nombre: 'RCE en FortiManager 7.6.0', tipo: 'Remote Code', plataforma: 'Fortinet' },
      ],
      cves: [
        { id: 'CVE-2025-0108', aplicativo: 'Palo Alto PAN-OS', cvss: 7.3 },
        { id: 'CVE-2024-45569', aplicativo: 'Qualcomm Snapdragon', cvss: 9.8 },
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
    };
  },
};
</script>

<style>
:root {
  --dark-bg: #121212;
  --dark-text: #e0e0e0;
  --dark-card-bg: #2d2d2d;
  --dark-border: #404040;
  --light-bg: #f8f9
}
#app {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
}
</style>