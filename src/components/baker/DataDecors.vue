<template>
  <h2>Decoraciones</h2>
  <table class="table-ingredients">
    <tr>
      <th>Decoración</th>
      <th>Cantidad</th>
      <th>Precio</th>
    </tr>
    <tr v-for="decor in decors" :key="decor.decor">
      <td>{{ decor.decor }}</td>
      <td>{{ decor.qty }} Kg</td>
      <td>${{ decor.price }}</td>
    </tr>
  </table>
</template>

<script>
export default {
  name: "DataDecors",
  computed: {
    decors: {
      get() {
        return this.$store.state.ck_decorations;
      },
    },
  },
};
</script>
