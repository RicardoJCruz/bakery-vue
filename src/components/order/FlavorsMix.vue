<template>
  <h3>Combinar sabores</h3>
  <div v-for="(flavor, index) in flavors" :key="flavor.flavor">
    <input type="checkbox" v-bind:id="'flavor' + index" v-model="checked" />
    <label v-bind:for="'flavor' + index"> {{ flavor.flavor }}</label>
  </div>
</template>

<script>
export default {
  name: "FlavorsMix",
  computed: {
    flavors: {
      get() {
        return this.$store.state.ck_flavors;
      },
    },
  },
};
</script>
