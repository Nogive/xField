<template>
  <div class="map">
    <div class="amap-page-container" id="mapContent" :style="{height:height}"></div>
  </div>
</template>
<style lang="stylus" scoped>
.map
  .amap-page-container
    width 100%
</style>
<script>
import AMap from "AMap";
import AMapUI from "AMapUI";
var map;
var marker;
export default {
  name:'x_map',
  props:{
    height:{
      type:String,
      default:"200px"
    },
    center:{
      type:Array,
      default(){
        return [121.473658,31.230378]
      }
    }
  },
  data(){
    return{

    }
  },
  mounted(){
    this._initMap();
  },
  watch:{
    center:function(){
      this._initMap();
    }
  },
  methods:{
    _initMap(){
      map = new AMap.Map("mapContent", {
        zoom: 15,
        center: this.center
      });
      this.createMarker();
    },
    createMarker() {
      let _this = this;
      AMapUI.loadUI(["overlay/SimpleMarker"], function(SimpleMarker) {
        marker = new SimpleMarker({
          showPositionPoint: false,
          position: _this.center,
          iconStyle: {
            src:
              "//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png",
            style: {
              width: "20px",
              height: "30px"
            }
          }
        });
        map.add(marker);
      });
    },
  }
}
</script>


