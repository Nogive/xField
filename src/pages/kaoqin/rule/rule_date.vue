<template>
  <div class="rule-date">
    <van-nav-bar
      :title="$route.meta.title"
      left-text="返回"
      left-arrow
      right-text="确定"
      @click-left="$router.back()"
      @click-right="onSave"
    />
    <divider></divider>
    <van-checkbox-group v-model="checkedDate">
      <van-cell-group>
        <van-cell title="每周一">
          <van-checkbox name="1" />
        </van-cell>
        <van-cell title="每周二">
          <van-checkbox name="2" />
        </van-cell>
        <van-cell title="每周三">
          <van-checkbox name="3" />
        </van-cell>
        <van-cell title="每周四">
          <van-checkbox name="4" />
        </van-cell>
        <van-cell title="每周五">
          <van-checkbox name="5" />
        </van-cell>
        <van-cell title="每周六">
          <van-checkbox name="6" />
        </van-cell>
        <van-cell title="每周日">
          <van-checkbox name="7" />
        </van-cell>
      </van-cell-group>
    </van-checkbox-group>
    <divider></divider>
    <van-cell-group>
      <van-switch-cell v-model="holiday" title="法定节假日不用打卡" />
    </van-cell-group>
  </div>
</template>
<style lang="stylus" scoped>

</style>
<script>
import divider from "@/components/divider"
export default {
  name:'rule_date',
  data(){
    return {
      checkedDate:["1","2","3","4","5"],
      holiday:true
    }
  },
  components:{
    divider
  },
  methods:{
    onSave(){}
  }
}
</script>


