<template>
  <div class="rule-position-detail">
    <van-nav-bar
      :title="$route.meta.title"
      left-text="返回"
      left-arrow
      @click-left="$router.back()"
    >
      <template slot="right">
        <van-icon name="search" />
        <van-button type="primary" size="mini">确定</van-button>
      </template>
    </van-nav-bar>
  </div>
</template>
<style lang="stylus" scoped>

</style>
<script>
export default {
  name:'rule_position_detail'
}
</script>


