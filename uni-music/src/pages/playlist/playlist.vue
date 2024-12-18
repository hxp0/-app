<script setup>
    import { ref } from 'vue'
    import { getDetailApi } from '../../services';
    import { onLoad } from '@dcloudio/uni-app';


    const id = ref()

    onLoad ((options) => {
	    id.value = options.id
        console.log(id)
    })
    const getDetail = async () => {
        const res = await getDetailApi(id)
    }
    // getDetailApi(id)
    //     .then((res) => {
    //         console.log(res)
    //     })
</script>

<template>
    <h1>详情页</h1>
</template>

<style lang="scss" scoped>

</style>