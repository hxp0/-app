<script setup lang="ts">
import { ref } from 'vue'
import {CaptchaApi} from '../../../services'
const phone = ref<number>()
const captcha = ref<string>('')
let timer
const getCaptcha = async()=>{
  if(phone.value){
    if(phone.value.toString().length !== 11){
      return uni.showToast({
        title: '手机号格式错误',
        icon: 'none'
      })
    }
    const res = await CaptchaApi(phone.value)
    console.log(res)
  }
}
const submit = ()=>{
  console.log('submit')
}

</script>

<template>
<view class="form">
    <view class="row">
        <input type="tel" placeholder="请输入手机号" v-model.trim="phone">
    </view>
    <view class="row captcha">
      <input type="text" placeholder="请输入验证码" v-model="captcha">
      <button type="primary" @click="getCaptcha" >获取验证码</button>
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
