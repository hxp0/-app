<script setup lang="ts">
import { ref, watch } from 'vue';
import { simiApi } from '../../../services'
import type { mvType } from '../../../services'
interface propsType {
    mvid:number
}
const props = defineProps<propsType>()
const mVlist = ref<mvType[]>()
const getMvList = async()=>{
    console.log(props.mvid)
    const res = await simiApi('mv',props.mvid)
    mVlist.value = res.mvs
}
getMvList()
const goMvDetail = (mvid:number,songid?:number)=>{
    uni.navigateTo({
        url:`/pages/mvplayer/MvPlayer?mvid=${mvid}&songid=${songid}` 
    })
}
</script>

<template>
<view class="simiContent">
    <view class="item" v-for="item in mVlist" :key="item.id" @click="goMvDetail(item.id)">
        <view class="imageContent">
            <image :src="item.cover"></image>
            <text>{{ item.duration/1000 }}</text>
        </view>
        <view class="info">
            <view class="title">{{ item.name }}</view>
            <view class="artistName">{{ item.artistName }}</view>
            <view class="artistName">{{ item.playCount>10000? (item.playCount/10000).toFixed(1) + '万' : item.playCount }}次播放</view>
        </view>
    </view>
</view>

</template>

<style lang="scss" scoped>
.simiContent{
    border-top: 1px solid #eee;
    padding: 5px 0;
    .item{
        padding: 5px 10px;
        display: flex;
        .imageContent{
            position: relative;
            width: 150px;
            height: 100px;
            image{
                width: 100%;
                height: 100%;
                border-radius: 5px;
            }
            text{
                position: absolute;
                bottom: 5px;
                right: 5px;
                color: #fff;
                font-size: 12px;
            }
        }
        .info{
            flex: 1;
            margin-left: 8px;
            font-family: '楷体';
            .title{
                font-weight: bold;
                font-size: 14px;
            }
            .artistName{
                font-size: 12px;
                color: #ccc;
                padding: 3px;
            }
        }
    }
}

</style>
