<template>
  <div class="example">
    <van-button type="primary"  plain @click="takePhoto">测试拍照</van-button>
    <van-button type="primary"  plain @click="getGPS">测试GPS</van-button>
    <van-button @click="testAxios">testAxios</van-button>
    <van-button @click="show">show</van-button>
  </div>
</template>

<script>
import {callApi} from "@/server/axios";
import {account} from "@/server/api";

export default {
  name: 'HelloWorld',
  data () {
    return {
     
    }
  },
  methods:{
    takePhoto(){
      
    },
    getGPS(){
      console.log('获取GPS');
    },
    testAxios(){
      
    },
    show(){
      this.Utils.loading(this,true);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.example
  padding 0.5rem 0;
  text-align center
</style>
