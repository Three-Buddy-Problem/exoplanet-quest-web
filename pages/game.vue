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
        class="page flex howPage"
        v-for="i in 4"
        :key="i"
        style="background: #040001"
      >
        <ScrollDown :go-to="i + 2" />
      </div>
      <div class="page flex" style="background: #040001">
        <five-ways class="hidden md:block" />
        <section class="w-[100vw] md:w-[50vw] h-[100vh] flex flex-col">
          <div
            class="h-[50%] w-full"
            :style="`background:url('${config.public.baseURL}five.png');background-size:contain;background-position: center center;background-repeat: no-repeat;`"
          ></div>
          <div
            :style="`background:url('${config.public.baseURL}gp2.png');background-size:contain;background-position: center center;background-repeat: no-repeat;`"
            class="h-[40%] w-full"
          ></div>
        </section>
        <ScrollDown :go-to="7" />
      </div>
      <div class="page gamePage" v-auto-animate ref="gamePage">
        <Game
          :bar-level="`${inputValue}`"
          :red="isRed"
          :blue="isBlue"
          :green="isGreen"
          :yellow="isYellow"
          :isPlanet="isExoplanet"
          v-if="isGamePageVisible"
        />
      </div>

      <div id="three-container"></div>
    </div>
    <div class="field" id="threesnap-indicator-field"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { createThreesnap } from "threesnap";
import DATA from "@/public/synthetic_generated_data_sorted.json";
import "threesnap/style.css";

const isGamePageVisible = ref(false);
const isExoplanet = ref(true);

const scale = 0;
const config = useRuntimeConfig();
const model1 = `${config.public.baseURL}spaceship2.glb`;

const inputValue = ref("2000");
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

const route = useRoute();

const isBlue = ref(false);
const isRed = ref(true);
const isYellow = ref(false);
const isGreen = ref(false);

const itemId = ref("");

// Watch for changes in the route.query to update the id
// watch(
//   () => route.query.id,
//   (newId) => {
//     id.value = String(newId);
//   },
// );

const gameData = ref<any>({});
const index = ref(0);

onMounted(() => {
  if (route.query.id == undefined) {
    itemId.value = "0";
  } else {
    itemId.value = String(route.query.id);
  }
  index.value = parseInt(itemId.value);

  gameData.value = DATA.data[index.value] as any;
  console.log(gameData.value);

  // if (gameData.value.y_value.koi_disposition == 1) {
  //   isExoplanet.value = true;
  // } else {
  //   isExoplanet.value = false;
  // }
  // inputValue.value = gameData.value.X_value.koi_insol;
  // const colorLevel = gameData.value.X_value.koi_teq;
  // if (colorLevel >= 2900) {
  //   isBlue.value = true;
  // }
  // if (colorLevel < 2900 && colorLevel > 1934) {
  //   isGreen.value = true;
  // }
  // if (colorLevel <= 1934 && colorLevel > 950) {
  //   isYellow.value = true;
  // }
  // if (colorLevel <= 950 && colorLevel > 0) {
  //   isRed.value = true;
  // }
  //
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
  display: flex;
  justify-items: center;
  align-items: center;
}

.howPage:nth-child(2)::before {
  content: "";
  width: 100%;
  height: 100%;
  background: url("./gp1.png");
  background-repeat: no-repeat;
  background-position-y: 50%;
  background-size: contain;
}

.howPage:nth-child(3)::before {
  content: "";
  width: 100%;
  height: 100%;
  background: url("./gp2.png");
  background-repeat: no-repeat;
  background-position-y: 50%;
  background-size: contain;
}

.howPage:nth-child(4)::before {
  content: "";
  width: 100%;
  height: 100%;
  background: url("./gp3.png");
  background-repeat: no-repeat;
  background-position-y: 50%;
  background-size: contain;
}

.howPage:nth-child(5)::before {
  content: "";
  width: 100%;
  height: 100%;
  background: url("./gp4.png");
  background-repeat: no-repeat;
  background-position-y: 50%;
  background-size: contain;
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
