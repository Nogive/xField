<template>
  <div class="photo">
    <div class="pic-wrapper">
      <van-row gutter="10">
        <van-col class="pic-item" span="8" v-for="(item,index) in photoLists" :key="index">
          <img class="img" :src="item.src" width="100%" height="100%" alt="">
        </van-col>
        <van-col class="pic-camera" span="8" v-if="showTakePhoto">
          <div class="camera"></div>
        </van-col>
      </van-row>
    </div>
  </div>
</template>
<style scoped lang="stylus">
.photo
  width 100%
  .pic-wrapper
    .pic-item
      height 3rem
      margin-bottom 10px
      border-radius .2rem
      .img
        border-radius .1rem
    .pic-camera
      padding 0 5px
      .camera
        border 1px solid rgb(244,244,244)
        height 3rem
        background rgb(244,244,244) url('./images/photo.png') center no-repeat 
        border-radius .1rem
</style>
<script>
const maxLen=9;
export default {
  name:'x_photo',
  data () {
    return {
      showBig:false,
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
        {
          src:'http://xfield.oss-cn-hangzhou.aliyuncs.com/100001@1533283255000@E26CA3E0-F4F5-42DE-9E6C-9F4D564E0D65.jpg'
        }
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
      this.showBig=true;
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
      this.photoLists.push({
        path:'@/assets/images/10.jpg'
      });
    }
  }
}
</script>


