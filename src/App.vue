<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created(){
    
  },
  methods:{
    _initEnvironment(){
      this._initCordova();
    },
    _initCordova(){
      let _this=this;
    }
  }
}
</script>

<style>
#app{
  padding-bottom: 50px;
}
</style>
