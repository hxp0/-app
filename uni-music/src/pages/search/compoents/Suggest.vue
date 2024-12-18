<script setup lang="ts">
import  type { SearchSuggestItem } from '../../../services'
interface Props {
    list:SearchSuggestItem[]
}
const props = defineProps<Props>()
const emits = defineEmits(['changeValue'])
</script>

<template>
<view class="suggest">
    <view v-for="item in props.list" :key="item.keyword" class="item" @click="emits('changeValue',item.keyword)">
        <uni-icons type="search" size="20" color="#eee" class="search"></uni-icons>
        {{ item.keyword }}
    </view>
</view>

</template>

<style lang="scss" scoped>
.suggest{
    width: 100%;
    font-family: '楷体';
    .item{
        width: 100%;
        height: 40px;
        line-height: 40px;
        font-size: 14px;
        color: #333;
        border-bottom: 1px solid #eee;
        padding: 0 10px;
    }
}

</style>
