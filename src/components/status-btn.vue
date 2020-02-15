<template>
  <div class="mt-5">
    <v-btn x-large class="ma-2" :color="setcolor()">
      {{ status }}
    </v-btn>
  </div>
</template>
<script>
export default {
  props: ["AQIvalue"],
  data: () => {
    return {
      status: ""
    };
  },
  methods: {
    setcolor() {
      if (this.AQIvalue <= 50) {
        this.status = "良好";
        return "green darken-1";
      } else if (this.AQIvalue <= 100) {
        this.status = "普通";
        return "amber";
      } else if (this.AQIvalue <= 150) {
        this.status = "對敏感族群不健康";
        return "orange darken-2";
      } else if (this.AQIvalue <= 200) {
        this.status = "對所有族群不健康普";
        return "red";
      } else if (this.AQIvalue <= 300) {
        this.status = "非常不健康";
        return "purple";
      } else {
        this.status = "危害";
        return "black";
      }
    }
  }
};
</script>
