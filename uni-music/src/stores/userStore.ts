import { defineStore } from "pinia"
import {loginStatusApi,userInfoApi,userAccountApi,userSubcountApi,logoutApi} from '../services'
export const useUserStore = defineStore('userStore',()=>{
    const userCookie = ''
    const getUserInfo = async(id:number)=>{
        userInfoApi(id)
        .then(res=>{
            console.log('用户详情',res)
        })
    }
    const getLoginStatus = async()=>{
        return await loginStatusApi()
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
        getLoginStatus,
        getLogout
    }


})