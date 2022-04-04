<template>
  <h2>Información de la pastelería</h2>
  <div>
    <p>Dirección: {{ $store.state.bky_info.adress }}</p>
    <p>Teléfono: {{ $store.state.bky_info.phone }}</p>
    <p>Horarios de atención: {{ $store.state.bky_info.hours }}</p>
  </div>
</template>

<script>
export default {
  name: "BakeryInfo",
};
</script>
