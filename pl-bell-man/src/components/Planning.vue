
<template>
    <v-table v-if="agent.lenStates>0">
      <thead>
        <tr>
          <th>States</th>
          <th v-for="item in store.getters.rawActions ">{{ item }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in agent.states">
          <td>{{ item.name }}</td>
          <th v-for="act in item.actions">{{ act.value }}</th>
        </tr>
      </tbody>
    </v-table>
  <br/>
  <VBtn @click="exec()">اجرا</VBtn>
  <VBtn @click="init()">مقدار دهی اولیه</VBtn>
  <br/>
  <pre>
    {{QShowed}}
  </pre>
</template>

<script setup>

import data from '@/data/d1.json';
import {ref,nextTick} from 'vue';
import {Agent,Environment} from '@/classes/index.js';
var QShowed=ref(0);

const agent=new Agent("Hamed");
function init()
{
  agent.init();
}
async function exec()
{
agent.run();
QShowed=agent.QStar;
nextTick()
}

  //
</script>
