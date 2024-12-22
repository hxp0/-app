<template>
<view>
    <LoginMine v-if="profile"/>
    <UnLoginMine v-else />
</view>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useUserStore } from '../../stores/userStore'
import LoginMine from './components/LoginMine.vue'
import UnLoginMine from './components/UnLoginMine.vue'
import { loginStatusApi } from '.././../services'
const userStore = useUserStore()
const profile = ref()
const getLoginStatus = async()=>{
    const res = await loginStatusApi()
    profile.value = res.data.profile
}
getLoginStatus()

</script>

<style lang="scss" scoped>

</style>