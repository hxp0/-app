// 请求轮播图
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



// 请求首页数据
export enum ShowType {
  HOMEPAGE_SLIDE_PLAYLIST = 'HOMEPAGE_SLIDE_PLAYLIST',
  HOMEPAGE_SLIDE_SONGLIST_ALIGN = 'HOMEPAGE_SLIDE_SONGLIST_ALIGN'
}
interface Name {
  name:string
}
export interface Resource {
  resourceId:string
  resourceExtInfo:{
    artists:Name[]
    song:{
      al:{
        name:string
        picUrl:string
      }
    }
  }
}
export interface Creative {
  creativeType:string
  creativeId:string
  resources:Resource[]
  uiElement:{
    image:{
      imageUrl:string
    }
    mainTitle:{
      title:string
    }
  }
}

export interface Block {
  blockCode:string
  showType:string
  creatives:Creative
  resourceIdList:string
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



export interface RequestSongList{
  name:string
  no:number
  trackCount:number
  id:number
  ar:{name:string}[]
}

// 请求详情页
export interface Id {
  id:number
}
export interface RequestPlaylist {
  coverImgUrl:string
  description:string
  name:string
  commentCount:number
  shareCount:number
  subscribedCount:number
  trackCount:number
  trackIds:Id[]
  creator:{
    avatarUrl:string
    nickname:string
  }
  tracks:RequestSongList[]
}

export interface RequestDetail {
  code:number
  playlist:RequestPlaylist
}

// 请求评论
export interface Comments {
  commentId:number
  content:string
  user:{
    avatarUrl:string
    nickname:string
  }
}
export interface RequestComment {
  code:number
  comments:Comments[]
  hotComments:Comments[]
}

// 设置接口


export const getBannerApi = () => {
  return request<RequestRes>({url:'https://zyxcl.xyz/music/api/dj/banner'})
}
export const getHomeApi = () => {
  return request<RequestHome>({url:'https://zyxcl.xyz/music/api/homepage/block/page'})
}

export const getDetailApi = (id:number) => {
  return request<RequestDetail>({url:'https://zyxcl.xyz/music/api/playlist/detail',data:{id}})
}
export const getCommentApi = (id:number) => {
  return request<RequestComment>({url:'https://zyxcl.xyz/music/api/comment/playlist',data:{id}})
}
export const getSettingApi = () => {
  return request({url:'https://zyxcl.xyz/music/api/setting'})
}










// 封装请求接口的函数，统一管理接口
export const request = <T>({ url, data }: RequestParams) => {
  const cookie = uni.getStorageSync('curCookie') || ''
  const cookieData = cookie ? { cookie } : {}
  return new Promise<T>((resolve, reject) => {
    uni.request({
      url,
      data:{
        ...data,
        ...cookieData
      },
      withCredentials: true,
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


export interface SongUrlItem {
  id: number
  url: string
  time: number
}
export interface SongUrlList {
  code: number
  data:SongUrlItem[]
}
export const playerUrlApi = (id:number | number[]) => {
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
  alia: string[]
  ar:{
    name:string
  }[]
}
export interface SongDetailList {
  code: number
  songs:SongDetailItem[]
}
export const playerDetailApi = (ids:number | number[]) => {
  return request<SongDetailList>({url: 'https://zyxcl.xyz/music/api/song/detail' , 
    data:{
      ids
    }
  })
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
  cookie?:string
}
// 校验手机号是否注册
export const isLoginApi = (phone:number)=>{
  return request({url:'https://zyxcl.xyz/music/api/cellphone/existence/check',
    data:{
      phone
    }
  })
}
// 校验手机号和验证码是否正确接口
interface CaptchaVerifyType {
  code:number
  data:boolean
  message?:string
}
export const CaptchaVerifyApi = (phone:number,captcha:string) => {
  return request<CaptchaVerifyType>({url: 'https://zyxcl.xyz/music/api/captcha/verify',
    data: {
      phone,
      captcha
    }
  })
}

// 手机登录校验接口
export const CaptchaLoginApi = (phone:number,captcha:string) => {
  return request<captchaLoginType>({url: 'https://zyxcl.xyz/music/api/login/cellphone',
    data: {
      phone,
      captcha
    }
  })
}
// 二维码登录
// 二维码 key 生成接口
interface qrKeyType {
  code:number
  data:{
    code:number
    unikey:string
  }
}
export const qrKeyApi = ()=>{
  return request<qrKeyType>({url:'https://zyxcl.xyz/music/api/login/qr/key'})
}

// 二维码生成接口
interface qrCreateType {
  code:number
  data:{
    qrimg:string
    qrurl:string
  }
}
export const qrCreateApi = (key:string)=>{
  return request<qrCreateType>({url:'https://zyxcl.xyz/music/api/login/qr/create',
    data:{
      key,
      qrimg:true
    }
  })
}
// 二维码检测扫码状态接口
interface qrCheckType {
  code:number
  cookie:string
  message:string
}
export const qrCheckApi = (key:string)=>{
  return request<qrCheckType>({url:'https://zyxcl.xyz/music/api//login/qr/check',
    data:{
      key
      
    }
  })
}
// 邮箱登录
interface emailType {
  code:number
  cookie:string
  message:string
}
export const emailApi = (email:string,password:string)=>{
  return request<emailType>({url:'https://zyxcl.xyz/music/api//login',
    data:{
      email,
      password,
      md5_password: 'md5'
      
    }
  })
}

interface loginStatusType {
  data:{
    code:number
    account:{}
    profile:profileType | null
  }
}
export interface profileType{
  nickname:string
  userId:number
  avatarUrl:string
  backgroundUrl:string
  birthday:number
  city:number
  createTime:number
  inBlacklist:boolean
}
// 登录状态校验接口
export const loginStatusApi = ()=>{
  return request<loginStatusType>({url:'https://zyxcl.xyz/music/api/login/status',})
}
interface userInfoType {
  profile:profileType
}
// 获取用户详情接口
export const userInfoApi = (id:number)=>{
  return request<userInfoType>({url:'https://zyxcl.xyz/music/api/user/detail',
    data:{
      uid:id
    }
  })
}
// 获取账号信息
export const userAccountApi = ()=>{
  return request({url:'https://zyxcl.xyz/music/api/user/account'})
}
// 获取用户信息 , 歌单，收藏，mv, dj 数量
export const userSubcountApi = ()=>{
  return request({url:'https://zyxcl.xyz/music/api/user/subcount'})
}
// 获取用户歌单
export const userPlaylistApi = (id:number)=>{
  return request({url:'https://zyxcl.xyz/music/api/user/playlist',
    data:{
      uid:id
    }
  })
}
// 获取用户播放记录
export const userRecordApi = (id:number)=>{
  return request({url:'https://zyxcl.xyz/music/api/user/record',
    data:{
      uid:id
    }
  })
}
// 退出登录
export const logoutApi = ()=>{
  return request({url:'https://zyxcl.xyz/music/api/logout'})
}





