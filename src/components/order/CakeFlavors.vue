<template>
  <h2>Sabores de pasteles</h2>
  <div>
    <p v-for="flavor in flavors" :key="flavor.flavor" style="color: red">
      {{ flavor.flavor }} {{ flavor.price }}
    </p>
  </div>
</template>

<script>
export default {
  name: "CakeFlavors",
  computed: {
    flavors: {
      get() {
        return this.$store.state.ck_flavors;
      },
    },
  },
};
</script>
