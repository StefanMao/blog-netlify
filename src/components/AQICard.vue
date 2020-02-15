<template>
  <v-content fluid>
    <v-row>
      <v-col class="d-flex">
        <v-card class="shaped pa-5" min-width="80%" outlined>
          <div class="d-flex justify-space-between">
            <v-btn
              outlined
              width="100px"
              height="100px"
              class="d-flex headline font-weight-black"
              :color="AQI_col_bar()"
            >
              {{ AQIdata.SiteName }}
            </v-btn>
            <statusbtn :AQIvalue="AQIdata.AQI" />
            <v-progress-circular
              :rotate="-90"
              :size="100"
              :width="15"
              :value="AQI_value"
              :color="AQI_col_bar()"
            >
              {{ AQIdata.AQI }}
            </v-progress-circular>
          </div>
          <v-divider class="mt-5"></v-divider>
          <v-row>
            <UVvalue :UVvalue="UVvalue" />
          </v-row>
          <div class="mt-5">
            <p class="headline">O3 臭氧 : {{ AQIdata.O3 }}</p>
            <v-slider
              class="v-slider"
              v-model="AQIdata.O3"
              :thumb-label="set_thumblabelcolor(AQIdata.O3, 5)"
              thumb-color="brown"
              color="brown"
              readonly
              thumb-size="15"
              height="15"
            ></v-slider>
          </div>
          <div class="mt-5">
            <p class="headline">PM2.5 懸浮微粒 : {{ AQIdata.PM25 }}</p>
            <v-slider
              class="v-slider"
              v-model="AQIdata.PM25"
              :thumb-label="set_thumblabelcolor(AQIdata.PM25, 20)"
              thumb-color="deep-purple darken-4"
              color="deep-purple lighten-2"
              readonly
              thumb-size="15"
              height="15"
            ></v-slider>
          </div>

          <div class="mt-5">
            <p class="headline">SO2 二氧化硫 :{{ AQIdata.SO2 }}</p>
            <v-slider
              class="v-slider"
              v-model="AQIdata.SO2"
              :thumb-label="set_thumblabelcolor(AQIdata.SO2, 10)"
              thumb-color="deep-orange"
              color="deep-orange"
              readonly
              thumb-size="15"
              height="15"
            >
            </v-slider>
          </div>

          <div class="mt-5">
            <p class="headline">NO2 二氧化碳 :{{ AQIdata.NO2 }}</p>
            <v-slider
              class="v-slider"
              v-model="AQIdata.NO2"
              :thumb-label="set_thumblabelcolor(AQIdata.NO2, 30)"
              thumb-color="blue-grey darken-3"
              color="blue-grey darken-3"
              readonly
              thumb-size="15"
              height="15"
            >
            </v-slider>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-content>
</template>

<script>
import statusbtn from "./status-btn";
import UVvalue from "./UVvalue";
export default {
  props: ["AQIdata", "UVvalue"],
  components: {
    statusbtn,
    UVvalue
  },
  data: () => {
    return {
      AQI_value: 0,
      interval: {},
      timer_value: 150,
      text_value: 3
    };
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
  mounted() {
    this.interval = setInterval(() => {
      if (this.AQI_value >= this.AQIdata.AQI) {
        this.AQI_value = 0;
      }
      this.AQI_value += this.text_value;
    }, this.timer_value);
  },
  methods: {
    set_thumblabelcolor(val, limit_value) {
      //console.log(val);
      if (parseInt(val) <= limit_value) {
        return false;
      } else {
        return "always";
      }
    },
    AQI_col_bar() {
      if (this.AQIdata.AQI <= 50) {
        return "green darken-1";
      } else if (this.AQIdata.AQI <= 100) {
        return "amber";
      } else if (this.AQIdata.AQI <= 150) {
        return "orange darken-2";
      } else if (this.AQIdata.AQI <= 200) {
        return "red";
      } else if (this.AQIdata.AQI <= 300) {
        return "purple";
      } else {
        return "black";
      }
    }
  }
};
</script>
