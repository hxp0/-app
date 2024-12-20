<script setup lang="ts">
import { ref } from 'vue';
import { useUserStore } from '@/stores/userStore'
import {userRecordApi,mvDetailApi} from '../../services'
import type{allDataType} from '../../services'

const userStore = useUserStore()
const tabsList = ['歌曲','声音','有声书','直播','歌单','专辑','视频','博客']
const list = ref<allDataType[]>([])
const activeCur = ref<number>(0)
const changeActive = (index:number)=>{
    activeCur.value = index
}
const getRecordList = async()=>{
    const res = await userRecordApi(userStore.userInfo!.userId)
    list.value = res.allData
    console.log(list.value)
}
getRecordList()
const goPlayer = (id:number)=>{
    uni.switchTab({
        url:`/pages/player/player?id=${id}`
    })
    uni.setStorageSync('id',id)
}
const getDetail = (obj:allDataType)=>{
    console.log(obj)
}
const goMv = async(id:number)=>{
    const res = await mvDetailApi(id)
    console.log(res)
}
</script>

<template>
    <view class="tabs">
        <view v-for="(item,index) in tabsList" :key="item" @click="changeActive(index)" :class="['item',{active:activeCur === index}]">
            {{ item }}
        </view>
    </view>
    <view class="content">
        <view class="result" v-if="activeCur===0">
            <view v-for="item in list" :key="item.song.name" class="item" >
                <view @click="goPlayer(item.song.id)" class="info">
                    <view class="name">{{ item.song.name }}</view>
                    <view class="singer">{{ item.song.ar.map(v=>v.name).join('/') }}-{{ item.song.al.name }}</view>
                </view>
                <view class="icons">
                    <uni-icons type="videocam" size="20" color="#ccc"  v-if="item.song.mv!==0" class="videocam" @click="goMv(item.song.mv)"></uni-icons>
                    <uni-icons type="more-filled" size="20" color="#ccc" @click="getDetail(item)"></uni-icons>
                </view>
            </view>
        </view>
    </view>

</template>

<style lang="scss" scoped>
.tabs{
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    font-weight: bold;
    color: #333;
    font-family: '楷体';
    border-bottom: 1px solid #eee;
    overflow: auto;
    padding: 0 10px;
    .item{
        height: 100%;
        margin-right: 20px;
        text-align: center;
        line-height: 40px;
        border-bottom: 2px solid transparent;
        flex-shrink: 0;
        &:last-child{
            margin-right: 0;
        }
        &.active{
            color: red;
            border-bottom: 2px solid red;
        }
    }
}
.tabs::-webkit-scrollbar{
    display: none;
}
.result{
    width: 100%;
    font-family: '楷体';
    .item{
        width: 100%;
        font-size: 14px;
        color: #333;
        padding: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .info{
            flex: 1;
            .name{
                font-weight: bold;
                font-size: 16px;
                margin-bottom: 5px;
            }
            .singer{
                font-size: 12px;
            }
        }
        .icons{
            .videocam{
                margin-right: 20px;
            }
        }
    }
}
</style>
