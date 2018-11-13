<template>
  <div class="rule-shift">
    <van-nav-bar
      :title="$route.meta.title"
      left-text="返回"
      left-arrow
      right-text="确定"
      @click-left="$router.back()"
      @click-right="onSave"
    />
    <divider></divider>
    <van-cell-group>
      <van-cell title="一天内上下班次数" is-link :value="`${shiftNum}次`" @click="workTimesPopup=true"></van-cell>
    </van-cell-group>
    <div class="shift-wrapper" v-for="(item,index) in timeArr" :key="index">
      <divider></divider>
      <van-cell-group>
        <van-cell title="上班" is-link :value="item.onWork" @click="checkOnWorkTime(item,'on')" />
        <van-cell title="下班" is-link :value="item.afterWork" @click="checkOnWorkTime(item,'after')"  />
      </van-cell-group>
    </div>
  
    <!-- 上下班次数 -->
    <van-popup class="shift-picker" v-model="workTimesPopup">
      <van-cell-group>
        <van-cell title="一天内上下班次数" />
        <van-cell title="1次" @click="checkWorkTime(1)" />
        <van-cell title="2次" @click="checkWorkTime(2)" />
        <van-cell title="3次" @click="checkWorkTime(3)" />
      </van-cell-group> 
    </van-popup>

    <!-- 选择时间 -->
    <van-datetime-picker
      class="datetime-picker"
      v-show="showTimePanel"
      v-model="currentTime"
      type="time"
      @confirm="showTimePanel=false;currentTime='12:00'"
      @cancel="showTimePanel=false"
      @change='pickerTime'
    />
  </div>
</template>
<style lang="stylus" scoped>
.rule-shift
  .shift-picker
    width 60%
  .datetime-picker
    z-index 3000
    position absolute
    width 100%
    bottom 0
</style>
<script>
import divider from "@/components/divider"
export default {
  name:'rule_date',
  data(){
    return {
      shiftNum:1,
      workTimesPopup:false,
      timeArr: [
        {
          onWork: "09:00",
          afterWork: "18:00"
        }
      ], //上下班次数时间设置
      showTimePanel: false, //选择时间面板
      currentTime: "12:00", //时间面板上显示的默认时间
      current: "", //当前设置的那一次的上下班时间
      currentTag: "", //当前设置的是上班还是下班
    }
  },
  components:{
    divider
  },
  methods:{
    onSave(){},
    checkWorkTime(n) {
      this.shiftNum = n;
      let arr=[];
      for(let i=0;i<n;i++){
        arr.push({
          onWork:'09:00',
          afterWork:'18:00'
        })
      }
      this.timeArr=arr;
      this.workTimesPopup = false;
    },
    checkOnWorkTime(item,tag){
      this.currentTag = tag;
      this.current = item;
      if(tag=="on"){
        this.currentTime=item.onWork;
      }else{
        this.currentTime=item.afterWork;
      }
      this.showTimePanel = true;
    },
    pickerTime() {
      let idx = this.timeArr.indexOf(this.current);
      if (this.currentTag == "on") {
        this.timeArr[idx].onWork = this.currentTime;
      } else {
        this.timeArr[idx].afterWork = this.currentTime;
      }
    },
  }
}
</script>


