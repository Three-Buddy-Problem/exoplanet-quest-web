<template>
  <main
    class="w-[50vw] h-[100vh] flex gap-5 flex-col justify-center items-center"
  >
    <section
      v-if="config.public.baseURL"
      class="w-full h-full bg-slate-400 text-7xl text-white"
    >
      <a-scene background="color: #424242" embedded>
        <a-video
          material="shader: flat; side: double"
          preload="auto"
          width="1280"
          height="720"
          autoplay="true"
          loop="true"
          crossorigin="anonymous"
          playsinline="true"
          webkit-playsinline=""
          muted="true"
          geometry="primitive: cylinder; radius: 5; height: 3.6815; open-ended: true; theta-start: 142.5; theta-length: 75;"
          position="5 1.6 0"
          :src="`${config.public.baseURL}transit-method-single-planet.mp4`"
          rotation="0 -90 0"
          scale="-1 1 1"
        >
          <a-entity
            text="value: Transit Method Single Planet;"
            color="black"
            scale="-10 10 10"
            position="-2.58 2.1 -4"
            rotation="0 0 0"
            wrap-count="60"
          ></a-entity>
        </a-video>

        <a-video
          material="shader: flat; side: double"
          preload="auto"
          width="1280"
          height="720"
          autoplay="true"
          loop="true"
          crossorigin="anonymous"
          :playsinline="true"
          webkit-playsinline=""
          geometry="primitive: cylinder; radius: 5; height: 3.6815; open-ended: true; theta-start: 142.5; theta-length: 75;"
          position="-5 1.6 0"
          :src="`${config.public.baseURL}direct-imaging.mp4`"
          rotation="0 90 0"
          scale="-1 1 1"
        >
          <a-entity
            text="value: Direct Imaging;"
            scale="-10 10 10"
            position="-3.18 2.1 -4"
            rotation="0 0 0"
            wrap-count="60"
          ></a-entity>
        </a-video>

        <a-video
          material="shader: flat; side: double"
          preload="auto"
          width="1280"
          height="720"
          autoplay="true"
          loop="true"
          crossorigin="anonymous"
          :playsinline="true"
          webkit-playsinline=""
          geometry="primitive: cylinder; radius: 5; height: 3.6815; open-ended: true; theta-start: 142.5; theta-length: 75;"
          position="2.5 1.6 4.33"
          :src="`${config.public.baseURL}gravitational_microlensing.mp4`"
          rotation="0 -150 0"
          scale="-1 1 1"
        >
          <a-entity
            text="value: Gravitational Microlensing;"
            scale="-10 10 10"
            position="-2.58 2.1 -4"
            rotation="0 0 0"
            wrap-count="60"
          ></a-entity>
        </a-video>

        <a-video
          material="shader: flat; side: double"
          preload="auto"
          width="1280"
          height="720"
          autoplay="true"
          loop="true"
          crossorigin="anonymous"
          :playsinline="true"
          webkit-playsinline=""
          geometry="primitive: cylinder; radius: 5; height: 3.6815; open-ended: true; theta-start: 142.5; theta-length: 75;"
          position="-2.5 1.6 4.33"
          :src="`${config.public.baseURL}astometry.mp4`"
          rotation="0 150 0"
          scale="-1 1 1"
        >
          <a-entity
            text="value: Astometry;"
            scale="-10 10 10"
            position="-4.18 2.1 -4"
            rotation="0 0 0"
            wrap-count="60"
          ></a-entity>
        </a-video>

        <a-video
          material="shader: flat; side: double"
          preload="auto"
          width="1280"
          height="720"
          autoplay="true"
          loop="true"
          crossorigin="anonymous"
          playsinline="true"
          webkit-playsinline=""
          geometry="primitive: cylinder; radius: 5; height: 3.6815; open-ended: true; theta-start: 142.5; theta-length: 75;"
          position="0 1.6 -5"
          :src="`${config.public.baseURL}radial velocity.mp4`"
          rotation="0 0 0"
          scale="-1 1 1"
        >
          <a-entity
            text="value: Radial Velocity;"
            scale="-10 10 10"
            position="-3.58 2.1 -4"
            rotation="0 0 0"
            wrap-count="60"
          ></a-entity>
        </a-video>

        <a-image
          position="0 -5 0"
          :src="`${config.public.baseURL}radial-shadow-2.png`"
          rotation="-90 0 0"
          scale="6 6 6"
        ></a-image>
        <a-entity position="0 0 1.5">
          <a-camera></a-camera>
        </a-entity>
      </a-scene>
    </section>
  </main>
</template>

<script setup>
const config = useRuntimeConfig();
onMounted(() => {
  setTimeout(() => {
    playVideos();
  }, 5000);
});
const playVideos = () => {
  const videos = document.querySelectorAll("a-video");
  videos.forEach((video) => {
    if (video != null || video != undefined) {
      const videoEl = video.getObject3D("mesh").material.map.image;
      videoEl.muted = true;
      videoEl.play();
    }
  });
};
</script>
