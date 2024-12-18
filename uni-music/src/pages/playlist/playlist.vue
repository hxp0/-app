<script setup lang="ts">
    import { nextTick, ref } from 'vue'
    import { getDetailApi } from '../../services';
    import type { RequestPlaylist} from '../../services'
    import { onLoad } from '@dcloudio/uni-app';


    const id = ref()
    const playList = ref<RequestPlaylist>()

    // const format = (data:{name:string}[]) => {
    //     return data.map(v=>v.name).join('/')
    // }

    const getDetail = async (id:number) => {
        try {
            const res = await getDetailApi(id)
            console.log(res)
            playList.value = res.playlist
        }catch(e) {
            console.log(e)
        }

    }
    onLoad ((option) => {
	    id.value = option?.id
        // console.log(id)  
        getDetail(option?.id)
    })
</script>

<template>
    <view class="header">
        <view class="bg" :style="{backgroundImage:`url(${playList?.coverImgUrl})`}" >
            <view class="loading"></view>
        </view>
        <view class="header-content">
            <view class="info">
                <image :src="playList?.coverImgUrl" mode="widthFix"></image>
                <view class="header-right">
                    <view class="title">{{ playList?.name }}</view>
                    <view class="artist">
                        <image class="img" :src="playList?.creator.avatarUrl"></image>
                        <view>{{ playList?.creator.nickname }}</view>
                    </view>
                </view>
            </view>
            <view class="bot">{{ playList?.description }}</view>
        </view>
        <view class="btns">
            <view class="btn">
                <uni-icons type="redo-filled" size="30"></uni-icons>
                {{ playList?.shareCount }}
            </view>
            <view class="btn">
                <uni-icons type="chat-filled" size="30"></uni-icons>
                {{ playList?.commentCount }}
            </view>
            <view class="btn">
                <uni-icons type="star-filled" size="30"></uni-icons>
                {{ playList?.subscribedCount }}
            </view>
        </view>
    </view>
    <view>
        <view class="player">
            <uni-icons custom-prefix="iconfont" type="icon-zantingbofang1" size="30" color="red"></uni-icons>
            <text size="14">播放全部</text>
            <view>({{ playList?.trackCount }})</view>
        </view>
        <view class="item">
            <view class="no">
                <!-- {{ playList?.tracks }} -->
            </view>
            <uni-list-item
            v-for="(item,index) in playList?.tracks"
            :title="item.name"
            :note="item.ar.map(v => v.name).join('/')" 
            ellipsis="2"
            showArrow
            :showBadge="true"
            :badgeText="index + 1"
            >
            </uni-list-item>
        </view>

    </view>
</template>

<style lang="scss" scoped>
.header{
    overflow: hidden;
    position: relative;
    // width: 100%;
}
.bg{
    width: 100%;
    height: 300px;
    background-size: cover;
    filter: blur(25px);
}
.loading{
    height: 100%;
    background-color: rgba(0,0,0,.6);
}
.header-content{
    position: absolute;
    top: 40px;
    left: 20px;
    color: #FFF;
    .info{
        display: flex;
        image{
        width: 240rpx;
        height: 240rpx;
        border-radius: 8px;
        }
        .header-right{
            flex: 1;
            overflow: hidden;
            padding: 0 20px;
            margin: 10px 0;
            .title{
                margin-bottom: 20px;
            }
            .artist{
                display: flex;
                align-items: center;
                .img{
                    width: 30px;
                    height: 30px;
                    border-radius: 20px;
                    margin-right: 10px;
                }
            }
        }
    }
    .bot{
        width: 300px;
        font-size: 14px;
        margin: 20rpx 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

}
.btns{
    display: flex;
    position: absolute;
    bottom: 20px;
    left: 30px;
    .btn{
        flex: 1;
        margin-right: 20px ;
        height: 50px;
        border-radius: 10px;
        background: rgba(255,255,255,.2);
        padding:  0 10px;
        display: flex;
        align-items: center;
        justify-content: center;

    }
}
.player{
    display: flex;
    align-items: center;
    height: 50px;
    border-bottom: 1px solid #ccc;
    .uni-icons{
        margin-left: 20px;
        margin-right: 5px;
    }
    .item{
        height: 100px;
    }
}
</style>