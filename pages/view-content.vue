<template>
  <div>
    <HeaderBar />
    <main class="content-view">
      <h2>{{ content.title }}</h2>
      <p>{{ content.description }}</p>
      <div class="actions">
        <button @click="viewFile">Ver</button>
        <button @click="editContent">Editar</button>
        <button @click="deleteContent">Eliminar</button>
        <button @click="shareContent">Compartir</button>
      </div>
      <section class="comments">
        <h3>Comentarios</h3>
        <textarea v-model="newComment" placeholder="Añadir un comentario..."></textarea>
        <button @click="addComment">Publicar</button>
      </section>
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
      content: {
        title: 'Título del Contenido',
        description: 'Descripción del contenido.',
      },
      newComment: '',
      comments: []
    };
  },
  methods: {
    viewFile() {
      this.$router.push('/view-file');
    },
    editContent() {
      this.$router.push('/add-content');
    },
    deleteContent() {
      // Lógica para eliminar contenido
    },
    shareContent() {
      this.$router.push('/share-options');
    },
    addComment() {
      this.comments.push(this.newComment);
      this.newComment = '';
    }
  }
};
</script>

<style scoped>
.content-view {
  padding: 2rem;
}

.actions button {
  margin-right: 0.5rem;
}

.comments {
  margin-top: 2rem;
}

.comments textarea {
  width: 100%;
  margin-bottom: 1rem;
}
</style>
