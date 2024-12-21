<template>
    <view class="wh">
        <view class="play" @click="emits('changeShow')">
            <view :class="['playImg' , { paused: !isPaused }]">
                <image mode='heightFix' src="../../../static/player_img/white_circle.png"></image>
            </view>
            <view class="bl_circle">
                <image mode="heightFix" src="../../../static/player_img/black_circle.png"></image>
            </view>
            <view :class="['songPic' , { paused: !isPaused }]">
                <image :src="bgUrl"></image>
            </view>
            <view class="stylus">
                <image src="../../../static/player_img/stylus.png"></image>
            </view>
            <view :class="{songPlay: isplay , songPause: !isplay}"></view>
        </view>
        <view class="songInfo">
            <view class="infoLeft">
                <view class="songName">{{ songName }}</view>
                <view class="songArtists">{{ artists }}</view>
            </view>
            <view class="infoRight">
                <uni-badge size="small" :text="100" absolute="rightTop" type="default">
                	<view class="infoRight_L  iconfont icon-hear"></view>
                </uni-badge>
                <uni-badge size="small" :text="100" absolute="rightTop" type="default">
                	<view class="infoRight_R iconfont icon-xiaoxi" @click="visible = !visible"></view>
                </uni-badge>
            </view>
        </view>
        
        <Comment  :id="id" v-model:visible="visible"></Comment>
    </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Comment from '../../../components/comment/Comment.vue'
import '../../../static/font_4787574_zcaovxyixff/iconfont.css'

const props = defineProps(['bgUrl' , 'isPaused' , 'isplay' , 'songName' , 'artists' , 'id'])
const emits = defineEmits(['changeShow'])
const visible = ref(false)
</script>

<style lang="scss" scoped>
.wh{
    height:860rpx;
    padding-top:75px;
}
.play{
    height:240px;
    position:relative;
    .playImg{
        height:240px;
        position:absolute;
        bottom:2px;
        left:135rpx;
        // transform: translateX(-50%);
        animation: name 15s infinite linear;
        z-index:5;
        image{
            width:100%;
        }
    }
    .bl_circle{
        height:240px;
        position:absolute;
        bottom:0;
        left:135rpx;
        // transform: translateX(-50%);
        z-index:2;
    }
    .songPic{
        position:absolute;
        bottom:40px;
        left:215rpx;
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
        top:-47px;
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
        left:339rpx;
        // transform: translateX(-50%);
        z-index:20;
        background:url('../../../static/player_img/stop.png') no-repeat center/100% 100%;
    }
    .songPlay{
        width:36px;
        height:36px;
        position:absolute;
        bottom:102px;
        left:339rpx;
        // transform: translateX(-50%);
        z-index:20;
        background:url('../../../static/player_img/play.png') no-repeat center/100% 100%;
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
.songInfo{
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding:50px 25px 0;
    color:#f2f2f2;
    .infoLeft{
        width:200px;
        .songName , .songArtists{
            font-size:20px;
            margin-bottom:6px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        .songArtists{
            font-size:16px;
        }
    }
    .infoRight{
        padding-left:35px;
        flex:1;
        display:flex;
        justify-content: space-between;
        .infoRight_L{
            font-size:30px;
        }
        .infoRight_R{
            font-size:30px;
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