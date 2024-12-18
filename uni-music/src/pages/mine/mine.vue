<template>
<view class="content">
    <view class="header">
        <uni-icons type="bars" size="20" color="#fff"></uni-icons>
        <view>
            <uni-icons type="search" size="20" color="#fff" class="search" @click="goSearch"></uni-icons>
            <uni-icons type="more-filled" size="20" color="#fff"></uni-icons>
        </view>
    </view>
    <view class="top">
        <image src="#"></image>
        <view class="login" @click="goLogin">立即登录</view>
        <view class="icons">
            <view class="icon">
                <i class="iconfont icon-zuijinliulan"></i>
                <text>最近</text>
            </view>
            <view class="icon">
                <i class="iconfont icon-xiazaibendi"></i>
                <text>本地</text>
            </view>
            <view class="icon">
                <i class="iconfont icon-wangpan1"></i>
                <text>网盘</text>
            </view>
            <view class="icon">
                <i class="iconfont icon-icon-"></i>
                <text>装扮</text>
            </view>
            <view class="icon">
                <i class="iconfont icon-gengduo" style="font-size: 20px;"></i>
            </view>
        </view>
    </view>
    <view class="list">
        <view class="tabs">
            <view class="tab" :class="activeCur===index?'active':''" v-for="(item,index) in tabs" :key="index" @click="activeCur=index">
                {{item}}
            </view>
        </view>
        <view class="tabContent">
            <view v-if="activeCur === 0">
                <view>我喜欢的音乐</view>
                <view>新建歌单</view>
                <view>导入外部歌单</view>
            </view>
        </view>
    </view>
</view> 
</template>

<script setup lang="ts">
import { ref } from 'vue';
const goSearch = ()=>{
    uni.navigateTo({
        url: '/pages/search/Search'
    })
}
const goLogin = ()=>{
    uni.navigateTo({
        url: '/pages/login/Login'
    })
}
const tabs = ['音乐','播客','动态']
const activeCur = ref(0)
</script>

<style lang="scss" scoped>
.content{
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
    position: relative;
    background-color: #4e1414;
    position: relative;
    display: flex;
    flex-direction: column;
}
::v-deep .header{
    width: 100%;
    height: 40px;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    view{
        padding: 10px;
        .search{
        margin-right: 10px;
       }

    }
}
.top{
    width: 100%;
    height: 250px;
    background-color: #4e1414;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    color: #fff;
    image{
        width: 80px;
        height: 80px;
        border-radius: 50%;
        background-color: #f5f5f5;
        margin-bottom: 15px;
    }
    .icons{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: #ddd7d7;
        padding: 0 20px;
        font-family: '楷体';
        margin-top: 15px;
        .icon{
            display: flex;
            align-items: center;
            background-color: #673636;
            padding: 5px 10px;
            border-radius: 8px;
            text{
                display: block;
                font-size: 14px;
            }
        }
    }
}
.list{
    width: 100%;
    height: 100%;
    background-color: #fff;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    font-family: '楷体';
    flex: 1;
    .tabs{
        width: 100%;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 10px;
        font-weight: bold;
        color: #ccc;
        .tab{
            padding: 0 5px;
            height: 100%;
            line-height: 40px;
            text-align: center;
            &.active{
                border-bottom: 2px solid red;
                color: #333;
            } 
       }
    }
}
</style>