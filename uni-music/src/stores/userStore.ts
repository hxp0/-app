import { defineStore } from "pinia"
import {loginStatusApi,userInfoApi,userAccountApi,userSubcountApi,logoutApi} from '../services'
import type{profileType} from '../services'
import { ref } from "vue"
export const useUserStore = defineStore('userStore',()=>{
    const userCookie = ''
    const userInfo = ref<profileType>()
    const getUserInfo = async(id:number)=>{
        userInfoApi(id)
        .then(res=>{
            console.log('用户详情',res)
            userInfo.value = {...res.profile}
        })
    }
    const getLoginStatus = async()=>{
        const res =  await loginStatusApi()
        if(res.data.profile){
            getUserInfo(res.data.profile.userId)
        }
    }
    // 退出登录
    const getLogout = async()=>{
        logoutApi()
        uni.removeStorageSync('curCookie')
        uni.showToast({
            title:'退出登录成功',
            icon:'none'
        })
    }
    return{
        userCookie,
        userInfo,
        getLoginStatus,
        getLogout,
        getUserInfo
    }


})