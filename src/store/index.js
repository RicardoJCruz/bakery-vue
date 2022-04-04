import { createStore } from "vuex";

export default createStore({
  state: {
    color: "blue",
    bky_info: {
      adress: "Aguila 101",
      phone: "012-345-6789",
      hours: "martes a domingo de 12:00 am a 5:00 pm",
    },
    ck_flavors: [
      { flavor: "🍫 Chocolate", qty: 3, price: 100 },
      { flavor: "🍦 Vainilla", qty: 4, price: 200 },
      { flavor: "🍓 Fresa", qty: 5, price: 300 },
    ],
    ck_decorations: [
      { decor: "Luneta", qty: 30, price: 5 },
      { decor: "Bombones", qty: 40, price: 10 },
      { decor: "Corazones", qty: 50, price: 15 },
    ],
    orders: [
      {
        id: 0,
        flavors: ["chocolate"],
        decors: ["lunetas"],
        client: {
          Nombre: "Alice",
          Telefono: "66690",
          "E-Mail": "eldiable.com",
        },
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus asperiores perspiciatis eos.",
      },
      {
        id: 1,
        flavors: ["fresa", "vainilla"],
        decors: ["bombones", "corazones"],
        client: {
          Nombre: "Bob",
          Telefono: "77777",
          "E-Mail": "eldiable2.com",
        },
        description:
          "Lorem ipsum dolor sit amet Voluptatibus asperiores perspiciatis eos. Consectetur adipisicing elit.",
      },
    ],
  },
  getters: {},
  mutations: {
    colorChange(state, color) {
      state.color = color;
    },
  },
  actions: {
    colorChange({ commit }, color) {
      commit("colorChange", color);
    },
  },
  modules: {},
});
