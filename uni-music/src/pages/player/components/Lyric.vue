<template>
    <view class="lyric" @click="emits('changeShow')">
       <scroll-view scroll-y>
           <view class="item" v-for="item in lyric" :key="item[0]">{{ item[1] }}</view>
       </scroll-view>
    </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { playerLyricApi } from '../../../services'

const props = defineProps([ 'id' ])
const lyric = ref<string[][]>()

const getLyric = async() => {
    try{
        let res = await playerLyricApi( props.id )
        let data = res.lrc.lyric.split('\n')
        lyric.value = data.map(v => v.slice(1).split(']'))
        console.log(lyric.value)
    }catch(e){
        console.log(e)
    }
}
getLyric();

const emits = defineEmits(['changeShow'])

</script>

<style lang="scss" scoped>
.lyric{
    width:100%;
    height:860rpx;
    padding:40rpx 0;
    scroll-view{
        height:780rpx;
        text-align: center;
        .item{
            min-height:30px;
            margin:10px 0;
            display:flex;
            justify-content: center;
            color:#eee;
            font-size: 20px;
        }
    }
}
</style>