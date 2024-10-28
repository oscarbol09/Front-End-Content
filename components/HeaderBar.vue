<template>
  <header class="header-bar">
    <div class="iconos-superiores">
      <Icon name="mdi-account" class="icono" alt="Usuario" />
      <Icon name="mdi-bell" class="icono" alt="Notificaciones" />
      <Icon name="mdi-cog" class="icono" alt="Configuración" />
    </div>
    <div class="barra-busqueda">
      <input type="text" v-model="searchQuery" placeholder="Buscar contenido...">
      <select v-model="filterType">
        <option value="">Todos</option>
        <option value="presentacion">Presentación</option>
        <option value="linea_tiempo">Línea de Tiempo</option>
        <option value="infografia">Infografía</option>
        <option value="imagen">Imagen</option>
        <option value="video">Video</option>
        <!-- Agrega más opciones según tus tipos de contenido -->
      </select>
      <button @click="applyFilter">Filtrar</button>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
      filterType: ''
    };
  },
  methods: {
    applyFilter() {
      // Aquí se manejaría la lógica para filtrar el contenido
      console.log('Buscando:', this.searchQuery, 'con filtro:', this.filterType);
      // Podrías hacer una búsqueda en la base de datos o en un array local de contenido
    }
  }
};
</script>

<style scoped>
.header-bar {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background-color: #f8f8f8;
  border-bottom: 1px solid #ddd;
}

.iconos-superiores {
  display: flex;
  align-items: center;
}

.icono {
  width: 24px;
  height: 24px;
  margin-right: 1rem;
}

.barra-busqueda {
  display: flex;
  align-items: center;
}

.barra-busqueda input {
  padding: 0.5rem;
  width: 200px;
  margin-right: 1rem;
}

.barra-busqueda select {
  padding: 0.5rem;
  margin-right: 1rem;
}

.barra-busqueda button {
  padding: 0.5rem 1rem;
}
</style>
