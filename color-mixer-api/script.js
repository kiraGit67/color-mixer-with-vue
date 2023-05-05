"use strict";

Vue.createApp({
  data() {
    return {
      red: undefined,
      green: undefined,
      blue: undefined,
      hex: "",
      errorMessage: "",
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
      try {
        const response = await fetch(
          "https://dummy-apis.netlify.app/api/color"
        );
        const jsonData = await response.json();

        if (response.ok) {
          this.red = jsonData.rgb.r;
          this.green = jsonData.rgb.g;
          this.blue = jsonData.rgb.b;
          this.hex = jsonData.color;
          console.log(jsonData);
        } else {
          throw new Error("Response funktioniert nicht.");
        }
      } catch (error) {
        this.errorMessage = "Sorry, es ist etwas schief gelaufen.";
      }
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

    #B20953
    #E5337A
    #DD306A
    #87C835
    #0A15F2
    #109D1D
    
    */
  },
}).mount("#app");
