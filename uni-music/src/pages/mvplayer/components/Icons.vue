<script setup lang="ts">
import { ref, watch } from 'vue';
import { mvDetailInfoApi,mvSubApi,mvSubListApi,resourceLikeApi } from '../../../services'
import type { mvDetailInfo1Type } from '../../../services'
interface propsType {
    mvid:number
    title:string
}
const props = defineProps<propsType>()
const mvInfo = ref<mvDetailInfo1Type>()
const likedCount = ref<number>(0)
const isMvSub = ref()
const isLiked = ref()
// 获取mv点赞，评论信息
const getMvInfo = async()=>{
    const res = await mvDetailInfoApi(props.mvid)
    mvInfo.value = res
    likedCount.value = res.likedCount
    isLiked.value = res.liked === true ? 0 : 1
    const res1 = await mvSubListApi(props.mvid)
    // console.log('收藏mv列表',res1.data)
    const item = res1.data.find(v=>v.title === props.title )
    isMvSub.value = item ? 0 : 1
    // console.log('进入页面时ismvsub的值',isMvSub.value)
}
getMvInfo()
const changeIsMvSub = async()=>{
    // console.log('执行点击事件时ismvsub的值',isMvSub.value)
    if(isMvSub.value === 1){
        const res = await mvSubApi(props.mvid,isMvSub.value)
        if(res.code === 200){
            isMvSub.value = res.message === '取消收藏成功' ? 1 : 0
            uni.showToast({
                title:res.message,
                icon:'none'
        })
    }
    }else{
        uni.showModal({
            title: '提示',
            content: '是否取消收藏？',
            success: async function (res) {
                if (res.confirm) {
                    const res = await mvSubApi(props.mvid,isMvSub.value)
                    if(res.code === 200){
                        isMvSub.value = res.message === '取消收藏成功' ? 1 : 0
                        uni.showToast({
                            title:res.message,
                            icon:'none'
                        })
                    }
                } 
            }
        })
    }
}
const changeHand = async()=>{
    const res = await resourceLikeApi(1,isLiked.value,props.mvid)
    if(res.code === 200 ){
        getMvInfo()
    }
    console.log(res)
}
</script>

<template>
<view class="icons" v-if="mvInfo">
    <view class="item" @click="changeIsMvSub">
        <uni-icons :type="isMvSub === 1?'folder-add-filled' : 'star-filled' " size="30" color="#666"></uni-icons>
        <view class="text">收藏</view>
    </view>
    <view class="item">
        <uni-icons type="redo-filled" size="30"  color="#666"></uni-icons>
        <view class="text">{{ mvInfo.shareCount>10000? (mvInfo.shareCount/10000).toFixed(1)+'万' : mvInfo.shareCount }}</view>
    </view>
    <view class="item">
        <uni-icons type="chat-filled" size="30"  color="#666"></uni-icons>
        <view class="text">{{mvInfo.commentCount>10000? (mvInfo.commentCount/10000).toFixed(1)+'万' : mvInfo.commentCount}}</view>
    </view>
    <view class="item" @click="changeHand">
        <uni-icons type="hand-up-filled" size="30"  :color="isLiked === 0 ?'#ff0000':'#666'"></uni-icons>
        <view class="text">{{ likedCount > 10000 ?(likedCount/10000).toFixed(1)+'万': likedCount  }}</view>
    </view>
</view>

</template>

<style lang="scss" scoped>
.icons{
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .item{
        flex: 1;
        display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        .text{
            color: #666;
            font-size: 12px;
            
        }
    }
    
}

</style>
