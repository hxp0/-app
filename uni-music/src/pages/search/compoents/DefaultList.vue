<script setup lang="ts">
<<<<<<< HEAD


</script>

<template>
默认列表
=======
import  type { SearchHotItem } from '../../../services'
interface Props {
    list:SearchHotItem[]
    historyList:string[]
}
const props = defineProps<Props>()
const emits = defineEmits(['changeHistory','changeValue'])
const del = ()=>{
    uni.showModal({
        title: '提示',
        content: '是否清空历史记录',
        success:(res)=>{
            if(res.confirm){
                emits('changeHistory')
            }
        }
    })
}
</script>

<template>
    <view class="history" v-if="props.historyList.length !== 0">
        <view class="title">
            <text>搜索历史</text>
            <uni-icons type="trash" size="20" color="#ccc" @click="del"></uni-icons>
        </view>
        <view class="historyList">
             <view v-for="item in props.historyList" :key="item" class="item" @click="emits('changeValue',item)">{{ item }}</view>
        </view>
    </view>
<view class="hotList">
    <view class="title">
        <text>热搜榜</text>
    </view>
    <view v-for="(item,index) in props.list" :key="item.searchWord" class="item" @click="emits('changeValue',item.searchWord)">
        <text>{{ index+1 }}</text>
        {{ item.searchWord }}
    </view>
</view>
>>>>>>> 2c8cfb47db4f7c13bf233ce79bdb746f5c32fb92

</template>

<style lang="scss" scoped>
<<<<<<< HEAD

=======
.history{
    width: 100%;
    margin:10px 0 ;
    font-family: '楷体';
    background-color: #f7f9fd;
    padding: 10px;
    .title{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 14px;
        font-weight: bold;
        // padding: 10px; 
    }
    .historyList{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        margin-top: 10px;
        .item{
            padding: 5px 16px;
            background-color: #fff;
            border-radius: 20px;
            margin-right: 10px;
            margin-bottom: 10px;
            font-size: 14px;
        }
    }
}
.hotList{
    width: 100%;
    font-family: '楷体';
    background-color: #fff;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    padding: 0 20px;
    .title{
        line-height: 40px;
        border-bottom: 1px solid #eee;
        font-size: 18px;
        font-weight: bold;
    }
    .item{
        width: 100%;
        height: 40px;
        line-height: 40px;
        font-size: 14px;
        color: #333;
        padding: 0 10px;
    }
}
>>>>>>> 2c8cfb47db4f7c13bf233ce79bdb746f5c32fb92

</style>
