<template>
  <h2>Adornos</h2>
  <div>
    <p v-for="decor in decors" :key="decor.decor" style="color: purple">
      {{ decor.decor }} {{ decor.price }}
    </p>
  </div>
</template>

<script>
export default {
  name: "CakeDecors",
  computed: {
    decors: {
      get() {
        return this.$store.state.ck_decorations;
      },
    },
  },
};
</script>
