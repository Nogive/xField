<template>
  <div class="daka">
    <van-nav-bar
      :title="$route.meta.title"
      left-text="返回"
      left-arrow
      @click-left="$router.back()"
    >
      <van-icon name="more-o" slot="right" />
    </van-nav-bar>
    <van-tabs v-model="active">
      <van-tab title="上下班">
        <divider class="mb5"></divider>
        <div class="shift">
          <div class="clock">
            <div class="icon-wrapper">
              <div class="icon">
                <i class="iconfont">&#xe61e;</i>
              </div>
            </div>
            <div class="content-wrapper">
              <div class="content">
                <h3 class="title">上班</h3>
                <span class="time">09:00</span>
                <button v-if="test" class="btn">签到</button>
                <div v-else class="comp">
                  <i class="iconfont">&#xe646;</i>
                  已签到<span class="comp-time">08:51</span>
                </div>
              </div>
            </div>
          </div>
          <div class="clock">
            <div class="icon-wrapper">
              <div class="icon">
                <i class="iconfont">&#xe62a;</i>
              </div>
            </div>
            <div class="content-wrapper">
              <div class="content">
                <h3 class="title">下班</h3>
                <span class="time">08:00</span>
                <button v-if="test" class="btn">签退</button>
                <div v-else class="comp">
                  <i class="iconfont">&#xe646;</i>
                  已签退<span class="comp-time">08:51</span>
                  <router-link to="/" class="update">更新</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="外出">
        <divider class="mb5"></divider>
        <div class="out">
          <div class="header">
            <span class="title">外出记录</span>
            <button class="btn">新增打卡</button>
          </div>
          <div v-if="test" class="out-wrapper">
            <router-link to="/daka_detail">
              <h3 class="title">第1次打卡<span class="time">08:44</span></h3>
              <p class="address">地点 : 上海市新华路128号</p>
              <p class="note">备注 : 外出拜访客户</p>
            </router-link>
          </div>
          <div v-else class="noout">
            <i class="iconfont">&#xe629;</i>
            <p class="text">暂无外出记录~</p>
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>
<style lang="stylus" scoped>
@import "../../../common/css/mixin.styl"
.daka
  .mb5
    margin-bottom 0.5rem
  .shift
    .clock
      padding .5rem
      display flex
      .icon-wrapper
        flex 0 0 2.5rem
        margin-right 0.5rem
        padding 0 0 .5rem
        .icon
          width 100%
          height 2.5rem
          bg-color(rgb(76,76,171))
          text-align center
          line-height 2.5rem
          border-radius .3rem
          &.disabled
            bg-color(#e5e5e5)
          .iconfont
            font-size 1.5rem
            color #ffffff
      .content-wrapper
        flex 1
        border-1px(rgba(7,17,27,.1))
        .content
          height 2.5rem
          margin 0 0 .5rem
          position relative
          .title
            font-size .65rem
          .time
            font-size .5rem
          .btn,.comp
            position absolute
            right 0
            top .5rem
            font-size .5rem
          .btn
            border none
            bg-color(#f44)
            color #ffffff
            padding .3rem 1.2rem
            border-radius .1rem
          .comp
            color rgb(147,153,159)
            .iconfont
              color rgb(251,128,68)
            .comp-time
              margin-left 0.3rem
            .update
              display block
              text-align right
              color #38f
              font-size .6rem
              margin-top .2rem
  .out
    padding 0.5rem
    .header
      margin-bottom 0.5rem
      .title
        font-size .7rem
      .btn
        font-size .5rem
        border none
        padding 0.3rem 1rem
        border-radius .1rem
        background-color #38f
        color #ffffff
        float right
        margin-top -0.2rem
    .out-wrapper
      border 1px solid rgba(7,17,27,.3)
      padding 0.5rem
      font-size .6rem
      line-height 2
      border-radius .1rem
      box-shadow 0 5px 5px rgba(7,17,27,.1)
      .title
        font-weight bold
        .time
          font-weight normal
          float right
          color #38f
    .noout
      text-align center
      padding 2rem 0
      .iconfont
        font-size 3rem
      .text
        font-size .5rem
</style>
<script>
import divider from "@/components/divider"
export default {
  name:'daka',
  data(){
    return {
      active:1,
      test:true
    }
  },
  components:{
    divider
  }
}
</script>


