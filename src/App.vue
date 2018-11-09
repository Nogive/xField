<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import {cordovaInitialize} from "@/common/js/cordova"
export default {
  name: 'App',
  created(){
    this._initEnvironment();
  },
  methods:{
    _initEnvironment(){
      cordovaInitialize(this);
    },
  }
}
</script>

<style>
#app{
  padding-bottom: 50px;
}
</style>
