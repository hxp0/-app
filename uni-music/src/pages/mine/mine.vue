<template>
<LoginMine v-if="profile"/>
<UnLoginMine v-else />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useUserStore } from '../../stores/userStore'
import LoginMine from './components/LoginMine.vue'
import UnLoginMine from './components/UnLoginMine.vue'
import { loginStatusApi } from '.././../services'
const userStore = useUserStore()
const profile = ref()
loginStatusApi()
.then(res=>{
    profile.value = res.data.profile
})

</script>

<style lang="scss" scoped>

</style>