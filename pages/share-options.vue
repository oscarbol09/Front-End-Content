<template>
  <div>
    <HeaderBar />
    <main class="share-options">
      <h2>Compartir Contenido</h2>
      <div class="options">
        <button @click="copyLink">Copiar Enlace</button>
        <button @click="shareByEmail">Enviar por Email</button>
        <div class="social-icons">
          <img src="facebook-icon.svg" @click="shareOnFacebook" alt="Facebook">
          <img src="whatsapp-icon.svg" @click="shareOnWhatsApp" alt="WhatsApp">
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import HeaderBar from '~/components/HeaderBar.vue';

export default {
  components: {
    HeaderBar
  },
  methods: {
    copyLink() {
      // Lógica para copiar enlace
    },
    shareByEmail() {
      // Lógica para compartir por email
    },
    shareOnFacebook() {
      // Lógica para compartir en Facebook
    },
    shareOnWhatsApp() {
      // Lógica para compartir en WhatsApp
    }
  }
};
</script>

<style scoped>
.share-options {
  padding: 2rem;
}

.social-icons img {
  width: 40px;
  margin: 0.5rem;
  cursor: pointer;
}
</style>
