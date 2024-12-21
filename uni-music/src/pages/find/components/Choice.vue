<template>
    <view class="choice">
        <swiper>
            <swiper-item v-for="item in banners" :key="item.bannerId">
                <image mode="widthFix" :src="item.pic"></image>
                <view class="text">{{ item.typeTitle }}</view>
            </swiper-item>
        </swiper>
        <uni-section title="甄选歌单" titleFontSize="20px"></uni-section>
        <scroll-view scroll-x>
            <view class="recommendList">
                <view class="item" v-for="item in recommend" :key="item.id">
                    <view style="height:120px;overflow: hidden;">
                        <image mode="widthFix" :src="item.picUrl"></image>
                    </view>
                    <view class="recText">{{ item.name }}</view>
                </view>
            </view> 
        </scroll-view>
    </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { findBannerApi , findRecommendApi } from '../../../services'
import type { FindBannerItem , FindRecommendItem } from '../../../services'

const banners = ref<FindBannerItem[]>()
const recommend = ref<FindRecommendItem[]>()

const getBanner = async()=>{
    const data = await findBannerApi()
    banners.value = data.banners;
    // console.log(data.banners)
}
getBanner()

const getRecommend = async()=>{
    const data = await findRecommendApi()
    recommend.value = data.result;
    console.log(data)
}
getRecommend()
</script>

<style lang="scss" scoped>
.choice{
    swiper{
        border-radius: 5px;
        height:268rpx;
        swiper-item{
            border-radius: 5px;
            position: relative;
            image{
                width:100%;
                border-radius: 5px;
            }
            .text{
                position: absolute;
                right:15px;
                bottom:10px;
                width:60px;
                height:20px;
                border-radius: 3px;;
                background-color: #fff;
                font-size:12px;
                text-align: center;
                line-height: 20px;
            }
        }
    }
    scroll-view{
        .recommendList{
            display:flex;
            flex-wrap: nowrap;
            .item{
                width:120px;
                margin-right:20px;
                flex-shrink: 0;
                image{
                    width:100%;
                    height:120px;
                    overflow: hidden;
                    border-radius: 3px;
                }
                .recText{
                    // display: -webkit-box;
                    // -webkit-line-clamp: 2;
                    // -webkit-box-orient: vertical;
                    max-height: 47px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
            }
        }
    }
}
</style>