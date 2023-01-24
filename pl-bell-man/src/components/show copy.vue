<template>
    <Renderer ref="renderer" resize="window">
      <Camera :position="{ z: 10 }" ref="cam" />
      <Scene @click="sceneClick">
        <!-- <PointLight color="#ffffff" :position="{ y: 50, z: 50 }" /> -->
        
        <Box ref="box" :rotation="{ y: Math.PI / 4, z: Math.PI / 4 }">
          <LambertMaterial />
        </Box>
        <Box ref="box1" :position="{y:2,x:2}" :rotation="{ y: Math.PI / 2, z: Math.PI / 2 }">
            <PhongMaterial color="#ffffff" :props="{ transparent: true, opacity: 0.5 }" />
        </Box>

        <Box ref="box2" :position="{y:2,x:-2}" :rotation="{ y: Math.PI / 6, z: Math.PI / 6 }">
            <PhysicalMaterial color="#ffffff" />
        </Box>
        <Box ref="box3" :position="{y:-2,x:-2}" :rotation="{ y: Math.PI / 6, z: Math.PI / 6 }">
            <PhysicalMaterial color="#ffffff" />
        </Box>
        <Circle  ref="box4" :position="{y:-2,x:2}" :rotation="{ y: Math.PI / 6, z: Math.PI / 6 }">
            <ShaderMaterial :props="{}">
            <Texture src="logo.png"
            uniform="myCustomTexture"/>
        </ShaderMaterial>
        </Circle >
        <Plane :scale="{x:200,y:200}" color="#ffffff">
            <StandardMaterial></StandardMaterial>
        </Plane>
        <Text text="Salam" font-src="/fonts/arial.ttf" length="10">
        </Text>
      </Scene>
    </Renderer>
  </template>
  
  <script>
import { BoxGeometry } from 'three';
import { PhysicalMaterial, StandardMaterial, Text } from 'troisjs';

  export default {
    methods:{
        sceneClick(event){
            // console.log(event)
            alert('salam');
        }
    },
    mounted() {
        const renderer = this.$refs.renderer;
        const box = this.$refs.box.mesh;
        const box1 = this.$refs.box1.mesh;
        const box2 = this.$refs.box2.mesh;
        const box3 = this.$refs.box3.mesh;
        const box4 = this.$refs.box4.mesh;
        const cam = this.$refs.cam;
        renderer.onBeforeRender(() => {
            // box.rotation.x += 0.01;
            // box.rotation.y += 0.01;
            cam.position.x += 0.1;
            box3.position.y+=.0001;
            box3.rotation.z+=.01;
            box4.rotation.z+=0.002;
            box.rotation.z += 0.01;
            box1.rotation.x += 0.03;
            box2.rotation.x += 0.03;
            box2.rotation.x += 0.06;
        });
    },
    components: { PhysicalMaterial, StandardMaterial, Text, BoxGeometry }
};
  </script>