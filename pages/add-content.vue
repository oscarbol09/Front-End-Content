<template>
  <div>
    <main class="content-form">
      <h2>Agregar Contenido</h2>
      <form @submit.prevent="saveContent">
        <div class="form-group">
          <label for="file">Archivo</label>
          <input type="file" id="file" @change="onFileChange" required />
        </div>

        <!-- Barra de progreso -->
        <div v-if="uploadProgress > 0 && uploadProgress < 100" class="progress-bar">
          <div :style="{ width: `${uploadProgress}%` }"></div>
        </div>

        <div class="form-group">
          <label for="contentType">Tipo de Contenido</label>
          <select v-model="contentType" required>
            <option value="" disabled>Selecciona el tipo de contenido</option>
            <option value="presentacion">Presentación</option>
            <option value="linea_tiempo">Línea de Tiempo</option>
            <option value="infografia">Infografía</option>
            <option value="imagen">Imagen</option>
            <option value="video">Video</option>
            <option value="pdf">PDF</option>
          </select>
        </div>

        <div class="form-group">
          <label for="title">Título</label>
          <input type="text" id="title" v-model="title" required />
        </div>

        <div class="form-group">
          <label for="description">Descripción</label>
          <textarea id="description" v-model="description" required></textarea>
        </div>

        <div class="form-group vista-previa">
          <label for="preview">Vista Previa</label>
          <div class="preview-box">
            <!-- Imagen o documento PDF como vista previa siempre que haya un archivo cargado -->
            <img v-if="previewUrl && isImage" :src="previewUrl" alt="Vista previa" class="preview-image" />
            <iframe v-if="previewUrl && isPDF" :src="previewUrl" class="preview-pdf"></iframe>
            <p v-if="!file">No hay archivo cargado</p>
          </div>
        </div>

        <div class="form-buttons">
          <!-- Botón para abrir o cerrar la vista previa en grande -->
          <button type="button" class="vista-previa-button" @click="togglePreview">Vista Previa Completa</button>
          <button type="submit" class="guardar-button">Guardar</button>
          <button type="button" class="cancelar-button" @click="cancel">Cancelar</button>
        </div>

        <!-- Modal de vista previa completa -->
        <div v-if="showFullPreview" class="modal-preview">
          <div class="modal-content">
            <span class="close-button" @click="togglePreview">&times;</span>
            <!-- Mostrar la imagen o PDF en el modal -->
            <img v-if="previewUrl && isImage" :src="previewUrl" alt="Vista previa" class="full-preview-image" />
            <iframe v-if="previewUrl && isPDF" :src="previewUrl" class="full-preview-pdf"></iframe>
          </div>
        </div>
      </form>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      file: null,
      title: '',
      description: '',
      contentType: '',
      uploadProgress: 0,   // Progreso de carga
      previewUrl: null,    // URL de vista previa
      isImage: false,      // Bandera para verificar si es una imagen
      isPDF: false,        // Bandera para verificar si es un PDF
      showFullPreview: false // Bandera para mostrar el modal de vista previa completa
    };
  },
  methods: {
    onFileChange(event) {
      this.file = event.target.files[0];
      this.generatePreview(); // Generar vista previa
      this.uploadFile();      // Simular el progreso de carga
    },
    generatePreview() {
      const fileType = this.file.type;

      // Verificar si es una imagen
      if (fileType.includes('image')) {
        this.isImage = true;
        this.isPDF = false;
        this.previewUrl = URL.createObjectURL(this.file); // Crear URL para mostrar la imagen
      }
      // Verificar si es un PDF
      else if (fileType === 'application/pdf') {
        this.isPDF = true;
        this.isImage = false;
        this.previewUrl = URL.createObjectURL(this.file); // Crear URL para mostrar el PDF
      } else {
        this.isImage = false;
        this.isPDF = false;
        this.previewUrl = null;
      }
    },
    uploadFile() {
      // Simulación de progreso de carga
      const uploadInterval = setInterval(() => {
        if (this.uploadProgress < 100) {
          this.uploadProgress += 10; // Incrementa el progreso
        } else {
          clearInterval(uploadInterval); // Finaliza el progreso cuando llega a 100
        }
      }, 300); // Intervalo de tiempo para simular el progreso de carga
    },
    togglePreview() {
      // Cambia el estado de mostrar u ocultar la vista previa completa
      this.showFullPreview = !this.showFullPreview;
    },
    saveContent() {
      const newContent = {
        file: this.file,
        title: this.title,
        description: this.description,
        contentType: this.contentType,
        image: this.previewUrl  // Usamos previewUrl como la imagen o PDF
      };

      // Emitir el nuevo contenido para que lo reciba el componente padre
      this.$emit('content-created', newContent);

      // Redirigir a la página principal
      this.$router.push('/');
    },
    cancel() {
      this.$router.push('/');
    }
  }
};
</script>


<style scoped>
.content-form {
  padding: 2rem;
  max-width: 600px;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
}

.form-group {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 1rem;
}

.form-group label {
  flex: 1;
  margin-right: 1rem;
}

.form-group input,
.form-group textarea,
.form-group select {
  flex: 2;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.vista-previa {
  margin-top: 1rem;
}

.preview-box {
  width: 100%;
  height: 150px;
  border: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8f8f8;
  border-radius: 4px;
}

.preview-image {
  max-width: 100%;
  max-height: 100%;
}

.preview-pdf {
  width: 100%;
  height: 100%;
}

.form-buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
}

.vista-previa-button,
.guardar-button,
.cancelar-button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 4px;
}

.cancelar-button {
  background-color: #f44336;
}

/* Estilos de la barra de progreso */
.progress-bar {
  width: 100%;
  background-color: #f3f3f3;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 1rem;
  height: 10px;
}

.progress-bar div {
  height: 100%;
  background-color: #007bff;
  transition: width 0.4s ease;
}

/* Estilos para el modal de vista previa completa */
.modal-preview {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8); /* Hacer el fondo más oscuro */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  position: relative;
  width: 90%; /* Aumentar el ancho del modal */
  height: 90%; /* Aumentar la altura del modal */
  display: flex;
  justify-content: center;
  align-items: center;
}

.full-preview-image {
   /* Ocupa el 100% del espacio disponible en el modal */
  max-height: 100%; /* Limita la altura de la imagen al 100% del modal */
  object-fit: contain; /* Mantiene la relación de aspecto */
}

.full-preview-pdf {
  width: 100%; /* Ocupa todo el ancho del modal */
  height: 100%; /* Ocupa todo el alto del modal */
}

.close-button {
  position: absolute;
  top: 15px; /* Aumentar un poco para mayor separación desde el borde superior */
  right: 15px; /* Aumentar la distancia desde el borde derecho */
  background-color: red;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  font-size: 1.2rem; /* Asegurarse de que la 'X' sea visible y de buen tamaño */
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
