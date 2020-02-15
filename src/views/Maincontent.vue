<template>
  <v-content class="pt-12">
    <v-container fluid class="d-flex flex-row flex-wrap main-content">
      <v-layout class="d-flex flex-column grey lighten-4 l-content mr-2">
        <v-row class="d-flex flex-column">
          <v-col>
            <p class="title">maincontent left content</p>
            <v-select
              v-model="s_county"
              :items="county"
              hide-details
              class="d-flex ma-2"
              label="請選擇城市"
              @change="get_btntext"
              outlined
            >
            </v-select>
            <v-col
              class="d-flex flex-row flex-wrap btn-box justify-center pa-3 ma-auto"
            >
              <v-btn
                v-for="(item, index) in siteName"
                :key="index"
                class="my-2 mr-2 grey lighten-1"
                large
                @click="SitenameSelected(item)"
                >{{ item }}
              </v-btn>
            </v-col>
          </v-col>
        </v-row>
      </v-layout>
      <v-layout class="d-flex flex-column r-content">
        <v-row>
          <v-col class="d-flex flex-column align-center">
            <p class="headline d-flex justify-center">臺灣空氣品質指標（AQI)</p>
            <AQIcard
              v-if="Ifsitename_select"
              :AQIdata="pass_to_child"
              :UVvalue="uv_value"
            />
            <p v-if="!Ifsitename_select">暫無資料顯示，請選擇地區</p>
          </v-col>
        </v-row>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import axios from "axios";
import AQIcard from "../components/AQICard";

export default {
  metaInfo: { "http-equiv": "Access-Control-Allow-Origin", content: "*" },
  components: {
    AQIcard
  },
  data: () => {
    return {
      api_url: [
        {
          api_name: "空氣污染指數AQI",
          url: "http://opendata2.epa.gov.tw/AQI.json",
          data: []
        },
        {
          api_name: "紫外線指數UV",
          url:
            "https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0005-001?Authorization=CWB-1C986D1B-12E7-4AF6-B9FE-B39142B1D1BB&format=JSON",
          data: []
        }
      ],
      s_county: "",
      uv_value: "",
      county: [], //都市
      siteName: [], //鄉村
      pass_to_child: [],
      Ifsitename_select: false
    };
  },
  async mounted() {
    for (let i = 0; i < this.api_url.length; i++) {
      //console.log(this.api_url[i]);
      await axios
        .get(this.api_url[i].url)
        .then(response => {
          this.api_url[i].data = response;
        })
        .catch(error => {
          console.log(error);
        });
    }
    //format AQI data
    this.AQIdataformat();
    //format UV data
    this.UVdataformat();
    //UV API location_decode
    this.location_decode();
    //Generate CountyName
    this.GenerateCountyMenu();
  },
  methods: {
    AQIdataformat() {
      this.api_url[0].data = this.api_url[0].data.data;
      //console.log(this.api_url[0].data);
    },
    // Use AQI-APi to Generate County menu
    GenerateCountyMenu() {
      //var res = this.api_url[0].data;
      var res = this.api_url[0].data;
      res.forEach(element => {
        if (this.county.indexOf(element.County) == -1) {
          this.county.push(element.County);
        }
      });
    },
    UVdataformat() {
      this.api_url[1].data = this.api_url[1].data.data.records.weatherElement.location;
      //console.log(this.api_url[1].data);
    },
    get_btntext() {
      var res = this.api_url[0].data;
      this.siteName.length = 0;
      res.forEach(element => {
        if (element.County == this.s_county) {
          if (this.siteName.indexOf(element.SiteName) == -1) {
            this.siteName.push(element.SiteName);
          }
        }
      });
    },
    location_decode() {
      var res = this.api_url[1].data;
      res.forEach(element => {
        switch (element.locationCode) {
          case "467480":
            element.locationCode = "嘉義縣";
            break;
          case "467490":
            element.locationCode = "台中市";
            break;
          case "467350":
            element.locationCode = "澎湖縣";
            break;
          case "467080":
            element.locationCode = "宜蘭縣";
            break;
          case "467110":
            element.locationCode = "金門縣";
            break;
          case "467650":
            element.locationCode = "南投縣";
            break;
          case "467660":
            element.locationCode = "台東縣";
            break;
          case "467620":
            element.locationCode = "新竹市";
            break;
          case "467050":
            element.locationCode = "桃園市";
            break;
          case "466940":
            element.locationCode = "基隆市";
            break;
          case "467610":
            element.locationCode = "台東市";
            break;
          case "466920":
            element.locationCode = "新北市";
            break;
          case "467590":
            element.locationCode = "屏東縣";
            break;
          case "466910":
            element.locationCode = "台北市";
            break;
          case "467570":
            element.locationCode = "新竹縣";
            break;
          case "467410":
            element.locationCode = "台南縣";
            break;
          case "467550":
            element.locationCode = "南投縣";
            break;
          case "467440":
            element.locationCode = "高雄市";
            break;
          case "467990":
            element.locationCode = "雲林縣";
            break;
          case "466990":
            element.locationCode = "花蓮縣";
            break;
          default:
            element.locationCode = "location decode error";
        }
        //console.log(element);
      });
    },
    SitenameSelected(btntext) {
      var res = this.api_url[0].data;
      res.forEach(element => {
        if ((this.s_county == element.County) & (btntext == element.SiteName)) {
          //物件屬性處理 PM2.5 => PM25
          this.pass_to_child = JSON.stringify(element).replace(
            /PM2.5/g,
            "PM25"
          );
          this.pass_to_child = JSON.parse(this.pass_to_child);
        }
      });
      for (var key in this.pass_to_child) {
        //console.log(key);
        if (key == "O3" || key == "PM25" || key == "CO") {
          if (this.pass_to_child[key] == "" || this.pass_to_child[key] == "-") {
            this.pass_to_child[key] = "1";
            this.ifshow = false;
          }
        }
      }
      this.getUVvalue(this.api_url[1].data);
      this.Ifsitename_select = true;
    },
    getUVvalue(res) {
      res.forEach(element => {
        if (this.s_county == element.locationCode) {
          this.uv_value = element.value.toString();
          //console.log(this.uv_value);
          return;
          //console.log(this.uv_value);
        }
      });
    }
  }
};
</script>

<style scoped>
.main-content {
  height: auto;
  min-height: 800px;
}
.l-content {
  min-width: 30%;
  min-height: 100%;
}
.r-content {
  min-width: 60%;
  min-height: 100%;
}
.btn-box {
  min-width: 25%;
  max-width: 400px;
  min-height: 20%;
  height: auto;
}
</style>
