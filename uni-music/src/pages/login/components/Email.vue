<script setup lang="ts">
import { emailApi } from '../../../services'
import { ref } from 'vue';
const email = ref<string>('')
const password = ref<string>('')
const reg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
const emailLogin = async()=>{
    const res = await emailApi(email.value,password.value)
    console.log(res)
    if(res.code = 200){
        uni.showToast({
            title:'登录成功',
            icon:'success'
        })
        uni.switchTab({
            url:'/pages/index/index'
        })
        uni.setStorageSync('curCookie',res.cookie)
    }else{
        uni.showToast({
            title:res.message,
            icon:'error'
        })
    }
}
const submit = ()=>{
    if(email.value.length === 0 && password.value.length === 0){
        uni.showToast({
            title:'请输入邮箱或者密码',
            icon:'error'
        })
    }else{
        if(reg.test(email.value)){
            emailLogin()
        }else{
            uni.showToast({
                title:'邮箱格式错误，请输入正确的邮箱',
                icon:'error'
            })
        }
    }
}


</script>

<template>
<view class="form">
    <view class="row">
        <input type="email" placeholder="请输入邮箱" v-model="email">
    </view>
    <view class="row captcha">
      <input type="password" placeholder="请输入密码" v-model="password">
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

</style>
