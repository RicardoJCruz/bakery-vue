<template>
  <div>
    {{ $store.state.color }}
    <input
      type="text"
      placeholder="pon un código de color"
      v-model="colorChange"
    />
  </div>
</template>

<script>
export default {
  name: "TestComponent",
  computed: {
    colorChange: {
      get() {
        return this.$store.state.color;
      },
      set(color) {
        this.$store.dispatch("colorChange", color);
      },
    },
  },
};
</script>
