<template>
  <h3>Información del cliente</h3>
  <div>
    <input type="text" placeholder="nombre" />
    <br />
    <input type="tel" placeholder="Telefono" />
    <br />
    <input type="email" placeholder="Correo electrónico" />
    <br />
    <textarea rows="3" placeholder="Descripción del pastel"></textarea>
    <br />
  </div>
</template>

<script>
export default {
  name: "ClientInfo",
};
</script>
