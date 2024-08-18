<template>
  <div class="app">
    <div class="div-app">
      <h1>Tienda 32 Bits</h1>
    </div>
    <div class="div-app">
      <p>Lista de juegos</p>
    </div>
    <div class="div-app">
      <table>
        <thead>
          <th>Codigo</th>
          <th>Nombre</th>
          <th>Stock</th>
          <th>Precio</th>
          <th>Acciones</th>
        </thead>
        <tbody>
          <tr v-for="(juego, index) in juegos" :key="index" >
            <td>{{ juego.codigo }}</td>
            <td>{{ juego.nombre }}</td>
            <td>{{ juego.stock }}</td>
            <td>$ {{ juego.precio }}</td>
            <td class="btn-div">
              <button @click="disminuir(index)">-</button>
              <button @click="incrementar(index)">+</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: "App",
  computed: {
    ...mapState(["juegos"])
  },
  methods: {
    ...mapActions(["incrementar", "disminuir"]),
  }
}

</script>

<style scoped>
.app{
  display: block;
  justify-items: center;
  align-items: center;
  padding: 2rem;
  margin: 2rem;
}

.div-app{
  display: flex;
  justify-content: center;
}
tbody, th, td{
  border: 1px solid black;
  padding: .5rem;
  text-align: center;
}
.btn-div{
  display: flex;
  gap: 1rem;
}
button{
  font-size: 1.5rem;
  width: 3rem;
}

</style>
