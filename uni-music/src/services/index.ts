
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
// 热搜关键词接口
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
// 搜索建议接口
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
// 搜索结果接口
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
// 默认搜索关键词接口
export const searchDefaultApi = () => {
  return request<SearchDefaultRes>({url: 'https://zyxcl.xyz/music/api/search/default' })
}
interface captchaType {
  code:number
  data:boolean
}
// 获取验证码接口
export const CaptchaApi = (phone:number) => {
  return request<captchaType>({url: 'https://zyxcl.xyz/music/api/captcha/sent',
    data: {
      phone
    }
   })
}
interface captchaLoginType {
  code:number
  message:string
  msg?:string
}
// 登录校验接口
export const CaptchaLoginApi = (phone:number,captcha:string) => {
  return request<captchaLoginType>({url: 'https://zyxcl.xyz/music/api/login/cellphone',
    data: {
      phone,
      captcha
    }
   })
}
// 登录状态
export const loginStatusApi = () => {
  return request({url: 'https://zyxcl.xyz/music/api/login/status'})
}
// 退出登录
export const logoutApi = () => {
  return request({url: 'https://zyxcl.xyz/music/api/logout'})
}

  
  