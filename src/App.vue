<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/order">Order</router-link> |
    <router-link to="/baker">Pastelero</router-link>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/* table-orders */
.table-orders,
.table-orders td,
.table-orders th {
  margin: 0 auto;
  width: 20vw;
  border: 1px solid black;
}

.table-orders {
  border-collapse: collapse;
  margin-bottom: 2em;
  text-align: left;
}

.table-orders td:first-child {
  width: 25%;
}

.table-orders td {
  padding: 10px 20px;
}

/* table-ingredients */
.table-ingredients {
  width: 80vw;
  text-align: left;
  margin: 0 auto;
}

/* nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
