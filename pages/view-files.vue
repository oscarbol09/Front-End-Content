<template>
  <div>
    <HeaderBar />
    <main class="file-view">
      <h2>{{ fileTitle }}</h2>
      <div class="file-content">
        <!-- Aquí se insertará la vista completa del archivo -->
      </div>
      <button @click="downloadFile">Descargar</button>
    </main>
  </div>
</template>

<script>
import HeaderBar from '~/components/HeaderBar.vue';

export default {
  components: {
    HeaderBar
  },
  data() {
    return {
      fileTitle: 'Archivo Completo'
    };
  },
  methods: {
    downloadFile() {
      // Lógica para descargar el archivo
    }
  }
};
</script>

<style scoped>
.file-view {
  padding: 2rem;
}

.file-content {
  margin-bottom: 1rem;
}
</style>
