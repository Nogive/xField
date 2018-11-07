<template>
  <div class="tongji">
    <van-nav-bar
      :title="$route.meta.title"
      left-text="返回"
      left-arrow
      @click-left="$router.back()"
    >
    </van-nav-bar>
    <divider></divider>
    <div class="all-wrapper">
      <van-cell title="全部成员" is-link />
      <div class="content">
        <p class="title">每天</p>
        <div class="time-wrapper">
          <span class="time">上午上班：09:00</span>
          <span class="time">上午下班：12:00</span>
        </div>
        <div class="time-wrapper">
          <span class="time">下午上班：13:00</span>
          <span class="time">下午下班：18:00</span>
        </div>
      </div>
    </div>
    <divider></divider>
    <div class="internal-wrapper">
      <van-cell title="内勤考勤" is-link />
      <div class="content">
        <p class="title">每天</p>
        <div class="time-wrapper">
          <span class="time">上午上班：09:00</span>
          <span class="time">上午下班：12:00</span>
        </div>
        <div class="time-wrapper">
          <span class="time">下午上班：13:00</span>
          <span class="time">下午下班：18:00</span>
        </div>
      </div>
    </div>
    <divider></divider>
    <div class="outer-wrapper">
      <van-cell title="外出统计" is-link />
    </div>
    <div class="history-wrapper">
      <van-cell-group>
        <van-cell title="我的考勤历史 >" class="text" />
      </van-cell-group>
    </div>
  </div>
</template>
<style lang="stylus" scoped>
.tongji
  .internal-wrapper,.all-wrapper,.outer-wrapper
    border-bottom 1px solid rgba(7,17,27,.1)
    .content
      padding 0.5rem 0.5rem .8rem
      .title
        font-size .5rem
      .time-wrapper
        display flex
        .time
          flex 0 0 50%
          font-size .5rem
  .history-wrapper
    width 100%
    position fixed
    bottom 50px
    left 0
    .text
      background-color #fafafa
      text-align center
      color #38f
</style>
<script>
import divider from "@/components/divider"
export default {
  name:'tongji',
  components:{
    divider
  }
}
</script>


