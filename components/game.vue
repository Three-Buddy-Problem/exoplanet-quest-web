<template>
  <main
    class="w-[100vw] h-[100vh] flex gap-5 flex-col justify-center items-center"
  >
    <section class="w-full h-full bg-slate-400 text-7xl text-white">
      <a-scene embedded>
        <a-sky :src="`${config.public.baseURL}stars.jpg`" radius="1200"></a-sky>
        <a-camera id="camera" position="0 3 1"></a-camera>
        <!-- <a-circle color="#CCC" radius="20"></a-circle> -->
        <a-entity
          shadow="receive: true; cast: false"
          rotation="0 -270 0"
          position="-5.69 0 0.926"
          scale="1 1 1"
          :gltf-model="`${config.public.baseURL}spaceshipclear4.glb`"
        >
          <a-video
            v-if="red"
            :src="`${config.public.baseURL}red.mp4`"
            width="1.6"
            height="1.6"
            rotation="43 90 0"
            position="1.5 1.8 5.5"
          ></a-video>

          <a-box
            scale="0.5 0.2 0.5"
            position="2.5 3.76 3.5"
            color="#454545"
          ></a-box>

          <a-entity
            text="value: Flux Level ;color: yellow;"
            scale="5 5 5"
            position="3.5 3.7 5"
            color="#ff00ff"
            rotation="0 -45 0"
            wrap-count="60"
          ></a-entity>
          <a-entity
            :text="`value: ${barLevel} ;color: white; `"
            scale="5 5 5"
            position="3 3 5"
            rotation="0 -65 0"
            wrap-count="60"
          ></a-entity>

          <a-box
            id="bar"
            color="lime"
            :scale="`0.3 ${scale} 0.3`"
            position="2.5 3 3.5"
          >
          </a-box>
          <a-box color="black" scale="0.1 1.5 0.1" position="2.5 3 3.5"></a-box>
          <a-box
            scale="0.5 0.2 0.5"
            position="2.5 2.25 3.5"
            color="#454545"
          ></a-box>

          <a-video
            v-if="blue"
            :src="`${config.public.baseURL}blue.mp4`"
            width="1.6"
            height="1.6"
            rotation="43 90 0"
            position="1.5 1.8 5.5"
          ></a-video>

          <a-video
            v-if="green"
            :src="`${config.public.baseURL}green.mp4`"
            width="1.6"
            height="1.6"
            rotation="43 90 0"
            position="1.5 1.8 5.5"
          ></a-video>

          <a-video
            v-if="yellow"
            :src="`${config.public.baseURL}yellow.mp4`"
            width="1.6"
            height="1.6"
            rotation="43 90 0"
            position="1.5 1.8 5.5"
          ></a-video>
        </a-entity>

        <a-box
          v-if="isPlanet"
          scale="400 1 1"
          color="lime"
          position="0 0 -400"
        ></a-box>
        <a-box
          v-if="!isPlanet"
          scale="400 1 1"
          color="lime"
          position="0 0 -380"
        ></a-box>

        <a-image
          :src="`${config.public.baseURL}glow.png`"
          animation__first="property: scale; to: 675 675 675; dur: 2000; startEvents: loaded, animationcomplete__second"
          animation__second="property: scale; to: 600 600 600; dur: 2000; startEvents: animationcomplete__first"
          position="0 0 -600"
          scale="600 600 600 "
        ></a-image>
        <a-sphere
          :src="`${config.public.baseURL}sun.jpg`"
          animation="property: rotation; to: 0 1024 0; dur: 600000; loop: true; easing: linear;"
          position="0 0 -600"
          scale="150 150 150"
        >
        </a-sphere>
        <a-sphere
          color="black"
          position="50 0 -400"
          scale="10 10 10"
        ></a-sphere>
        <a-entity
          position="11.4 12 -250"
          rotation="-90 0 -11"
          light="type: hemisphere; color: #fff; groundColor: #a3a3a3; intensity: 2"
        ></a-entity>
      </a-scene>
    </section>
  </main>
</template>

<script setup lang="ts">
const config = useRuntimeConfig();
const props = defineProps<{
  isPlanet: Boolean;
  red: boolean;
  yellow: boolean;
  green: boolean;
  blue: boolean;
  barLevel: string;
}>();

const calculateScale = () => {
  const value = parseInt(props.barLevel, 10);
  if (value < 0) return 0; // Ensure the scale doesn't go below 0
  if (value > 6000) return 1.5; // Cap the scale at 1.5 for inputs above 6000
  return (1.5 * value) / 6000; // Map input value from 0-6000 to 0-1.5
};
const scale = computed(() => calculateScale());
</script>
