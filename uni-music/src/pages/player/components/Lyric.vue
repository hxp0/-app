<template>
    <view class="lyric" @click="emits('changeShow')">
        <h1>歌词组件</h1>
    </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const emits = defineEmits(['changeShow'])

</script>

<style lang="scss" scoped>
.lyric{
    width:100%;
    height:420px;
}
</style>