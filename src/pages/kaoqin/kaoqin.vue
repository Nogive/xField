<template>
  <div class="kaoqin">
    <router-view></router-view>
    <van-tabbar v-model="active">
      <van-tabbar-item to="/kaoqin">
        <template slot="icon"><i class="iconfont">&#xe640;</i></template>
        打卡
      </van-tabbar-item>
      <van-tabbar-item to="/kaoqin/tongji">
        <template slot="icon"><i class="iconfont">&#xe602;</i></template>
        统计
      </van-tabbar-item>
      <van-tabbar-item to="/kaoqin/rule">
        <template slot="icon"><i class="iconfont">&#xe608;</i></template>
        规则
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<style lang="stylus" scoped>

</style>
<script>
export default {
  name:'kaoqin',
  data(){
    return {
      active:1
    }
  }
}
</script>


