<template>
<view class="content">
    <view class="header">
        <uni-icons type="bars" size="20" color="#fff"></uni-icons>
        <view>
            <uni-icons type="search" size="20" color="#fff" class="search" @click="goSearch"></uni-icons>
            <uni-icons type="more-filled" size="20" color="#fff"></uni-icons>
        </view>
    </view>
    <view class="top"></view>
</view> 
</template>

<script setup lang="ts">
const goSearch = ()=>{
    uni.navigateTo({
        url: '/pages/search/Search'
    })
}
</script>

<style lang="scss" scoped>
.content{
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
    position: relative;
}
::v-deep .header{
    width: 100%;
    height: 40px;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    view{
        padding: 10px;
        .search{
        margin-right: 10px;
       }

    }
}
.top{
    width: 100%;
    height: 250px;
    background-color: #4e1414;
}
</style>