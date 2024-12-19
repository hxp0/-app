<script setup lang="ts">
import { ref } from 'vue'
import {CaptchaApi,CaptchaLoginApi,loginStatusApi,isLoginApi,logoutApi} from '../../../services'
import { useUserStore } from '../../../stores/userStore'
const userStore = useUserStore()
const phone = ref<number>()
const captcha = ref<string>('')
let timer:any
const captchaVal = ref<string | number>('获取验证码')
const countTime = ref<number>(10)
const isTimer = ref(false)
// 获取验证码
const getCaptcha = async()=>{
  if(phone.value){
    if(phone.value.toString().length !== 11){
      return uni.showToast({
        title: '手机号格式错误',
        icon: 'error'
      })
    }
    timer = setInterval(()=>{
      countTime.value--
      captchaVal.value = countTime.value
      isTimer.value = true
      if(countTime.value === 0 ){
        clearInterval(timer)
        countTime.value = 10
        captchaVal.value = '获取验证码'
        isTimer.value = false
        return
      }
    },1000)
    const res = await CaptchaApi(phone.value)
    if(res.code === 200){
      uni.showToast({
        title:'获取验证码成功',
        icon:'success'
      })
    }else{
      uni.showToast({
        title:'获取验证码失败',
        icon:'none'
      })
    }
  }else{
    uni.showToast({
      title:'请输入手机号',
      icon:'none'
    })
  }
}
const submit = async()=>{
  if(phone.value && captcha.value){
    const res = await CaptchaLoginApi(phone.value,captcha.value)
    console.log(res)
    if(res.code === 200 ){
      uni.showToast({
        title:'登录成功',
        icon:'success'
      })
     setTimeout(() => {
      uni.switchTab({
        url:'/pages/index/index'
      })
     }, 2000);
      uni.setStorageSync('curCookie',res.cookie)
      userStore.getLoginStatus()
    }else{
      uni.showToast({
        title:res.message,
        icon:'error'
      })
    }
  }else{
    uni.showToast({
      title:'请输入手机号或者验证码',
      icon:'error'
    })
  }
}
// 用户信息
// userStore.getLoginStatus()
// logoutApi()
// .then(res=>{
//   console.log(res)
// })
// isLoginApi(13193012148)
// .then(res=>{
//   console.log(res)
// })
</script>

<template>
<view class="form">
    <view class="row">
        <input type="tel" placeholder="请输入手机号" v-model.trim="phone">
    </view>
    <view class="row captcha">
      <input type="text" placeholder="请输入验证码" v-model="captcha">
      <button type="primary" @click="getCaptcha" :disabled="isTimer">{{captchaVal}}</button>
    </view>
    <view class="row">
        <button type="primary" @click="submit">登录</button>
    </view>
  </view>

</template>

<style lang="scss" scoped>
.form {
  .row {
    margin-bottom: 20rpx;
  }
  input {
    outline: none;
    height: 80rpx;
    width: 100%;
    border-radius: 10rpx;
    border: 1rpx solid #dddddd;
    padding: 0 20rpx;
    box-sizing: border-box;
  }
  button {
    width: 100%;
    height: 80rpx;
    line-height: 80rpx;
    color: #ffffff;
    border: none;
    border-radius: 10rpx;
    font-size: 14px;
  }
}
.captcha {
  display: flex;
  input {
    flex: 1;
  }
  button {
    width: 200rpx;
    margin-left: 20rpx;
    &:disabled {
      opacity: 0.7;
    }
  }
}

</style>
