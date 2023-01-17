
<template>
    <v-table v-if="QShowed">
      <thead>
        <tr>
          <th>States </th>
          <th v-for="item in store.getters.rawActions ">{{ item }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row,statename) in QShowed">
          <td>{{ statename }}</td>
          <template v-for="(val,actionName) in row" >
            <td :class="Math.max(...Object.values(row))==val?'bg-success':''">{{ val }}</td>
          </template>
          <TD>{{ bestAction(row) }}</TD>
          
        </tr>
      </tbody>
    </v-table>
  <br/>
  <VBtn @click="exec()"> ({{ QCount }})اجرا</VBtn>
  <VBtn @click="init()">مقدار دهی اولیه</VBtn>
</template>

<script setup>

import data from '@/data/d1.json';
import store from '@/stores';
import {ref,watch, nextTick} from 'vue';
import {Agent,Environment} from '@/classes/index.js';
const QShowed=ref('');
const QCount=ref(0);

var agent = ref(0);
function init()
{
  agent=new Agent("Hamed");
  agent.init(); 
}
async function exec()
{
  agent.run(); 
  // console.log(agent.QStar)
  await nextTick();
  QShowed.value=agent.QStar;
  this.QCount++;
}

function bestAction(state){
  let maxq=0;
  let lable='';
    
  Object.entries(state).forEach(act=>{
    let [l,v]=act;
    if(maxq<v)
    {
      maxq=v;
      lable=l;
    }
  })
  return lable;
}

  //
</script>
