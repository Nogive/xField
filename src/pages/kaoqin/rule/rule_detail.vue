<template>
  <div class="rule_detail">
    <van-nav-bar
      :title="$route.meta.title"
      left-text="返回"
      left-arrow
      right-text="保存"
      @click-left="$router.back()"
      @click-right="onSave"
    />
    <div class="detail-wrapper">
      <divider></divider>
      <van-cell-group>
        <van-cell title="规则名称" to="/rule_name" is-link value="每日两次打卡" />
        <van-cell title="打卡人员" to="/rule_staff" is-link value="研发部" />
      </van-cell-group>
      <divider></divider>
      <van-cell-group>
        <van-cell title="打卡日期" to="/rule_date" is-link value="周一至周五" />
        <van-cell title="打卡时间" to="/rule_shift" is-link value="09:00-18:00" />
      </van-cell-group>
      <divider></divider>
      <van-cell-group>
        <van-cell title="打卡位置" to="/rule_position" is-link value="钦汇园，徐家汇" />
      </van-cell-group>
    </div>
    <div class="delete-wrapper">
       <van-cell title="删除规则" class="delete-rule" />
    </div>
  </div>
</template>
<style lang="stylus" scoped>
.rule_detail
  .delete-wrapper
    width 100%
    position fixed
    bottom 2rem
    left 0
    .delete-rule
      border-top 1px solid rgba(196,196,196,1)
      border-bottom 1px solid rgba(196,196,196,1)
      background-color #fafafa
      text-align center
</style>
<script>
import divider from "@/components/divider"
export default {
  name:'rule_detail',
  data(){
    return {

    }
  },
  components:{
    divider
  },
  methods:{
    onSave(){
      console.log('save');
    }
  }
}
</script>


