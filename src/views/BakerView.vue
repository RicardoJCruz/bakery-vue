<template>
  <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
  <div>
    <DataFlavors />
    <DataDecors />
    <DataOrders />
  </div>
</template>

<script>
import DataFlavors from "@/components/baker/DataFlavors.vue";
import DataDecors from "@/components/baker/DataDecors.vue";
import DataOrders from "@/components/baker/DataOrders.vue";

export default {
  name: "BakerView",
  components: {
    DataFlavors,
    DataDecors,
    DataOrders,
  },
};
</script>
