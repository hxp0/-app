<script setup lang="ts">
import  type { SearchResultItem } from '../../../services'
import { ref } from 'vue'
interface Props {
    list:SearchResultItem[]
}
const props = defineProps<Props>()
const tabsList = ref(['综合','单曲','歌单','播客','歌手','视频','歌词','专辑','用户'])
const activeCur = ref(0)
const changeActive = (index:number)=>{
    activeCur.value = index
}
</script>

<template>
    <view class="tabs">
        <view></view>
        <view v-for="(item,index) in tabsList" :key="item" @click="changeActive(index)" :class="['item',{active:activeCur === index}]">
            {{ item }}
        </view>
    </view>
    <view class="content">
        <view class="result" v-if="activeCur===0">
            <view v-for="item in props.list" :key="item.id" class="item">
                {{ item.name }}
            </view>
        </view>
    </view>

</template>

<style lang="scss" scoped>
.tabs{
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    font-weight: bold;
    color: #333;
    font-family: '楷体';
    border-bottom: 1px solid #eee;
    overflow: auto;
    padding: 0 10px;
    .item{
        height: 100%;
        margin-right: 10px;
        text-align: center;
        line-height: 40px;
        border-bottom: 2px solid transparent;
        flex-shrink: 0;
        &:last-child{
            margin-right: 0;
        }
        padding: 0 10px;
        &.active{
            color: red;
            border-bottom: 2px solid red;
        }
    }
}
.tabs::-webkit-scrollbar{
    display: none;
}
.result{
    width: 100%;
    font-family: '楷体';
    .item{
        width: 100%;
        height: 50px;
        line-height: 50px;
        font-size: 14px;
        color: #333;
        border-bottom: 1px dashed #eee;
        padding: 0 10px;
    }
}

</style>
