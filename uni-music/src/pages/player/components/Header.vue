<template>
    <view class="header">
        <view class="left iconfont icon--xiangxiajiantou"></view>
        <view class="center" ref="center">{{ title }}</view>
        <view class="right iconfont icon-fasong01"></view>
    </view>
</template>

<script setup lang="ts">

const props = defineProps([ 'title' ])

</script>

<style lang="scss" scoped>
.header{
    height:50px;
    // background:darkred;
    padding:0 15px;
    display:flex;
    color:#eee;
    justify-content: space-between;
    align-items: center;
    .center{
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
}
</style>