<script setup lang="ts">
import type { Creative } from '../../../services';
interface Props {
    list:Creative[]
    title:string
    ids:string[]
}
interface Data {
    name:string
}

const props = defineProps<Props>()
// const resourceList = props.list.
const format =(data:Data[]) =>{
    return data.map(v => v.name).join('/')
}
const play = (id:string) => {
    console.log(id)
    uni.switchTab({
        url:`/pages/player/player?id=${id}`
    })
}
</script>

<template>
    <uni-section :title="props.title" type="line"></uni-section>
    <swiper class="swiper">
        <swiper-item v-for="(item,index) in list" :key="index">
            <uni-list :border="true">
                <uni-list-chat
                v-for="song in item.resources"
                :key="song.resourceId" 
                :title="song.uiElement.mainTitle.title" 
                :avatar="song.uiElement.image.imageUrl" 
                :note="format(song.resourceExtInfo.artists)"
                clickable
                @click="play(song.resourceId)" 
                >
                    <uni-icons custom-prefix="iconfont" type="icon-zantingbofang1" size="20"></uni-icons>
                </uni-list-chat>
            </uni-list>
        </swiper-item>
    </swiper>

</template>

<style lang="scss" scoped>
.swiper {
    height: 400rpx;
}
.uni-icons{
    margin-top: 10px;
}
</style>