<template>
  <div class="aboutme">
    <van-cell-group>
      <van-cell title="用户名" value="xxx" />
      <van-cell title="版本信息" value="1.1.0" label="当前为测试版本。" />
      <van-cell title="是否开启调试模式">
        <template slot="right-icon">
          <van-button v-if="bugOn" type="primary" plain size="small" @click="openVconsole">开启</van-button>
          <van-button v-else type="primary" plain size="small" @click="closeVconsole">关闭</van-button>
        </template>
      </van-cell>
    </van-cell-group>
  </div>
</template>
<style lang="stylus" scoped>
</style>
<script>
export default {
  name:'aboutme',
  data(){
    return {
      bugOn:true,
    }
  },
  methods:{
    openVconsole(){
      let _this=this;
      let url =
        "http://maimang-public.oss-cn-hangzhou.aliyuncs.com/vconsole.min.js";
      this.Utils.createScript(url, function() {
        var vConsole = new VConsole();
        Vue.prototype.vConsole=vConsole;
        _this.bugOn=false;
        console.log("aaaaa");
      });
    },
    closeVconsole(){
      this.vConsole.destroy();
      this.bugOn=true;
    }
  }
}
</script>


