"use strict";

Vue.createApp({
  data() {
    return {
      red: undefined,
      green: undefined,
      blue: undefined,
      hex: "",
    };
  },
  computed: {
    handleBackgroundColorChangeOutput() {
      return { backgroundColor: this.hex };
    },
    handleColorChangeOutput() {
      return { color: this.hex };
    },
  },
  created() {
    console.log("Ich kann etwas zu Anfang ausführen");
    this.getApiData();
  },
  methods: {
    async getApiData() {
      const response = await fetch("https://dummy-apis.netlify.app/api/color");
      const jsonData = await response.json();
      this.red = jsonData.rgb.r;
      this.green = jsonData.rgb.g;
      this.blue = jsonData.rgb.b;
      this.hex = jsonData.color;
      console.log(jsonData);
    },
    /*
    getApiData() {
      fetch("https://dummy-apis.netlify.app/api/color")
        .then((response) => response.json())
        .then((jsonData) => {
          this.red = jsonData.rgb.r;
          this.green = jsonData.rgb.g;
          this.blue = jsonData.rgb.b;
          this.hex = jsonData.color;
          console.log(jsonData);
        });
    },
    */
  },
}).mount("#app");
