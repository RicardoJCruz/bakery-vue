<template>
  <h3>Combinar adornos</h3>
  <div v-for="(decor, index) in decors" :key="decor.decor">
    <input type="checkbox" v-bind:id="'decor' + index" v-model="checked" />
    <label v-bind:for="'decor' + index"> {{ decor.decor }}</label>
  </div>
</template>

<script>
export default {
  name: "DecorationsMix",
  computed: {
    decors: {
      get() {
        return this.$store.state.ck_decorations;
      },
    },
  },
};
</script>
