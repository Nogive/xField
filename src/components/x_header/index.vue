<template>
  <div class="header">
    <div class="user-wrapper">
      <i class="iconfont yellow">&#xe601;</i>
      <span class="text">下午好，管理员</span>
    </div>
    <div class="info-wrapper">
      <van-row class="content">
        <van-col span="6">
          <router-link to="/">
            <span class="block">20</span>
            <h3 class="title">出勤人数</h3>
          </router-link>
        </van-col>
        <van-col span="6">
          <router-link to="/">
            <span class="block">0</span>
            <h3 class="title">待我审批</h3>
          </router-link>
        </van-col>
        <van-col span="6">
          <router-link to="/">
            <span class="block">0</span>
            <h3 class="title">签到人数</h3>
          </router-link>
        </van-col>
        <van-col span="6">
          <router-link to="/">
            <span class="block">8</span>
            <h3 class="title">未读日志</h3>
          </router-link>
        </van-col>
      </van-row>
    </div>
  </div>
</template>
<style lang="stylus">
@import "../../common/css/mixin.styl"
.header
  padding 0 .5rem .5rem
  .user-wrapper
    padding 0.5rem 0
    border-1px(rgba(7,17,27,.1))
    .iconfont
      font-color(rgb(255,171,40))
      font-size .8rem
      margin-right 0.3rem
    .text
      font-size .5rem
      font-color(rgb(147,153,159))
  .info-wrapper
    padding 0.5rem 0
    .content
      text-align center
      .block
        display block
        width 2.5rem
        height 2.5rem
        margin 0 auto
        bg-color(rgb(244,244,244))
        border-radius .3rem
        text-align center
        line-height 2.5rem
        font-size .8rem
        font-weight bold
      .title
        font-size .6rem
        margin-top 0.1rem
</style>

