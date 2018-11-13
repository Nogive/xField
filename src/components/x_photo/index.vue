<template>
  <div class="photo">
    <div class="pic-wrapper">
      <van-row gutter="10">
        <van-col class="pic-item" span="8" v-for="(item,index) in photoLists" :key="index">
          <img class="img" :src="item.src" alt="" @click="enlargePhoto(item,index)">
        </van-col>
        <van-col class="pic-item" span="8" v-if="showTakePhoto">
          <div class="img camera" @click="takePhoto"></div>
        </van-col>
      </van-row>
    </div>
    <van-popup v-model="showlargePic" class="large-wrapper">
      <van-swipe :initialSwipe="currentIndex" @change="onChange" id="photoHeight">
        <van-swipe-item v-for="(item,index) in photoLists" :key="index" :class="{'currentEl':index==currentIndex}">
          <img class="img" :src="item.src" alt="" @click="showlargePic=false">
          <van-icon class="icon" name="delete" @click.stop="onDetele(item,index)" />
        </van-swipe-item>
      </van-swipe>
    </van-popup>
  </div>
</template>
<style>
.van-cell:not(:last-child)::after{
  border-bottom:none;
}
</style>
<style scoped lang="stylus">
.photo
  width 100%
  .pic-wrapper
    .pic-item
      text-align center
      margin-bottom .6rem
      .img
        width 3.5rem
        height 3.5rem
        border-radius .1rem
      .camera
        margin 0 auto
        border 1px solid rgb(244,244,244)
        background rgb(244,244,244) url('./images/photo.png') center no-repeat 
  .large-wrapper
    width 100%
    background-color transparent
    .van-swipe
      min-height 100%
      overflow hidden
      .van-swipe-item
        position relative
        .icon
          position absolute
          right 10px
          top 10px
          font-size 20px
          color #ffffff
        .img
          width 100%
</style>
<script>
import {takePhoto} from "@/common/js/cordova"
const maxLen=9;
export default {
  name:'x_photo',
  data () {
    return {
      showlargePic:false,
      currentItem:{},
      currentIndex:0,
      photoLists:[
        {
          src:'http://xfield.oss-cn-hangzhou.aliyuncs.com/100001@1533283255000@E26CA3E0-F4F5-42DE-9E6C-9F4D564E0D65.jpg'
        },
        {
          src:'https://avatars3.githubusercontent.com/u/24405319?s=40&v=4'
        },
        {
          src:'http://xfield.oss-cn-hangzhou.aliyuncs.com/100001@1533283255000@E26CA3E0-F4F5-42DE-9E6C-9F4D564E0D65.jpg'
        },
      ]
    }
  },
  computed:{
    showTakePhoto:function(){
      if(this.photoLists.length<maxLen){
        return true;
      }else{
        return false;
      }
    }
  },
  methods: {
    enlargePhoto(item,index){
      this.currentIndex=index;
      this.currentItem=item;
      this.showlargePic=true;
      this.$nextTick(function () {
        let MaxH=document.getElementById('photoHeight').offsetHeight;
        if(this. _getImgHeight()<MaxH){
          this._getCurrentObj().style.marginTop=(MaxH-this. _getImgHeight())/2+'px';
        }
      })
    },
    _getImgHeight(){
      let h=document.getElementsByClassName('currentEl')[0].offsetHeight;
      return h;
    },
    _getCurrentObj(){
      let obj=document.getElementsByClassName('currentEl')[0];
      return obj;
    },
    onDetele(item,index){
      if(index==this.photoLists.length-1){
        this.currentItem=this.photoLists[0];
      }else{
        this.currentItem=this.photoLists[index+1];
      }
      this.photoLists.splice(index,1);
      this.$nextTick(function () {
        let MaxH=document.getElementById('photoHeight').offsetHeight;
        if(this. _getImgHeight()<MaxH){
          this._getCurrentObj().style.marginTop=(MaxH-this. _getImgHeight())/2+'px';
        }else{
          this._getCurrentObj().style.marginTop='0px';
        }
      })
    },
    onChange(index){
      this.currentIndex=index;
      this.currentItem=this.photoLists[index];
      this.$nextTick(function () {
        let MaxH=document.getElementById('photoHeight').offsetHeight;
        if(this. _getImgHeight()<MaxH){
          this._getCurrentObj().style.marginTop=(MaxH-this. _getImgHeight())/2+'px';
        }
      })
    },
    takePhoto(){
      let uuid=this.Utils.getUuid(); //userId@timestamp@uuid
      this.photoLists.push({
        uuid:uuid,
        src:'https://avatars3.githubusercontent.com/u/24405319?s=40&v=4'
      });
      console.log(this.photoLists);
      this.$emit('getPhotos',this.photoLists);
    }
  }
}
</script>


