<template>
  <div class="daka_detail">
    <van-nav-bar
      :title="$route.meta.title"
      left-text="返回"
      left-arrow
      @click-left="$router.back()"
    >
    </van-nav-bar>
    <divider></divider>
    <div class="detail-wrapper">
      <div class="time-wrapper">
        <div class="left-content">打卡时间</div>
        <div class="right-content red">17:43</div>
      </div>
      <div class="address-wrapper">
        <div class="left-content">打卡地点</div>
        <div class="right-content">
          <p class="short-address">钦汇园</p>
          <p class="address">上海市徐汇区钦州北路1088号</p>
          <div class="map-content">
            <x-map class="map-content" height="7rem" :center="center"></x-map>
            <i class="iconfont" @click.stop="onLocation">&#xe64a;</i>
          </div>
        </div>
      </div>
      <div class="note-wrapper">
        <div class="left-content">备注</div>
        <div class="right-content">
          <van-field class="note-input"
            v-model="message"
            type="textarea"
            rows="1"
            autosize
            clearable
            icon="arrow"
            placeholder="此处填写留言"
          />
          <div class="photo-wrapper">
            <x-photo></x-photo>
          </div>
        </div>
      </div>
    </div>
    <div class="btn-wrapper">
      <van-button type="primary" size="large">确认打卡</van-button>
    </div>
  </div>
</template>
<style lang="stylus" scoped>
@import "../../../common/css/mixin.styl"
.daka_detail
  .detail-wrapper
    padding 0.5rem
    .time-wrapper,.address-wrapper,.note-wrapper
      display flex
      border-1px(rgba(7,17,27,.1))
      padding 0.5rem 0
      font-size .6rem
      .left-content
        flex 0 0 3rem
        color rgb(147,153,159)
      .right-content
        flex 1
    .time-wrapper
      .red
        color red
    .address-wrapper
      .address
        color rgb(147,153,159)
        font-size .5rem
      .map-content
        margin-top 0.3rem
        width 100%
        position relative
        .iconfont
          position absolute
          font-size 1rem
          right 0
          bottom 0
    .note-wrapper
      .right-content
        .note-input
          padding 0
        .photo-wrapper
          margin-top 0.3rem
          width 100%
  .btn-wrapper
    padding 0.5rem
    margin-top 1rem
</style>
<script>
import divider from "@/components/divider"
import xMap from "@/components/x_map"
import xPhoto from "@/components/x_photo"
export default {
  name:'daka_detail',
  data(){
    return {
      message:'嘿嘿嘿',
      center:[121.473658,31.230378],
    }
  },
  components:{
    divider,
    xMap,
    xPhoto
  },
  methods:{
    onLocation(){
      this.center=[121.406051,31.179695];
    }
  }
}
</script>


