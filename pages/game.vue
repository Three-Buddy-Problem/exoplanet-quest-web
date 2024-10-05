<template>
  <div class="threesnap" style="color: white">
    <div class="page-container mainBG z-0">
      <div class="page flex justify-center items-center">
        <section
          class="left-1/2 md:left-[5%] top-4 md:top-[20%] absolute translate-x-[-50%] md:translate-x-0 md:block flex flex-col h-full"
        >
          <p
            class="text-[3rem] text-center flex md:text-[7rem] leading-[3rem] md:leading-[7rem] text-balance md:inline"
          >
            EXOPLANET QUEST
          </p>
          <div
            class="text-[1.1rem] md:text-left text-center md:text-[2rem] w-full md:mt-0 mt-2"
          >
            Discover New Worlds
          </div>
          <p
            class="w-[350px] mt-auto md:text-left text-center md:w-[540px] text-sm md:text-xl font-thin md:mt-7 text-pretty leading[1.1rem] md:leading-[1.65rem] md:mb-0 mb-28"
          >
            Welcome to Exoplanet Quest, an educational game where you explore
            distant exoplanets and learn about their unique features using real
            scientific data. Start your journey and expand your understanding of
            the universe.
            <br />
            <span class="md:hidden">
              By
              <a
                href="https://www.spaceappschallenge.org/nasa-space-apps-2024/find-a-team/three-buddy-problem/"
                target="_blank"
                rel="noopener noreferrer"
                class="underline-offset-2 underline"
              >
                Three Buddy Problem
              </a>
            </span>
          </p>
          <div class="mt-5 font-normal md:mb-40 hidden md:block">
            By
            <a
              href="https://www.spaceappschallenge.org/nasa-space-apps-2024/find-a-team/three-buddy-problem/"
              target="_blank"
              rel="noopener noreferrer"
              class="underline-offset-2 underline"
            >
              Three Buddy Problem
            </a>
          </div>
        </section>
        <ScrollDown :go-to="2" />
      </div>
      <div
        class="page flex justify-center items-center missionPage"
        style="background: #121212"
      >
        <ScrollDown :go-to="3" />
      </div>
      <div class="page flex howPage" style="background: #040001">
        <ScrollDown :go-to="4" />
      </div>
      <div class="page gamePage" ref="gamePage">
        <Game v-if="isGamePageVisible" />
      </div>

      <div id="three-container"></div>
    </div>
    <div class="field" id="threesnap-indicator-field"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { createThreesnap } from "threesnap";
import "threesnap/style.css";

const isGamePageVisible = ref(false);

const scale = 0;
const config = useRuntimeConfig();
const model1 = `${config.public.baseURL}spaceship2.glb`;

const setup = () => {
  createThreesnap({
    particlesEnabled: false,
    fixedZ: 9,
    models: [
      {
        modelPath: model1,
        pageConfigs: [
          {
            position: { x: 0, y: 0, z: 0 },
            rotation: { x: 0, y: 0, z: 0 },
            scale: { x: scale, y: scale, z: scale },
          },
          {
            position: { x: 0, y: 0, z: 0 },
            rotation: { x: 0, y: 0, z: 0 },
            scale: { x: scale, y: scale, z: scale },
          },
          {
            position: { x: 0, y: 0, z: 0 },
            rotation: { x: 0, y: 0, z: 0 },
            scale: { x: scale, y: scale, z: scale },
          },
          {
            position: { x: 0, y: 0, z: 0 },
            rotation: { x: 0, y: 0, z: 0 },
            scale: { x: scale, y: scale, z: scale },
          },
        ],
      },
    ],
  });
};

const observeGamePage = () => {
  const gamePage = document.querySelector(".gamePage");

  const observer = new IntersectionObserver(
    ([entry]) => {
      isGamePageVisible.value = entry.isIntersecting;
    },
    { threshold: 0.5 }, // Trigger when 50% of the game page is in view
  );

  observer.observe(gamePage);
};

onMounted(() => {
  setup();
  observeGamePage();

  const scrollContainer = document.querySelector(".page-container");
  const background = document.querySelector(".mainBG");
  const mainBg = document.querySelector(".mainBG");

  scrollContainer.addEventListener("scroll", function () {
    const scrolled = scrollContainer.scrollTop;
    mainBg.style.backgroundPositionY = `${scrolled * -0.3}px`;
    background.style.setProperty(
      "--bg-before-pos",
      `calc(50% - ${scrolled * -0.45}px)`,
    );
  });
});

onUnmounted(() => {
  const observer = new IntersectionObserver(() => {});
  observer.disconnect();
});
</script>

<style scoped>
.mainBG {
  position: fixed;
  font-weight: bold;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: url("https://wallpapercave.com/wp/wp3493599.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
}
.page {
  position: relative;
  display: flex;
  justify-self: center;
  align-items: center;
  align-content: center;
  color: white;
}

.mainBG h1 {
  font-size: 12rem;
}

.mainBG::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: rgba(0, 0, 0, 0.3);
}

.mainBG::before {
  content: "";
  position: absolute;
  right: 0;

  z-index: -2;
  top: 50%;
  width: 40%;
  left: 50%;
  transform: translateY(-50%) translateX(-0%);
  height: 100%;
  background: url("https://cdn.pixabay.com/photo/2023/07/25/10/37/exoplanet-8148792_1280.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center var(--bg-before-pos, 50%);
}

@media only screen and (max-width: 600px) {
  .mainBG::before {
    transform: translateY(-50%) translateX(-50%);
    width: 70%;
  }
}

.missionPage {
  width: 100%;
  height: 100%;
  background: black !important;
}

.missionPage::before {
  content: "";
  position: absolute;
  width: 300px;
  height: 300px;
  background: red;
  background: url("./plan2.webp");
  background-repeat: no-repeat;
  background-size: contain;
  bottom: 0rem;
  right: 0;
}

.howPage {
  width: 100%;
  height: 100%;
  background: black !important;
}

.howPage::before {
  content: "";
  position: absolute;
  width: 300px;
  height: 300px;
  background: red;
  background: url("./planet.webp");
  background-repeat: no-repeat;
  background-size: contain;
  top: 0rem;
  left: 0;
}

.gamePage {
  background: url("https://wallpapercave.com/wp/wp2461878.jpg");
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}
</style>
