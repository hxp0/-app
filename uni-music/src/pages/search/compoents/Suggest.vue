<script setup lang="ts">
import  type { SearchSuggestItem } from '../../../services'
interface Props {
    list:SearchSuggestItem[]
}
const props = defineProps<Props>()
<<<<<<< HEAD

=======
const emits = defineEmits(['changeValue'])
>>>>>>> 2c8cfb47db4f7c13bf233ce79bdb746f5c32fb92
</script>

<template>
<view class="suggest">
<<<<<<< HEAD
    <view v-for="item in props.list" :key="item.keyword" class="item">
=======
    <view v-for="item in props.list" :key="item.keyword" class="item" @click="emits('changeValue',item.keyword)">
>>>>>>> 2c8cfb47db4f7c13bf233ce79bdb746f5c32fb92
        <uni-icons type="search" size="20" color="#eee" class="search"></uni-icons>
        {{ item.keyword }}
    </view>
</view>

</template>

<style lang="scss" scoped>
.suggest{
    width: 100%;
<<<<<<< HEAD
=======
    font-family: '楷体';
>>>>>>> 2c8cfb47db4f7c13bf233ce79bdb746f5c32fb92
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
