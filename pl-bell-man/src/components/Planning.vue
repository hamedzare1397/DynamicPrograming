
<template>
    <h1>salam</h1>
    <pre>
      {{agent}}
    </pre>
</template>

<script setup>
import data from '@/data/d1.json';

const agent=new Agent("Hamed",data.transitions,20);
  //
</script>
