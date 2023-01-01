<template>
  <v-app>
    <v-main>
      <VBtn @click="loadComponent('Planning')">Planning</VBtn>
      <VBtn @click="loadComponent('DataStore')">DataStore</VBtn>
      <br/>
      <transition name="fade">
          <component :is="view" tag="VBtn"></component>
        </transition>
    </v-main>
  </v-app>
</template>

<script setup>
import {ref,defineAsyncComponent } from 'vue'
  // import Planning from '@/components/Planning.vue'
  // import DataStore from '@/components/DataStore.vue'
  const view=ref(0);

  function loadComponent(component)
  {
    this.view = defineAsyncComponent(() =>
    import(`@/components/${component}.vue`)
    )
  }

</script>
