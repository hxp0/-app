<script setup>
import { getSettingApi } from '../../../services'
import { useUserStore } from '@/stores/userStore';
// const goDetail = () => {
//     // const res = await getSettingApi() 
//     // console.log(res)
//     // uni.navigateTo({
//     //     url:'/Setting'
//     // })
// }
// goDetail()

const store = useUserStore()
const onClick = (e) => {
    console.log('执行click事件', e.data)
    // store.goSettingApi()
    uni.navigateTo({
        url:'/pages/setting/Setting'
    })
}
const goLoginout = () => {
    store.getLogout()
}

</script>

<template>
    <view class="box">
        <uni-list-chat :avatar-circle="true" :title="store.userInfo?.nickname" :avatar="store.userInfo.avatarUrl" class="Info">
            <uni-icons type="scan" color="#999" size="18"></uni-icons>
        </uni-list-chat>
        <view class="item">
            <uni-list-item showArrow title="双人空间" rightText="超多人都在玩"></uni-list-item>
            <uni-list-item showArrow title="会员已过期" rightText="右侧文字"></uni-list-item>
        </view>
        <view class="item">
            <uni-list-item showArrow title="免费听VIP歌曲" rightText="一键开启"></uni-list-item>
            <uni-list-item showArrow title="我的金币" rightText="领免费会员"></uni-list-item>
        </view>
        <view class="item">
            <uni-list-item showArrow title="我的消息"></uni-list-item>
            <uni-list-item showArrow title="云贝中心" rightText="免费兑换黑胶VIP"></uni-list-item>
            <uni-list-item showArrow title="徽章中心" rightText="听歌领圣诞限定徽章"></uni-list-item>
            <uni-list-item showArrow title="设置"  clickable @click="onClick"></uni-list-item>
            <uni-list-item showArrow title="退出登录"  clickable @click="goLoginout"></uni-list-item>
        </view>
    </view>
</template>

<style lang="scss" scoped>
.box{
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #eee;
    .Info{
        line-height: 40px;
    }
    .item{
        flex: 1;
        margin-top: 10px;
    }
}



</style>