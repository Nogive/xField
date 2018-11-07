<template>
  <div class="rule">
    <van-nav-bar
      :title="$route.meta.title"
      left-text="返回"
      left-arrow
      @click-left="$router.back()"
    >
      <van-icon name="add-o" slot="right" />
    </van-nav-bar>
    <divider></divider>
    <div class="rule-wrapper">
      <div class="content-wrapper">
        <div class="content">
          <router-link to="/comingsoon">
            <h3 class="title">每日2次打卡</h3>
            <p class="date">日期 : 周一到周五</p>
            <p class="time">时间 : 09:00-12:00</p>
            <p class="position">位置 : 钦汇园</p>
          </router-link>
        </div>
      </div>
      <div class="content-wrapper">
        <div class="content">
          <router-link to="/comingsoon">
            <h3 class="title">每日4次考勤</h3>
            <p class="date">日期 : 周一到周五</p>
            <p class="time">时间 : 09:00-12:00 13:00-18:00</p>
            <p class="position">位置 : 钦汇园</p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="stylus" scoped>
@import "../../../common/css/mixin.styl"
.rule
  .rule-wrapper
    .content-wrapper
      padding 0.5rem 0
      border-1px(rgba(7,17,27,.1))
      .content
        padding 0 .5rem
        font-size .6rem
        .title
          font-weight bold
          font-size .6rem
</style>
<script>
import divider from "@/components/divider"
export default {
  name:'rule',
  data(){
    return {

    }
  },
  components:{
    divider
  }
}
</script>

