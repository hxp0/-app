<script setup lang="ts">
import { ref } from 'vue'
import { qrKeyApi,qrCreateApi,qrCheckApi } from '../../../services'
import { useUserStore } from '../../../stores/userStore'
import { onHide } from '@dcloudio/uni-app';
const userStore = useUserStore()
const qrKey = ref('')
const qrImgurl = ref('')
const resCode = ref<number>()
const statusStr = ref('')
let timer:any
const isResCode = async()=>{
    const res = await qrCheckApi(qrKey.value)
    console.log(res)
    if(res.code === 801){
        // console.log(res.code)
    }else if(res.code === 802){
        statusStr.value = '扫码成功，请在手机上确认'
        console.log(res.code)
    }else if(res.code === 800){
        statusStr.value = '二维码已过期，请刷新'
        clearInterval(timer)
    }else if(res.code === 803){
        console.log(res.code)
        clearInterval(timer)
        uni.showToast({
            title:'登录成功',
            icon:'success'
        })
        uni.switchTab({
            url:'/pages/index/index'
        })
        uni.setStorageSync('curCookie',res.cookie)
        // userStore.getLoginStatus()
    }else{
        console.log(res)
    }
}
const getQr = async()=>{
    const res = await qrKeyApi()
    qrKey.value = res.data.unikey
    const resQr = await qrCreateApi(qrKey.value)
    qrImgurl.value = resQr.data.qrimg
    timer = setInterval(()=>{
        isResCode()
    },5000)
}
getQr()
const refash = ()=>{
    statusStr.value = ''
    clearInterval(timer)
    getQr()
}
onHide(()=>{
    clearInterval(timer)
})
</script>

<template>
<view class="qr-wrap">
    <image  mode="widthFix" :src="qrImgurl"></image>
    <view class="qr-code" v-if="statusStr.length > 0" @click="refash">{{ statusStr }}</view>
  </view>

</template>

<style lang="scss" scoped>
.qr-wrap {
  position: relative;
  image {
    max-width: 500rpx;
    margin: 0 auto;
    display: block;
  }
}
.qr-code {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba($color: #ffffff, $alpha: .8);
  text-align: center;
  line-height: 250px;
  font-size: 16px;
}

</style>
