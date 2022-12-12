
<template>
    <h1>salam</h1>
    <pre>
      {{agent.rewards}}
    </pre>
</template>

<script setup>
import data from '@/data/d1.json';
import {Agent} from '@/classes/Environment';

const agent=new Agent("Hamed",data,20);
  //
</script>
