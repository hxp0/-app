<template>
    <view class="find">
        <view class="nav">
            <view class="navLeft">left</view>
            <view class="navCenter">
                <view>音乐</view>
                <view>播客</view>
                <view>听书</view>
            </view>
            <view class="navRight">Right</view>
        </view>
    </view>
</template>

<script setup lang="ts">

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
            }
        }
    }
}
</style>