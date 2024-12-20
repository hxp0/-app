<script setup lang="ts">
import type { Creative } from '../../../services';
interface Props {
    list:Creative[]
    title:{
        subTitle:{
            title:string
        }
    }
}

const goDetail = (id:string) => {
    uni.navigateTo({
        url: `/pages/playlist/playlist?id=${id}`
    })
}

const props = defineProps<Props>()
</script>

<template>
    <uni-section :title="props.title.subTitle.title" type="line"></uni-section>
    <view class="list">
        <view class="item" v-for="item in props.list" :key="item.creativeId" @click="goDetail(item.creativeId)">
            <image :src="item.uiElement.image.imageUrl" mode="widthFix"/>
            <view class="font">{{ item.uiElement.mainTitle.title }}</view>
        </view>
    </view>


</template>

<style lang="scss" scoped>
.list::-webkit-scrollbar{
    width: 0;
    height: 0;
}
.list {
    display: flex;
    height: 370rpx;
    overflow-x: auto;
    overflow-y: hidden;
    margin: 10px 0;
    text-align: center;
    image {
        width: 120px;
        height: 120px;
        border-radius: 5px;
        margin: 0 5px;
    }
}
.font{
    font-size: 14px;
}
</style>