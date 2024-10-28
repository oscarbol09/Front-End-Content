<template>
  <div>
   
    <main class="main-container">
      <div class="contenedor-tarjetas">
        <ContentCard v-for="(content, index) in contents" :key="index" :content="content" />
      </div>
      <button @click="addContent" class="btn-agregar">+</button>
    </main>
  </div>
</template>

<script>
import HeaderBar from '~/components/HeaderBar.vue';
import ContentCard from '~/components/ContentCard.vue';

export default {
  components: {
    HeaderBar,
    ContentCard
  },
  data() {
    return {
      contents: [
        { title: 'Contenido 1', description: 'Descripción breve', image: 'path/to/image1.jpg' },
        { title: 'Contenido 2', description: 'Descripción breve', image: 'path/to/image2.jpg' },
      ]
    };
  },
  methods: {
    addContent() {
      this.$router.push('/add-content');
    }
  }
};
</script>

<style scoped>
.main-container {
  padding: 2rem;
}

.contenedor-tarjetas {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.btn-agregar {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #007bff;
  color: white;
  font-size: 24px;
  border: none;
  cursor: pointer;
}
</style>
