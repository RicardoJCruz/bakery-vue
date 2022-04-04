<template>
  <h2>Sabores</h2>
  <table class="table-ingredients">
    <tr>
      <th>Sabor</th>
      <th>Cantidad</th>
      <th>Precio</th>
    </tr>
    <tr v-for="flavor in flavors" :key="flavor.flavor">
      <td>{{ flavor.flavor }}</td>
      <td>{{ flavor.qty }} Kg</td>
      <td>${{ flavor.price }}</td>
    </tr>
  </table>
</template>

<script>
export default {
  name: "DataFlavors",
  computed: {
    flavors: {
      get() {
        return this.$store.state.ck_flavors;
      },
    },
  },
};
</script>
