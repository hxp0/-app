
interface RequestParams {
    url: string
    data?: object
  }
<<<<<<< HEAD
  
=======
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




export const getBannerApi = () => {
    return request<RequestRes>({url:'https://zyxcl.xyz/music/api/dj/banner'})
}
export const getHomeApi = () => {
    return request<RequestHome>({url:'https://zyxcl.xyz/music/api/homepage/block/page'})
}

export const getDetailApi = (id:number) => {
  return request({url:`https://zyxcl.xyz/music/api/playlist/detail`,data:{id}})
}










>>>>>>> 2c8cfb47db4f7c13bf233ce79bdb746f5c32fb92
  // 封装请求接口的函数，统一管理接口
  export const request = <T>({ url, data }: RequestParams) => {
    return new Promise<T>((resolve, reject) => {
      uni.request({
        url,
        data,
        success: (res) => {
          resolve(res.data as T)
        },
        fail: reject,
      })
    })
  }
  

  
  export interface SearchHotItem {
    searchWord: string
    iconUrl: string
  }
  export interface SearchHotRes {
    code: number
    data: SearchHotItem[]
  }
  export const searchHotApi = () => {
    return request<SearchHotRes>({ url: 'https://zyxcl.xyz/music/api/search/hot/detail' })
  }
  
  export interface SearchSuggestItem {
    keyword: string
  }
  export interface SearchSuggestRes {
    code: number
    result: {
      allMatch: SearchSuggestItem[]
    }
  }
  export const searchSuggestApi = (keywords: string) => {
    return request<SearchSuggestRes>({
      url: 'https://zyxcl.xyz/music/api/search/suggest',
      data: {
        keywords,
        type: 'mobile'
      }
    })
  }
  
  export interface SearchResultItem {
    id: number
    name: string
    artists: {
      id: number
      name: string
      img1v1Url: string
    }[]
  }
  export interface SearchRes {
    code: number
    result: {
      hasMore: boolean
      songs: SearchResultItem[]
    }
  }
  export const searchApi = (keywords: string) => {
    return request<SearchRes>({
      url: 'https://zyxcl.xyz/music/api/search',
      data: {
        keywords
      }
    })
  }
export interface SearchDefaultRes {
    code: number
    data: {
        realkeyword: string
    }
  }
  export const searchDefaultApi = () => {
    return request<SearchDefaultRes>({url: 'https://zyxcl.xyz/music/api/search/default' })
  }
<<<<<<< HEAD
  
  export interface SongUrlItem {
    id: number
    url: string
  }
  export interface SongUrlList {
    code: number
    data:SongUrlItem[]
  }
  export const playerUrlApi = (id:string) => {
    return request<SongUrlList>({url: 'https://zyxcl.xyz/music/api/song/url' , 
      data:{
        id
      }
    })
  }

  export interface SongDetailItem {
    id: number
    al:{
      name:string
      picUrl: string
    }
    ar:{
      name:string
    }
  }
  export interface SongDetailList {
    code: number
    songs:SongDetailItem[]
  }
  export const playerDetailApi = (ids:string) => {
    return request<SongDetailList>({url: 'https://zyxcl.xyz/music/api/song/detail' , 
      data:{
        ids
      }
    })
  }
=======
export const CaptchaApi = (phone:number) => {
  return request({url: 'https://zyxcl.xyz/music/api/captcha/sent',
    data: {
      phone
    }
   })
}



  










>>>>>>> 2c8cfb47db4f7c13bf233ce79bdb746f5c32fb92
