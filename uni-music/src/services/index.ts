
export interface RequestParams {
    url:string,
    data?:object
}
export interface RequestList {
    targetId:number
    pic:string
    typeTitle:string
}
export interface RequestRes {
    code:number
    data:RequestList[]
}





export enum ShowType {
    HOMEPAGE_SLIDE_PLAYLIST = 'HOMEPAGE_SLIDE_PLAYLIST',
    HOMEPAGE_SLIDE_SONGLIST_ALIGN = 'HOMEPAGE_SLIDE_SONGLIST_ALIGN'
}
export interface Block {
    blockCode:string
    showType:string
    creatives:{
        creativeType:string
        resources:{
            resourceId:string
            uiElement:{
                image:{
                    imageUrl:string
                }
                mainTitle:{
                    title:string
                }
            }
        }
    }
    uiElement:{
        subTitle:{
            title:string
        }
    }
}
export interface RequestHome {
    code:number
    data:{
        blocks:Block[]
    }
}



export const request = <T>({url,data}:RequestParams) => {
    return new Promise<T>((resolve,reject) => {
        uni.request({
            url,
            data,
            success:(res) =>{
                resolve(res.data as T)
            },
            fail:reject
        })
    })
}



export const getBannerApi = () => {
    return request<RequestRes>({url:'https://zyxcl.xyz/music/api/dj/banner'})
}
export const getHomeApi = () => {
    return request<RequestHome>({url:'https://zyxcl.xyz/music/api/homepage/block/page'})
}


