<template>
  <v-app>
    <v-main>
      <VBtn @click="loadComponent('Planning')">Planning</VBtn>
      <VBtn @click="loadComponent('DataStore')">DataStore</VBtn>
      <VBtn @click="loadComponent('Show')">Show</VBtn>
      <br/>
      <transition name="fade">
        <Planning v-if="view=='Planning'"/>
        <DataStore v-else-if="view=='DataStore'"/>
        <Show v-else-if="view=='Show'"/>
      </transition>
    </v-main>
  </v-app>
</template>

<script setup>
  import {ref} from 'vue';
  import Planning from '@/components/Planning.vue';
  import DataStore from '@/components/DataStore.vue';
  import Show from '@/components/show.vue';

  const view=ref(0);

  components:[Planning,DataStore,Show];

  function loadComponent(component)
  {
    view.value = component;
  }

</script>
