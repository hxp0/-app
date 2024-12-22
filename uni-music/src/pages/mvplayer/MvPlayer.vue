<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app'
import { nextTick, ref, watch } from 'vue' 
import { mvUrlApi,mvDetailApi,simiApi,artistDetailDynamicApi,artistFollowApi,artistSubApi } from '../../services'
import type{ mvUrlDataType,mvDetailInfoType,artistFollowDataType } from '../../services'
import Icons from './components/Icons.vue';
import SimiMv from './components/simiMv.vue';
const mvDetail = ref<mvDetailInfoType>()
const mvUrl = ref<mvUrlDataType>()
const songid = ref<number>()
const isIcon = ref(false)
const playCount = ref<number>(0)
const mvid = ref<number>()
const artistFollow = ref<artistFollowDataType>()
const videoCount = ref<number>()
const getartistDetail = async(id:number)=>{
    const res = await artistDetailDynamicApi(id)
    videoCount.value = res.videoNum[0].num
}
const getArtistFollow = async(id:number)=>{
    const res = await artistFollowApi(id)
    artistFollow.value = res.data
}
const getMvUrl = async(id:number)=>{
    const res = await mvUrlApi(id)
    mvUrl.value = res.data
}
const getMvDetail = async(id:number)=>{
    const res = await mvDetailApi(id)
    mvDetail.value = res.data
    playCount.value = res.data.playCount
    mvid.value = res.data.id 
    console.log(res.data)
    getartistDetail(res.data.artistId)
    getArtistFollow(res.data.artistId)
}
onLoad((option)=>{
    songid.value = option!.songid
    getMvDetail(option!.mvid)
    getMvUrl(option!.mvid)
})

const goPlayer = ()=>{
    uni.switchTab({
        url:`../player/player?id=${songid.value}`
    })
    uni.setStorageSync('id',songid.value)
}
const changeFollow = async(id:number)=>{
    const res = await artistSubApi(id,1)
    if(res.code === 200){
        getArtistFollow(mvDetail.value!.artistId)
        uni.showToast({
            title:'关注该歌手成功',
            icon:'none'
        })
    }
    
}


</script>

<template>
<view v-if="mvDetail && mvUrl && artistFollow">
    <view class="video">
        <video :src="mvUrl.url" autoplay="true" show-mute-btn=''></video>
    </view>
    <view class="mvInfo">
        <view class="artistsInfo">
            <view class="pics">
                <image v-for="(item,index) in mvDetail.artists" :key="item.id" :src="item.img1v1Url" :style="'z-index:'+ (mvDetail.artists.length - index) +';left:'+ index*12 + 'px;'"></image>
            </view>
            <view class="artist">
                <view class="artistsName">{{ mvDetail.artists.map(v=>v.name).join('/') }}</view>
                <view class="videos">
                    <view v-if="mvDetail.artists.length===1">{{ artistFollow.fansCnt>10000? (artistFollow.fansCnt/10000).toFixed(1) + '万粉丝' :artistFollow.fansCnt + '粉丝' }} {{ videoCount }}视频</view>
                    <view v-else>该Mlog有多个歌手</view>
                </view>
            </view>
        </view>
        <button v-if="artistFollow.isFollow === false" @click="changeFollow(mvDetail.artistId)"> + 关注</button>
    </view>
    <view class="mvName">
        <view class="mvName1"><text>MV</text>{{ mvDetail.name }}</view>
        <view class="icons" @click="isIcon=!isIcon">
            <uni-icons type="down" size="20" v-if="isIcon === false"></uni-icons>
            <uni-icons type="up" size="20" v-else></uni-icons>
        </view>
    </view>
    <view class="desc" v-if="isIcon===true">{{ mvDetail?.desc }}</view>
    <view class="a" @click="goPlayer">{{ mvDetail.name }}-{{ mvDetail.artistName }}</view>
    <view class="count">{{ (playCount/10000).toFixed(1) }}万次观看 {{ mvDetail.publishTime }}</view>
    <Icons :mvid="mvDetail.id" :title="mvDetail.name"/>
    <SimiMv :mvid="mvDetail.id"/>

</view>
</template>

<style lang="scss" scoped>
.video{
    width: 100%;
    height: 200px;
    video{
        width: 100%;
        height: 100%;
    }
}
.mvInfo{
    width: 100%;
    display: flex;
    padding: 10px 15px;
    justify-content: space-between;
    align-items: center;
    .artistsInfo{
        flex: 1;
        display: flex;
        align-items: center;
        .pics{
            margin-right: 10px;
            position: relative;
            height: 50px;
            width: 60px;
            image{
                position: absolute;
                top: 0;
                width: 50px;
                height: 50px;
                border-radius: 50%;
            }
        }
        .artist{
            .artistsName{
                font-weight: bold;
                font-size: 14px;
            }
            .videos{
                font-size: 12px;
                color: #666;
            }
        }
    }
    button{
        width: 60px;
        height: 30px;
        font-size: 10px;
        line-height: 30px;
        background-color: #fff;
        color: red;
        border-radius: 20px;
        border: 1px solid red;
    }
}
.mvName{
    display: flex;
    padding: 10px;
    justify-content: space-between;
    align-items: center;
    font-weight: bolder;
    .mvName1{
        text{
        border: 1px solid red;
        font-size: 10px;
        color: red;
        font-weight: normal;
        border-radius: 5px;
        padding:  3px;
        margin-right: 5px;
    }
    }
}
.desc{
    padding: 5px 10px;
    font-size: 14px;
}
.a{
    color: rgb(29, 29, 174);
    padding: 0 10px;
    font-size: 14px;
}
.count{
    font-size: 12px;
    color: #666;
    padding: 5px 10px;
}

</style>
