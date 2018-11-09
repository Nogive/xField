<template>
  <div class="home">
    <van-nav-bar
      :title="$route.meta.title"
      left-text="返回"
      left-arrow
      @click-left="goBack"
    >
      <van-icon v-show="$route.meta.right" name="$route.meta.right" slot="right" />
    </van-nav-bar>
    <router-view></router-view>
    <van-tabbar v-model="active">
      <van-tabbar-item to="/message" icon="chat" info="5">消息</van-tabbar-item>
      <van-tabbar-item to="/">
        <template slot="icon"><i class="iconfont">&#xe68c;</i></template>
        工作台
      </van-tabbar-item>
      <van-tabbar-item to="/aboutme" icon="contact">我</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<style scoped lang="stylus">
</style>
<script>
export default {
  name:'home',
  data(){
    return {
      active:1
    }
  },
  created(){
    console.log(this.Utils.Session.get('user').name);
  },
  methods:{
    goBack(){
      this.$router.push('/login');
    }
  }
}
</script>