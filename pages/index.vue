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
                href="https://github.com/Three-Buddy-Problem"
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
              href="https://github.com/Three-Buddy-Problem"
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
        <section
          class="left-1/2 md:left-[7%] top-4 md:top-[5%] absolute translate-x-[-50%] md:translate-x-0 md:block flex flex-col h-full"
        >
          <p
            class="text-[2rem] text-center flex md:text-[5rem] leading-[2rem] md:leading-[5rem] text-balance md:inline"
          >
            Our Mission
          </p>

          <section class="flex flex-col gap-y-1 grotesk">
            <p
              class="w-[400px] text-left md:w-[90%] text-xs md:text-xl font-thin mt-7 text-pretty leading[1.1rem] md:leading-[1.65rem]"
            >
              At Exoplanet Quest, our goal is to transform how we explore
              distant worlds through a blend of cutting-edge technology,
              immersive storytelling, and accessibility. Players take on the
              role of a remote astronaut operator in a terminal-based WebXR
              experience, guiding a robot in deep space. By analyzing exoplanet
              data and making real-time decisions, users learn planetary science
              while engaging in dynamic, AI-generated scenarios. This fusion of
              VR simulations and scientific accuracy creates a unique,
              educational experience that combines creativity with rigor.
            </p>

            <p
              class="w-[400px] text-left md:w-[90%] text-xs md:text-xl font-thin mt-7 text-pretty leading[1.1rem] md:leading-[1.65rem]"
            >
              Exoplanet Quest was built to foster both discovery and learning by
              making advanced technology accessible and interactive. From
              leveraging SSH terminal interfaces to bridging virtual reality and
              AI in a virtualized environment, we push the boundaries of what
              educational games can achieve. Our mission is to inspire curiosity
              and encourage deeper exploration of the cosmos through innovative,
              accessible design, bringing the wonders of space within reach for
              all. Join us on this quest to unlock the mysteries of the universe
              and shape the future of space exploration.
            </p>
          </section>
        </section>
        <ScrollDown :go-to="3" />
      </div>
      <div class="page flex howPage" style="background: #040001">
        <!-- Mobile -->
        <section
          class="w-full h-full justify-center items-center flex md:hidden !text-xs"
        >
          <HowToStepper :steps="[...steps, ...steps2]" :from="0" />
        </section>
        <!-- PC -->
        <section
          class="w-full h-full justify-center items-center md:flex hidden"
        >
          <HowToStepper :steps="steps" :from="0" />
        </section>
        <section
          class="w-full h-full justify-center items-center md:flex hidden"
        >
          <HowToStepper :steps="steps2" :from="3" />
        </section>
        <ScrollDown :go-to="4" />
      </div>
      <div class="page gamePage"></div>

      <div id="three-container"></div>
    </div>
    <div class="field" id="threesnap-indicator-field"></div>
  </div>
</template>

<script setup lang="ts">
import { createThreesnap } from "threesnap";
import "threesnap/style.css";

const steps = [
  {
    step: 1,
    title: "Access the Game via SSH",
    description: `Open your terminal and enter the following command to connect to the system using: "ssh console.exoplanet.quest"`,
  },
  {
    step: 2,
    title: "Open the game url generated from the terminal",
    description:
      "Your AI generated  exoplanet exploration quest will be ready.",
  },
  {
    step: 3,
    title: "Get ready for your mission!",
    description: "Learn more about your mission.",
  },
];

const steps2 = [
  {
    step: 1,
    title: "Learn how to find exoplanets in VR!",
    description: `Learn the 5 ways, from transit to astrometry. `,
  },
  {
    step: 2,
    title: "Connect to the spaceship!",
    description:
      "Once in VR, explore different planets and analyze their characteristics.",
  },
  {
    step: 3,
    title: "Submit your report to AI & recieve feedback ",
    description:
      "Input your findings into the terminal and submit your report. Confirm whether you correctly identified the planet as an exoplanet or not.",
  },
];

const scale = 0.3;
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
            position: { x: 65, y: 25, z: 0 },
            rotation: { x: -52, y: 0, z: 0 },
            scale: { x: scale - 0.2, y: scale - 0.2, z: scale - 0.2 },
          },
          {
            position: { x: 5, y: -50, z: 0 },
            rotation: { x: 0, y: 90, z: 0 },
            scale: { x: scale, y: scale, z: scale },
          },
          {
            position: { x: 0, y: 55, z: 0 },
            rotation: { x: -52, y: -90, z: 0 },
            scale: { x: scale - 0.2, y: scale - 0.2, z: scale - 0.2 },
          },
          {
            position: { x: 50, y: 0, z: 20 },
            rotation: { x: 0, y: 90, z: 45 },
            scale: { x: scale, y: scale, z: scale },
          },
        ],
      },
    ],
  });
};
onMounted(() => {
  setup();
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
  background: url("../plan2.webp");
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
  background: url("../planet.webp");
  background-repeat: no-repeat;
  background-size: contain;
  top: 0rem;
  left: 0;
}

.gamePage {
  background: url("../gamebg.png");
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}
</style>
