<template>
  <div class="rule-position">
    <van-nav-bar
      :title="$route.meta.title"
      left-text="返回"
      left-arrow
      @click-left="$router.back()"
    />
    <divider></divider>
    <div class="position-wrapper">
      <div class="content-wrapper">
        <div class="content">
          <router-link to="/rule_position_detail">
            <p class="short-address">地点 : 钦汇园</p>
            <p class="address">地址 : 上海市徐汇区钦州北路1066号</p>
            <p class="range">范围 : 100米</p>
          </router-link>
        </div>
      </div>
      <div class="content-wrapper">
        <div class="content">
          <router-link to="/rule_position_detail">
            <p class="short-address">地点 : 钦汇园</p>
            <p class="address">地址 : 上海市徐汇区钦州北路1066号</p>
            <p class="range">范围 : 100米</p>
          </router-link>
        </div>
      </div>
    </div>
    <divider></divider>
    <van-cell-group class="add-wrapper"> 
      <van-cell title="添加位置" icon="add" class="blue" to="/rule_position_detail" />
    </van-cell-group>
  </div>
</template>
<style lang="stylus" scoped>
@import "../../../common/css/mixin.styl"
.rule-position
  .position-wrapper
    .content-wrapper
      padding 0.5rem 0
      border-1px(rgba(7,17,27,.1))
      .content
        padding 0 .5rem
        font-size .6rem
  .add-wrapper
    .blue
      color #38f
</style>
<script>
import divider from "@/components/divider"
export default {
  name:'rule_position',
  data(){
    return {

    }
  },
  components:{
    divider
  }
}
</script>


