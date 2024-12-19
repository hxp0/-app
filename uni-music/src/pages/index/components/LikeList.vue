<script setup lang="ts">
interface Props {
    list:any[]
    title:string
}
interface Data {
    name:string
}

const props = defineProps<Props>()
const format =(data:Data[]) =>{
    return data.map(v => v.name).join('/')
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