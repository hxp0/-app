<script setup lang="ts">
import { searchDefaultApi,searchSuggestApi,searchApi,searchHotApi } from '../../services'
import type{SearchSuggestItem,SearchResultItem,SearchHotItem} from '../../services'
import { ref } from 'vue'
import DefaultList from './compoents/DefaultList.vue'
import ResultList from './compoents/ResultList.vue'
import Suggest from './compoents/Suggest.vue'
enum SearchType{
	Default = 'DEFAULT',
	Result ='RESULT',
	Suggest = 'SUGGEST'
}
const type = ref(SearchType.Default)
const hotList = ref<SearchHotItem[]>([])
const value = ref('')
searchHotApi()
.then(res=>{
    hotList.value = res.data
})
const historyList = ref<string[]>([])
let timer:number
const suggestList = ref<SearchSuggestItem[]>([])
const input = (val:string) => {
	if(val.length !== 0 ){
        if(timer) clearTimeout(timer)
        timer = setTimeout(()=>{
            type.value = SearchType.Suggest
            searchSuggestApi(val)
            .then(res=>{
                suggestList.value = res.result.allMatch
            })
        },500)
    }else{
        if(timer) clearTimeout(timer)
        type.value = SearchType.Default
    }
}
const resultList = ref<SearchResultItem[]>([])
const search = (e:{value:string}) =>{
	type.value = SearchType.Result
    searchApi(e.value)
    .then(res=>{
        resultList.value = res.result.songs
        historyList.value.push(e.value)
    })
}
const cancel = (e:{value:string}) =>{
    type.value = SearchType.Default
}
const keyword = ref('')
searchDefaultApi()
.then(res=>{
    keyword.value = res.data.realkeyword
})
const del = ()=>{
    historyList.value = []
}
const changeValue = (val:string)=>{
    value.value = val
    searchApi(val)
    .then(res=>{
        if(timer) clearTimeout(timer)
        type.value = SearchType.Result
        resultList.value = res.result.songs
        historyList.value.push(val)
    })
}
</script>

<template>
<uni-search-bar :placeholder="keyword" bgColor="#EEEEEE" @confirm="search" radius="20" @input="input" cancelText="取消" @cancel="cancel" v-model="value"/>
<DefaultList v-if="type === SearchType.Default" :list="hotList" :historyList="historyList"  @changeHistory="del" @changeValue="changeValue"/>
<ResultList v-else-if="type === SearchType.Result" :list="resultList"/>
<Suggest v-else-if="type === SearchType.Suggest" :list="suggestList" @changeValue="changeValue"/>

</template>

<style lang="scss" scoped>


</style>
