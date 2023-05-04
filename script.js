"use strict";

Vue.createApp({
  data() {
    return {
      red: 255,
      green: 105,
      blue: 180,
    };
  },
  methods: {
    setBackgroundColor(event) {
      console.log(event.target.id);
      const colorName = event.target.id;
      this[colorName] = event.target.value;
    },
  },
}).mount("#app");
