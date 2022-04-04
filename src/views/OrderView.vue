<template>
  <div :style="{ color: $store.state.color }" class="client">
    <input
      type="text"
      placeholder="pon un código de color"
      v-model="colorChange"
    />
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <h1>Order View</h1>
    <BakeryInfo />
    <CakeFlavors />
    <CakeDecors />
    <h2>Hacer pedido</h2>
    <form action="">
      <FlavorsMix />
      <DecorationsMix />
      <ClientInfo />
      <button type="submit">Enviar</button>
    </form>
  </div>
</template>

<script>
import BakeryInfo from "@/components/order/BakeryInformation.vue";
import CakeFlavors from "@/components/order/CakeFlavors.vue";
import CakeDecors from "@/components/order/CakeDecorations.vue";
import ClientInfo from "@/components/order/ClientInformation.vue";
import FlavorsMix from "@/components/order/FlavorsMix.vue";
import DecorationsMix from "@/components/order/DecorationsMix.vue";

export default {
  name: "ClientView",
  components: {
    BakeryInfo,
    CakeFlavors,
    CakeDecors,
    ClientInfo,
    FlavorsMix,
    DecorationsMix,
  },
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
