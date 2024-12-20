<script setup lang="ts">
import { ref } from 'vue'
import { getBannerApi,getHomeApi,ShowType } from '../../services'
import type { RequestList,Block} from '../../services'
import Radar from '../../pages/index/components/Radar.vue'
import LikeList from '../../pages/index/components/LikeList.vue'

const homeList = ref<RequestList[]>([])
const homeRequest = ref<Block[]>([])


const drawerRef = ref()

const showDrawer = () => {
    drawerRef.value.open()
}
const goSearch = () => {
    uni.navigateTo({
        url:'/pages/search/Search'
    })
}


getBannerApi()
    .then(res => {
        // console.log(res.data)
        homeList.value = res.data
    })

getHomeApi()
    .then((res) => {
        console.log(res)
        homeRequest.value = res.data.blocks
    })





</script>

<template>
    <view>
        <view class="nav">
            <i class="iconfont icon-liebiao" @click="showDrawer"></i>
            <uni-search-bar class="search" readonly placeholder="搜索" bgColor="#EEEEEE" @click="goSearch"/>
        </view>
        <view class="view">
            <view v-for="item in homeList" :key="item.targetId">
                <image :src="item.pic" mode="widthFix"/>
                <view>{{ item.typeTitle }}</view>
            </view>
        </view>
        <template v-for="item in homeRequest" :key="item.blockCode">
            <Radar v-if="item.showType === ShowType.HOMEPAGE_SLIDE_PLAYLIST" :list="item.creatives" :title="item.uiElement"/>
            <LikeList v-else-if="item.showType === ShowType.HOMEPAGE_SLIDE_SONGLIST_ALIGN" :list="item.creatives" :title="item.uiElement.subTitle.title" :ids="item.resourceIdList"/>
        </template>

        


        <uni-drawer ref="drawerRef" mode="left" :width="320">
            抽屉内容
        </uni-drawer>
    </view>
</template>

<style lang="scss" scoped>
.nav{
  display: flex;
  align-items: center;
  .iconfont{
    width: 36px;
    height: 36px;
    font-size: 24px;
    text-align: center;
    line-height: 36px;
  }
  .search{
    flex: 1;
  }
}
.view::-webkit-scrollbar{
    width: 0;
    height: 0;
}

.view{
    margin: 10px 0;
    height: 300rpx;
    display: flex;
    overflow-x: auto;
    overflow-y: hidden;
    text-align: center;
    image{
        height: 150px;
        border-radius: 5px;
        margin: 0 5px;
    }
}
.recommend::-webkit-scrollbar{
    width: 0;
    height: 0;
}
.recommend{
    margin: 10px 0;
    height: 360rpx;
    display: flex;
    overflow-x: auto;
    overflow-y: hidden;
    text-align: center;
    view{
      font-size: 14px;  
    }
    image{
        height: 120px;
        width: 120px;
        border-radius: 5px;
        margin: 0 5px;
    }
}

</style>
