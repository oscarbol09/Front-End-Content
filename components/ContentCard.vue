<template>
  <div class="tarjeta">
    <img :src="content.image" alt="Contenido" />
    <h3>{{ content.title }}</h3>
    <p>{{ content.description }}</p>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    content: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.tarjeta {
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 1rem;
  width: 200px;
  text-align: center;
}

.tarjeta img {
  max-width: 100%;
  border-radius: 5px;
}
</style>
