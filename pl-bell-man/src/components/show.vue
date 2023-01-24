<template>
     <Renderer ref="renderer" resize="window">
    <Camera ref="cam" :position="{ z: 20 }" :rotation="{x:1}" />
    <Scene>
      <PointLight :position="{ z: 50,x:-10 }" />
      
      <Plane :size="10" ref="plan" :position="{x:0,y:0,z:-10}">
        <LambertMaterial />
      </Plane>
    
      <Box :size="3" ref="box">
        <LambertMaterial />
      </Box>
    </Scene>
    <!-- <EffectComposer>
      <RenderPass />
      <UnrealBloomPass :strength="1" />
      <HalftonePass :radius="1" :scatter="0" />
    </EffectComposer> -->
  </Renderer>
  </template>
  
  <script>
import { PhysicalMaterial, StandardMaterial, Text,Camera, Plane } from 'troisjs';

  export default {
    methods:{
        sceneClick(event){
            console.log(event)
            alert('salam');
        }
    },
    mounted() {
        const renderer = this.$refs.renderer;
        const box = this.$refs.box;
        const cam = this.$refs.cam;
        console.log('cam',cam);
        renderer.onBeforeRender(() => {
          // cam.lockAt=box.position;
          box.rotation.x+=.01;
          // box.rotation.z += 0.01;
          // box.rotation.x += 0.01;
        });
    },
    components: { PhysicalMaterial, Plane }
};
  </script>