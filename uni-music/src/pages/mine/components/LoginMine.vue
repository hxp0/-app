
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
        <view class="bg" :style="'background:url(' + userStore.userInfo?.backgroundUrl + ') center no-repeat'"></view>
        <image :src="userStore.userInfo?.avatarUrl"></image>
        <view class="login">{{ userStore.userInfo?.nickname }}</view>
        <view class="desc">
          <view class="desc-tag">
            <text class="bold">{{userStore.userInfo?.followeds}}</text>关注
          </view>
          <view class="desc-tag">
            <text class="bold">{{userStore.userInfo?.follows}}</text>粉丝
          </view>
          <view class="desc-tag">
            <text class="bold">Lv.{{userStore.userInfo?.level}}</text>等级
          </view>
          <view class="desc-tag">
            <text class="bold">{{userStore.userInfo?.listenSongs}}首</text>听歌
          </view>
        </view>
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
                <uni-list>
                    <uni-list-item
                        v-for="item in userStore.playList"
                        :key="item.id"
                        :title="item.name"
                        :note="`${item.trackCount}首·${item.playCount}次播放`"
                        :thumb="item.coverImgUrl"
                        thumb-size="lg"
                        clickable=""
                        @click="goList(item.id)"
                    ></uni-list-item>
                </uni-list>
            </view>
        </view>
    </view>
</view> 
</template>
    
<script setup lang="ts">
import { nextTick, ref } from 'vue'
import { logoutApi,userPlaylistApi } from '@/services'
import { useUserStore } from '@/stores/userStore';
const userStore = useUserStore()
userStore.getLoginStatus()
const goSearch = ()=>{
    uni.navigateTo({
        url: '/pages/search/Search'
    })
}
const tabs = ['音乐','播客','动态']
const activeCur = ref(0)
const logout = ()=>{
    logoutApi()
    uni.removeStorageSync('curCookie')
}
const goList = (id:number)=>{
    uni.navigateTo({
        url: `/pages/playlist/playlist?id=${id}`
    })
}
</script>
    
<style lang="scss" scoped>
.content{
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
    position: relative;
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
    z-index: 1;
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
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    color: #fff;
    position: relative;
    .bg{
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        z-index: 0;  
    }
    .bg1{
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background-color: rgba(0,0,0, 0.3);
        z-index: -1;
    }
    image{
        width: 80px;
        height: 80px;
        border-radius: 50%;
        background-color: #f5f5f5;
        margin-bottom: 15px;
    }
    .login{
        z-index: 1;
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
        z-index: 1;
        .icon{
            display: flex;
            align-items: center;
            background-color: rgb(256, 256, 256,.2);
            padding: 5px 10px;
            border-radius: 8px;
            text{
                display: block;
                font-size: 14px;
            }
        }
    }
}
.desc {
    display: flex;
    justify-content: center;
    color: #cfc4c4;
    font-size: 14px;
    padding: 20rpx 0;
    z-index: 1;
  }
  .desc-tag {
    margin: 0 20rpx;
  }
  .bold {
    font-weight: bold;
    margin-right: 10rpx;
    color: #ffffff;
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