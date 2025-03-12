<template>
  <div id="vulnerabilidades" class="card mb-4 animate__animated animate__fadeIn">
    <div class="card-header">
      <h2>Nuevas Vulnerabilidades</h2>
    </div>
    <div class="card-body">
      <p class="text-muted">Las Vulnerabilidades Comunes Enumeradas (CVE) proporcionan detalles sobre vulnerabilidades de seguridad en sistemas y software, permitiendo a las organizaciones identificar y mitigar posibles amenazas. Las CVE aquí listadas son sumamente relevantes para la seguridad de los sistemas, recomendamos realizar las mitigaciones necesarias para evitar la exposición a estas vulnerabilidades.</p>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>CVE</th>
            <th>Aplicación</th>
            <th>CVSS</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(cve, index) in cves" :key="index">
            <td>{{ cve.id }}</td>
            <td>{{ cve.aplicativo }}</td>
            <td><span :class="getCvssClass(cve.cvss)">{{ cve.cvss }}</span></td>
          </tr>
        </tbody>
      </table>
      <div class="alert alert-secondary mt-3">
        <em>Clasificación: TLP:CLEAR | La información contenida en este informe puede ser compartida sin restricción.</em>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cves: Array,
  },
  methods: {
    getCvssClass(cvss) {
      if (cvss >= 9) return 'badge badge-danger';
      if (cvss >= 7) return 'badge badge-warning';
      return 'badge badge-success';
    },
  },
};
</script>

<style scoped>
.badge {
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
}

.badge-danger {
  background-color: #dc3545;
  color: white;
}

.badge-warning {
  background-color: #ffc107;
  color: black;
}

.badge-success {
  background-color: #28a745;
  color: white;
}
</style>