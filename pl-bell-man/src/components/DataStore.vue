<template>
    <VBtn @click="loadData">LoadData</VBtn>
    <pre>
        <h1>actions:</h1>
        <p>
            {{ actions }}
        </p>
        <h1>data:</h1>
        <p>
            {{ data }}
        </p>
    </pre>
</template>
<script setup>
// import Data from '@/classes/Data';
import {ref,computed} from 'vue';
import rawData from '../data/d1.json'
import store from '../stores';
// import { mapState,mapGetters } from 'vuex'

const data=computed(() => {
  return store.state.raw;
})

const actions=computed(() => {
  return store.getters.rawActions;
})


function loadData(){
    store.commit('setRawData',rawData);
    console.log(store.state.raw)
}
</script>