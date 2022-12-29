
<template>
  <template  v-if="QShowed !== 0">
    <v-table>
      <thead>
        <tr>
          <th>States</th>
          <th v-for="item in agent.actions ">{{ item }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,indexState) in QShowed">
          <td>{{ indexState }}</td>
          <th v-for="(i,indexAction) in item">{{ i }}</th>
        </tr>
      </tbody>
    </v-table>
  </template>
  <br/>
  <VBtn @click="exec()">اجرا</VBtn>
  <br/>
  <pre>
    <show></show>
    agent.QStar{{ agent.QStar }}
  </pre>
</template>

<script setup>
import show from './show.vue';
import data from '@/data/d1.json';
import {ref,nextTick} from 'vue';
import {Agent} from '@/classes/Environment';
const QShowed=ref(0);

const agent=new Agent("Hamed",data,20);
async function exec()
{
  let q=agent.makeQ(.95);
  console.log('exec',q);
  this.QShowed=Object.assign({},q)
  await nextTick();
}
  //
</script>
