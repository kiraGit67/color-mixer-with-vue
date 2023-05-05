"use strict";

Vue.createApp({
  data() {
    return {
      red: 255,
      green: 105,
      blue: 180,
    };
  },
  computed: {
    rgb2hex() {
      let hexValue = "#";

      const hexRed = parseInt(this.red).toString(16);
      const hexGreen = parseInt(this.green).toString(16);
      const hexBlue = parseInt(this.blue).toString(16);

      hexValue += hexRed.length === 1 ? "0" + hexRed : hexRed;
      hexValue += hexGreen.length === 1 ? "0" + hexGreen : hexGreen;
      hexValue += hexBlue.length === 1 ? "0" + hexBlue : hexBlue;

      return hexValue;
    },
  },
  methods: {
    setBackgroundColor(event) {
      console.log(event.target.id);
      const colorName = event.target.id;
      this[colorName] = event.target.value;
    },
  },
}).mount("#app");
