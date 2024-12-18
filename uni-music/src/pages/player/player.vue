<template>
    <view class="player" ref="player" :style="'background:url(' + bgUrl + ') no-repeat center/1000% 1000%'"> 
        <view class="position">
            <view class="header">
                <view class="left">lef</view>
                <view class="center">私人漫游 默认模式</view>
                <view class="right">right</view>
            </view>
            <view class="play" @click="changeState">
                <view :class="['playImg' , { paused: !isPaused }]">
                    <image mode='heightFix' src="../../static/player_img/white_circle.png"></image>
                </view>
                <view class="bl_circle">
                    <image mode="heightFix" src="../../static/player_img/black_circle.png"></image>
                </view>
                <view :class="['songPic' , { paused: !isPaused }]">
                    <image :src="bgUrl"></image>
                </view>
                <view class="stylus">
                    <image src="../../static/player_img/stylus.png"></image>
                </view>
                <view :class="{songPlay: isplay , songPause: !isplay}"></view>
            </view>
        </view>
    </view>
</template>

<script setup lang="ts">
import { ref , watch , nextTick, createElementBlock} from 'vue'
import { playerUrlApi , playerDetailApi } from '../../services/index'

const bgUrl = ref<string>()
const songUrl = ref<string>()
const isplay = ref(false)
const isPaused = ref(false)
let audio:any = null

const getSongDetail = async() => {
    try{
        let res = await playerDetailApi('2146688401')
        // console.log('Detail',res.songs)
        bgUrl.value = res.songs[0].al.picUrl
    }catch(e){
        console.log(e)
    }
}
getSongDetail()

const getSongUrl = async() => {
    try{
        let res = await playerUrlApi('2146688401')
        // console.log('url',res.data)
        songUrl.value = res.data[0].url
        // console.log(songUrl.value)
    }catch(e){
        console.log(e)
    }
}
getSongUrl()

const changeState = () => {
    isplay.value = !isplay.value;
    isPaused.value = !isPaused.value;
    // console.log(isPaused.value)
    if( !audio ) {
        audio = uni.createInnerAudioContext();
        audio.src = songUrl.value;
    }
    if( isplay.value ){
        audio.play()
    }else{
        audio.pause()
    }
    audio.onEnded(()=>{
        isplay.value = !isplay.value;
        isPaused.value = !isPaused.value;
    })
}


</script>

<style lang="scss" scoped>
uni-page-body{
    height:100%;
}
.player{
    width:100%;
    height:100%;
    position:relative;
    .position{
        position:absolute;
        top:0;
        left:0;
        backdrop-filter: blur(25px);
        width:100%;
        height:100%;
    }
    .header{
        height:50px;
        // background:darkred;
        padding:0 15px;
        display:flex;
        color:#eee;
        justify-content: space-between;
        align-items: center;
    }
    .play{
        padding-top:75px;
        height:240px;
        position:relative;
        .playImg{
            position:absolute;
            bottom:0;
            left:66px;
            // transform: translateX(-50%);
            animation: name 15s infinite linear;
            z-index:5;
            image{
                width:100%;
            }
        }
        .bl_circle{
            position:absolute;
            bottom:0;
            left:50%;
            transform: translateX(-50%);
            z-index:2;
        }
        .songPic{
            position:absolute;
            bottom:40px;
            left:105px;
            // transform: translateX(-50%);
            animation: name 15s infinite linear; 
            image{
                width:160px;
                height:160px;
                border-radius: 50%;
            }
        }
        .stylus{
            position:absolute;
            top:26px;
            left:50%;
            z-index:10;
            image{
                width:59px;
                height:98px;
            }
        }
        .songPause{
            width:36px;
            height:36px;
            position:absolute;
            bottom:102px;
            left:50%;
            transform: translateX(-50%);
            z-index:20;
            background:url('../../static/player_img/stop.png') no-repeat center/100% 100%;
        }
        .songPlay{
            width:36px;
            height:36px;
            position:absolute;
            bottom:102px;
            left:50%;
            transform: translateX(-50%);
            z-index:20;
            background:url('../../static/player_img/play.png') no-repeat center/100% 100%;
        }
        .paused{
            animation-play-state: paused;
        }
        &::after{
            content:'';
            position:absolute;
            top:0;
            left:0;
            width:100%;
            height:100%;
            z-index:30;
        }
    }
}
@keyframes name{ 
    0% {  
        transform: rotate(0deg);
    } 
    100% {
        transform: rotate(360deg);
    }  
}
</style>