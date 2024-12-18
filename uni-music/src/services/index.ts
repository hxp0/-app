
interface RequestParams {
    url: string
    data?: object
  }
  
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