<template>
  <div class="name-content">
    <van-nav-bar
      :title="$route.meta.title"
      left-text="返回"
      left-arrow
      right-text="确定"
      @click-left="$router.back()"
      @click-right="enSure"
    />
    <divider></divider>
    <van-cell-group>
      <van-field
        v-model="name"
        clearable
        placeholder="请输入规则名"
      />
    </van-cell-group>
  </div>
</template>
<style lang="stylus" scoped>

</style>
<script>
import divider from "@/components/divider"
export default {
  name:'rule_name',
  data(){
    return {
      name:'',
    }
  },
  components:{
    divider
  },
  methods:{
    enSure(){}
  }
}
</script>


