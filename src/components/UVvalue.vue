<template>
  <div class="d-flex ma-auto mt-5">
    <p class="d-flex title mr-3">紫外線:{{ UVvalue }}</p>
    <v-btn small dark :color="btncolor[setstatus()]">
      {{ ticklables[setstatus()] }}
    </v-btn>
  </div>
</template>

<script>
export default {
  props: ["UVvalue"],
  data: () => {
    return {
      ticklables: ["低量級", "中量級", "高量級", "過量級", "危險級"],
      btncolor: [
        "lime accent-3",
        "yellow darken-2",
        "orange darken-3",
        "red darken-1",
        "purple lighten-1"
      ]
    };
  },
  methods: {
    setstatus() {
      if (this.UVvalue <= 2) {
        return 0;
      } else if (this.UVvalue <= 5) {
        return 1;
      } else if (this.UVvalue <= 7) {
        return 2;
      } else if (this.UVvalue <= 10) {
        return 3;
      } else {
        return 4;
      }
    }
  }
};
</script>
