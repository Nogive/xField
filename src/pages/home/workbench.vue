<template>
  <div class="workbench">
    <x-header></x-header>
    <divider></divider>
    <div class="mobile-wrapper clearfix">
      <h1 class="tab-title">移动考勤</h1>
      <van-row class="content">
        <van-col span="6">
          <router-link to="/kaoqin">
            <i class="iconfont red">&#xe62b;</i>
            <h3 class="title">考勤</h3>
          </router-link>
        </van-col>
        <van-col span="6">
          <router-link to="/">
            <i class="iconfont red">&#xe6ad;</i>
            <h3 class="title">外勤拜访</h3>
          </router-link>
        </van-col>
        <van-col span="6">
          <router-link to="/">
            <i class="iconfont grey">&#xe760;</i>
            <h3 class="title">外勤轨迹</h3>
          </router-link>
        </van-col>
      </van-row>
    </div>
    <divider></divider>
    <div class="office-wrapper clearfix">
      <h1 class="tab-title">日常办公</h1>
      <van-row class="content">
        <van-col span="6">
          <router-link to="/">
            <i class="iconfont yellow">&#xe600;</i>
            <h3 class="title">通知</h3>
          </router-link>
        </van-col>
        <van-col span="6">
          <router-link to="/">
            <i class="iconfont orange">&#xe769;</i>
            <h3 class="title">流程审批</h3>
          </router-link>
        </van-col>
        <van-col span="6">
          <router-link to="/">
            <i class="iconfont green">&#xe6f8;</i>
            <h3 class="title">工作汇报</h3>
          </router-link>
        </van-col>
        <van-col span="6">
          <router-link to="/">
            <i class="iconfont blue">&#xe6ab;</i>
            <h3 class="title">任务</h3>
          </router-link>
        </van-col>
      </van-row>
    </div>
    <divider></divider>
    <div class="other-wrapper clearfix">
      <h1 class="tab-title">测试专区</h1>
      <van-row class="content">
        <van-col span="6">
          <router-link to="/test">
            <i class="iconfont">&#xe68d;</i>
            <h3 class="title">测试</h3>
          </router-link>
        </van-col>
      </van-row>
    </div>
  </div>
</template>
<style lang="stylus" scoped>
@import "../../common/css/mixin.styl"
.workbench
  .van-nav-bar
    font-size .65rem
  .mobile-wrapper,.other-wrapper,.office-wrapper
    padding 0.5rem 0 1rem
    &:last-child
      border-none()
    .tab-title
      padding-left 0.5rem
      font-size .7rem
    .content
      text-align center
      padding 0 .5rem
      .iconfont
        font-size 1.5rem
        &.red
          color rgb(244,71,63)
        &.yellow
          color rgb(255,171,40)
        &.orange
          color rgb(251,128,68)
        &.blue
          color rgb(0,160,220)
        &.green
          color rgb(0,175,136)
        &.grey
          color rgb(147,153,159)
      .title
        font-size .6rem
</style>
<script>
import divider from "@/components/divider"
import xHeader from "@/components/x_header"
export default {
  name:'workbench',
  data(){
    return {
    }
  },
  components:{
    divider,
    xHeader
  },
  methods:{
    loginOut(){
      console.log('退出登录');
    }
  }
}
</script>


