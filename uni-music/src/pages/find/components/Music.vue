<template>
    <view class="music">
        <view class="tits">
            <view
                v-for="(item , i) in titList"
                :key="item"
                :class="{active: activeIndex === i}"
                @click="activeIndex = i"
            >{{ item }}</view>
        </view>
        <Choice v-if="activeIndex === 0"/>
    </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Choice from '../components/Choice.vue'

const titList = [ '精选' , '排行榜' , 'VIP' , '歌单' , '助眠' ]
const activeIndex = ref(0)


</script>

<style lang="scss" scoped>
.tits{
    height:40px;
    margin:10px 0;
    display:flex;
    justify-content: center;
    align-items: center;
    &>view{
        width:calc( 100vw / 5 - 10px );
        margin:0 5px;
        padding:5px;
        text-align: center;
        border-radius: 20px;
    }
    .active{
        background:#eee;
    }
}
</style>