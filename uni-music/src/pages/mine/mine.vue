<template>
<LoginMine v-if="resCode === 200" :rescode="resCode" @changeRescode="getchangeRescode"/>
<UnLoginMine v-else :rescode="resCode" @changeRescode="getchangeRescode"/>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useUserStore } from '../../stores/userStore'
import LoginMine from './components/LoginMine.vue'
import UnLoginMine from './components/UnLoginMine.vue'
import { loginStatusApi } from '.././../services'
const userStore = useUserStore()
const resCode = ref<number>()
loginStatusApi()
.then(res=>{
    resCode.value = res.data.code
})
const getchangeRescode = (val:number)=>{
    resCode.value = val
}
</script>

<style lang="scss" scoped>

</style>