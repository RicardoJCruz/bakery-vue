<template>
  <h2>Decoraciones</h2>
  <table v-for="order in orders" :key="order.id" class="table-orders">
    <tr>
      <td>ID</td>
      <td>{{ order.id }}</td>
    </tr>
    <tr>
      <td>Sabores</td>
      <td>
        <p v-for="flavor in order.flavors" :key="flavor">{{ flavor }}</p>
      </td>
    </tr>
    <tr>
      <td>Decoraciones</td>
      <td>
        <p v-for="decor in order.decors" :key="decor">{{ decor }}</p>
      </td>
    </tr>
    <tr>
      <td>Cliente</td>
      <td>
        <p v-for="(value, key) in order.client" :key="value">
          {{ key }}: {{ value }}
        </p>
      </td>
    </tr>
    <tr>
      <td>Descripción</td>
      <td>{{ order.description }}</td>
    </tr>
  </table>
</template>

<script>
export default {
  name: "DataOrders",
  computed: {
    orders: {
      get() {
        return this.$store.state.orders;
      },
    },
  },
};
</script>
