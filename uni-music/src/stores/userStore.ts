import { defineStore } from "pinia"
import {loginStatusApi,userInfoApi,userPlaylistApi,logoutApi} from '../services'
import type{profileType,playlistType} from '../services'
import { ref } from "vue"
export const useUserStore = defineStore('userStore',()=>{
    const userCookie = ''
    const userInfo = ref<profileType>()
    const playList = ref<playlistType[]>([])
    const getUserInfo = async(id:number)=>{
        userInfoApi(id)
        .then(res=>{
            console.log('用户详情',res)
            userInfo.value = {
                ...res.profile
            }
            userInfo.value.level = res.level
            userInfo.value.listenSongs = res.listenSongs
            
        })
    }
    const getPlayList = async(id:number)=>{
        const res = await userPlaylistApi(id)
        playList.value = res.playlist
        console.log(res.playlist)
    }
    const getLoginStatus = async()=>{
        const res =  await loginStatusApi()
        if(res.data.profile){
            getUserInfo(res.data.profile.userId)
            getPlayList(res.data.profile.userId)
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
        playList,
        getLoginStatus,
        getLogout,
        getUserInfo
    }


})