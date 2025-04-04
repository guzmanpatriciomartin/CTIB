<template>
  <div id="alertas" class="card mb-4 animate__animated animate__fadeIn">
    <div class="card-header">
      <h2>Alertas de Amenazas Cibernéticas</h2>
    </div>
    <div class="card-body">
      <p class="text-muted">{{ descripcion }}</p>
      <div v-for="(alerta, index) in alertas" :key="index" class="mt-4">
        <h4>Threat Landscape: {{ alerta.tipo }}</h4>
        <p>{{ alerta.descripcion }}</p>
      </div>
      <div class="alert alert-secondary mt-3">
        <em>Clasificación: TLP:CLEAR | La información contenida en este informe puede ser compartida sin restricción.</em>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      descripcion: "Las alertas de Cyber Threat Intelligence son notificaciones que informan sobre amenazas cibernéticas identificadas, como vulnerabilidades o ataques activos. El Traffic Light Protocol (TLP) es un conjunto de directrices que regulan la divulgación de información sensible, utilizando colores para indicar los límites de compartición establecidos por el remitente. La importancia de estas alertas y del TLP radica en su capacidad para comunicar información crítica de manera segura y eficiente, asegurando que solo las partes adecuadas tengan acceso a la información necesaria para protegerse contra amenazas cibernéticas.",
      alertas: [
        {
          tipo: "Campaña del troyano bancario Coyote ataca mediante archivos LNK",
          descripcion: "El pasado mes de enero, los laboratorios de FortiGuard descubrieron varios archivos LNK que de forma similar inyectaban comandos de PowerShell como parte de una operación de varias etapas que culmina con el despliegue de una carga del troyano bancario Coyote."
        },
        {
          tipo: "Ransomware Makop y Lynx activos en LATAM",
          descripcion: "Makop y Lynx son ransomware activos en Latinoamérica, utilizados en ataques dirigidos a empresas y usuarios mediante técnicas como el acceso no autorizado por RDP y phishing. Ambos cifran archivos utilizando algoritmos avanzados como AES y RSA, exigiendo un rescate para su recuperación. Mientras que Makop es conocido por agregar extensiones personalizadas a los archivos cifrados, Lynx sigue un modelo de doble extorsión, robando datos antes del cifrado para presionar a las víctimas a pagar."
        },
        {
          tipo: "Actores maliciosos explotan vulnerabilidad crítica en PAN-OS",
          descripcion: "Investigadores de GreyNoise han detectado explotación activa de la vulnerabilidad crítica CVE-2025-0108 en PAN-OS, el sistema operativo de firewalls de Palo Alto Networks. Esta falla permite a atacantes no autenticados eludir la autenticación en la interfaz de gestión web, interactuar directamente con los firewalls y ejecutar scripts PHP maliciosos. Adicionalmente, se observa que los actores maliciosos están combinando esta vulnerabilidad con otras (CVE-2024-9474 y CVE-2025-0111) para maximizar el impacto de sus ataques."
        },
        {
          tipo: "Botnet ataca a los usuarios M365 con ataques password-spray",
          descripcion: "Investigadores de Security Scorecard dieron con una botnet compuesto por más de 130,000 dispositivos comprometidos que está realizando ataques de password spraying contra cuentas de Microsoft 365 (M365). Los atacantes que aparentan tener relación con actores de amenazas vinculados a China aplican non-interactive sign-ins y Basic Authentication para evadir MFA y Conditional Access Policies (CAP), impactando organizaciones globales en sectores financieros, gubernamentales y empresariales."
        }
      ]
    };
  }
};
</script>

<style scoped>
.alert-secondary {
  background-color: rgba(108, 117, 125, 0.1);
  border-color: rgba(108, 117, 125, 0.2);
  color: var(--text-color);
  margin-top: 1.5rem;
}
</style>