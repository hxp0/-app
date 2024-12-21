<template>
    <view class="find">
        <view class="nav">
            <view class="navLeft">left</view>
            <view class="navCenter">
                <view
                    v-for="(item , i) in navList"
                    :key="item"
                    :class="{active: activeIndex === i}"
                    @click="activeIndex = i"
                >{{item}}</view>
            </view>
            <view class="navRight">Right</view>
        </view>
        <Music v-if="activeIndex === 0"/>
        <Podcast v-else-if="activeIndex === 1"/>
        <AudioBook v-else-if="activeIndex === 2"/>
    </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Music from './components/Music.vue'
import Podcast from './components/Podcast.vue'
import AudioBook from './components/AudioBook.vue'
import Comment from '../../components/comment/Comment.vue'

const navList = [ '音乐' , '播客' , '听书' ]
const activeIndex = ref(0)
const id = ref(2146688401)
</script>

<style lang="scss" scoped>
.find{
    padding:0 15px;
    .nav{
        height:50px;
        display:flex;
        justify-content: space-between;
        align-items: center;
        .navCenter{
            display:flex;
            &>view{
                margin:0 6px;
                font-size:20px;
                position: relative;
                color:#92959C;
            }
            &>view::after{
                content: '';
                position: absolute;
                bottom:-12px;
                left:50%;
                transform: translateX(-50%);
                width:18px;
                height:4px;
                text-align: center;
                background-color: var(--bgColor);
                border-radius: 2px;
            }
            .active{
                color:#2C304E;
            }
            .active::after{
                background-color: var(--bgRed);
            }
        }
    }
    // #FD2948
}
</style>