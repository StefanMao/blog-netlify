<template>
  <v-app class="d-flex flex-cloumn" width="100%">
    <v-card class="overflow-hidden">
      <v-app-bar
        :collapse="!collapsenOnscroll"
        :collapse-on-scroll="collapsenOnscroll"
        absolute
        color="teal lighten-4"
        dark
        scroll-target="#scrolling-techniques-6"
      >
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>外出小幫手</v-toolbar-title>

        <v-spacer></v-spacer>
      </v-app-bar>
      <v-sheet
        id="scrolling-techniques-6"
        class="overflow-y-auto"
        max-height="900"
      >
        <v-container style="height: 1200px;">
          <Maincontent />
        </v-container>
      </v-sheet>
    </v-card>
    <h1>footer</h1>
  </v-app>
</template>

<script>
import Maincontent from "./Maincontent";
// @ is an alias to /src
export default {
  name: "Home",
  metaInfo: { "http-equiv": "Access-Control-Allow-Origin", content: "*" },
  components: {
    Maincontent
  },
  data() {
    return {
      collapsenOnscroll: true
    };
  }
};
</script>
