<script setup lang="ts">
    import { ref,watchEffect } from 'vue'
    import { getCommentApi } from '../../services'
    import type { Comments,RequestPlaylist } from '../../services';
    
    const commentList = ref<Comments[]>([])
    const hotCommentList = ref<Comments[]>([])
    const popup = ref()
    interface Props {
        visible?:boolean
        type?:RequestPlaylist
        id:number
    }


    const props = defineProps<Props>()

    type Emits = {
        'update:visible':[visible:boolean]
    }

    const emits = defineEmits<Emits>()

  watchEffect( async () => {
        if(props.visible) {
            popup.value?.open()
            const res = await getCommentApi(props.id)
            console.log(res)
            commentList.value = res.comments
            hotCommentList.value = res.hotComments
        }else{
            popup.value?.close()
        }

    }
)

const change = (e:any) => {
    console.log(e)
  if (!e.show) {
    emits('update:visible', false)
  }
}
</script>

<template>
    <uni-popup ref="popup" type="bottom" background-color="#fff" @change="change">
        <scroll-view scroll-y="true" class="list">
            <uni-section title="热门评论" type="line">
                <uni-list>
                    <uni-list-item
                    v-for="item in hotCommentList"
                    :key="item.commentId" 
                    showArrow 
                    :title="item.user.nickname"
                    :note="item.content"
                    :thumb="item.user.avatarUrl"
                    clickable 
                    />
                </uni-list>
            </uni-section>
            <uni-section title="最新评论" type="line">
                <uni-list>
                    <uni-list-item
                    v-for="item in commentList"
                    :key="item.commentId" 
                    showArrow 
                    :title="item.user.nickname"
                    :note="item.content"
                    :thumb="item.user.avatarUrl"
                    clickable 
                    />
                </uni-list>
            </uni-section>
        </scroll-view>
    </uni-popup>
</template>

<style lang="scss" scoped>
.list {
    height: 800rpx;
} 
</style>