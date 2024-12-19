<template>
    <view class="player" ref="player" :style="'background:url(' + bgUrl + ') no-repeat center/1000% 1000%'"> 
        <view class="position">
            <view class="header">
                <view class="left iconfont icon--xiangxiajiantou"></view>
                <view class="center">私人漫游 默认模式</view>
                <view class="right iconfont icon-fasong01"></view>
            </view>
            <Record 
                v-if="isShow"
                :bgUrl="bgUrl"
                :isPaused="isPaused"
                :isplay="isplay"
                :songName="songName"
                :artists="artists"
                @changeShow="changeShow"
            />
            <Lyric 
                v-else
                @changeShow="changeShow"
            />
            <view class="prog" ref="prog">
                <view class="progress"></view>
                <view class="roundDot" ref="roundDot" :style="'left:' + leftW"></view>
                <view class="proText">
                    <view style="width:50px;">{{curTime}}</view>
                    <view>极高</view>
                    <view style="width:40px;">{{totalTime}}</view>
                </view>
            </view>
            <view class="songPlay">
                <view class="iconfont icon-danquxunhuan"></view>
                <view class="songPlay_C">
                    <view class="iconfont icon-shangyishou"></view>
                    <view
                        :class="['iconfont' , { 'icon-icon_play' : !isplay , 'icon-zanting' : isplay}]"
                        @click="changeState"
                    ></view>
                    <view class="iconfont icon-xiayishou"></view>
                </view>
                <view class="iconfont icon-bofangliebiao-copy"></view>
            </view>
        </view>
    </view>
</template>

<script setup lang="ts">
import { ref , watchEffect , onMounted , nextTick , onBeforeMount, onBeforeUnmount } from 'vue'
import { playerUrlApi , playerDetailApi } from '../../services/index'
import '../../static/font_4787574_zcaovxyixff/iconfont.css'
import Record from './components/Record.vue'
import Lyric from './components/Lyric.vue'
import { onLoad } from "@dcloudio/uni-app";

const bgUrl = ref<string>()
const songUrl = ref<string>()
const isShow = ref(true)
// const isplay = ref( JSON.parse(sessionStorage.getItem('isplay')!) || false) // 管理停止按钮和播放按钮切换的
const isplay = ref( false)
// const isPaused = ref( JSON.parse(sessionStorage.getItem('isPaused')!) || false) // 管理动画是否旋转
const isPaused = ref( false)
const songName = ref<string>() // 歌曲名
const artists = ref<string>() // 演唱者
let audio:any = null
const roundDot = ref()
const prog = ref()
const leftW = ref('0')
const curTime = ref('00:00')
const totalTime = ref()
const id = ref<string | string[]>()

onLoad((option)=>{
    id.value = option?.id;
    console.log(option)
    getSongDetail( id.value || '2146688401' )
    getSongUrl( id.value || '2146688401' )
})
// 格式化时间
const format = ( time: number )=>{
    let h = 0;
    let m = 0;
    let s = 0;
    h = Math.floor(time / 60 /60);
    m = Math.floor(time / 60 % 60)
    s = Math.floor(time % 60);
    return h === 0 ? zero(m) + ":" + zero(s) : zero(h) + ":" + zero(m) + ":" + zero(s);
}
// 补0
const zero = (n: number)=>{
    return n < 10 ?  '0' + n : n;
}
// 调用歌曲详情接口
const getSongDetail = async( id:string | string[] ) => {
    try{
        let res = await playerDetailApi(id)
        console.log('Detail',res.songs)
        bgUrl.value = res.songs[0].al.picUrl;
        songName.value = res.songs[0].al.name + '(' + res.songs[0].alia.map(v => v) + ')'
        artists.value = res.songs[0].ar.map(v => v.name).join("/")
    }catch(e){
        console.log(e)
    }
}
// 调用播放地址接口
const getSongUrl = async( id:string | string[] ) => {
    try{
        let res = await playerUrlApi(id)
        console.log('url',res.data)
        songUrl.value = res.data[0].url  
        curTime.value = format(0)
        totalTime.value = format(res.data[0].time / 1000)
        // console.log(songUrl.value)
    }catch(e){
        console.log(e)
    }
}
// 调用audio的方法，改变按钮和动画的状态
const changeState = () => {
    isplay.value = !isplay.value;
    isPaused.value = !isPaused.value;
    // console.log(isPaused.value)
    if( !audio || audio.src !== songUrl.value ) {
        audio = uni.createInnerAudioContext();
        audio.src = songUrl.value;
    }
    if( isplay.value ){
        audio.play()
    }else{
        audio.pause()
    }
    audioFn(audio)
}
// audio的方法
const audioFn = ( audio:any ) => {
    audio.onEnded(()=>{
        isplay.value = !isplay.value;
        isPaused.value = !isPaused.value;
        curTime.value = format(0);
        leftW.value = '0';
    })
    audio.onTimeUpdate(()=>{
        // if( audio.currentTime === audio.duration ) {
        //     leftW.value = '0';
        // }
        const ratio = (( audio.currentTime / audio.duration ) * 100 ).toFixed(2) + '%';
        leftW.value = ratio;
        curTime.value = format( audio.currentTime );
        totalTime.value = format( audio.duration );
        // console.log(ratio)
    })
}
// 切换唱片组件和歌词组件
const changeShow = () => {
    isShow.value = !isShow.value;
}
// 监听isplay和isPaused的值,存入会话存储
// watchEffect(()=>{
//     sessionStorage.setItem('isplay' , JSON.stringify(isplay.value))
//     sessionStorage.setItem('isPaused' , JSON.stringify(isPaused.value))
// })

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
    .prog{
        width:670rpx;
        height:2px;
        margin-left:15px;
        border-radius: 1px;
        position:relative;
        .progress{
            width:100%;
            height:100%;
            margin-bottom:8px;
            background:#eeeeee;
            opacity: 0.7;
        }
        .roundDot{
            width:8px;
            height:8px;
            position: absolute;
            top:-3px;
            // left:0;
            border-radius: 50%;
            background:#ffffff;
            z-index:2;
            // transition:0.9s linear;
        }
        .proText{
            display:flex;
            justify-content: space-between;
            color:#ffffff;
        }
    }
    .songPlay{
        padding:50px 25px 0;
        display:flex;
        justify-content: space-between;
        align-items: center;
        font-size: 60px !important;
        color:#f2f2f2;
        .songPlay_C{
            display:flex;
            justify-content: space-between;
            align-items: center;
            &>view{
                padding:0 10px;
                font-size: 40px;
            }
            .icon-bofang{
                font-size:50px;
            }
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