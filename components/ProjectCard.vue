<template>
  <article
    v-if="project"
    class="projectClass relative w-[87.5%] sm:w-[40%] sm:mt-10 bg-palette-300 hover:shadow-lg mx-auto sm:mx-0 my-6 transition-all duration-150 ease-in-out rounded-[10px] z-10"
    :class="{ hovered: isHovered, blurred: isBlurred }"
    @mouseenter="onHover(true)"
    @mouseleave="onHover(false)"
  >
    <div
      v-if="project.imgUrl !== ''"
      class="rounded-lg w-full h-auto aspect-video overflow-hidden bg-center bg-no-repeat bg-[length:101%_101%]"
      :style="{ backgroundImage: `url('/assets/images/${project.imgUrl}')` }"
    ></div>
    <div
      v-else
      class="rounded-lg w-full h-auto aspect-video flex flex-nowrap flex-col justify-center items-center gap-y-4"
    >
      <p class="text-xl">{{ $t("CodeIP") }}</p>
      <WIP_Loader></WIP_Loader>
    </div>
    <div class="flex flex-col sm:gap-2 pt-1 sm:pt-3 p-2">
      <div class="flex justify-between items-center">
        <div class="text-black overflow-x-hidden text-ellipsis">
          <p
            class="text-lg sm:text-2xl font-semibold mb-1 sm:mb-2 sm:text-ellipsis sm:overflow-x-hidden sm:whitespace-nowrap"
          >
            {{ project.Title }}
          </p>
          <p
            v-if="locale == 'en'"
            class="projectDesc text-sm min-h-14 mb-2 sm:h-32 h-fit leading-[1.15rem] animate__animated animate__fadeIn break-normal overflow-y-auto sm:no-scrollbar whitespace-pre-wrap text-justify"
            v-html="project.Description.en"
          ></p>
          <p
            v-else-if="locale == 'it'"
            class="projectDesc text-sm min-h-14 mb-2 sm:h-32 h-fit leading-[1.15rem] animate__animated animate__fadeIn break-normal overflow-y-auto sm:no-scrollbar whitespace-pre-wrap text-justify"
            v-html="project.Description.it"
          ></p>
        </div>
        <div
          class="w-[50px] h-auto p-2 rounded-full transition-all duration-300 ease transform hover:rotate-[-45deg] hover:bg-palette-BG_blue/35"
        >
          <a :href="project.WebUrl" target="_blank">
            <svg
              class="text-black"
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              stroke-linejoin="round"
              stroke-linecap="round"
              viewBox="0 0 24 24"
              stroke-width="2"
              fill="none"
              stroke="currentColor"
            >
              <line y2="12" x2="19" y1="12" x1="5"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>
      </div>
      <div class="flex gap-[10px]">
        <span
          class="bg-[rgba(165,96,247,0.43)] text-[rgb(85,27,177)] font-bold py-[0.3em] px-[0.7em] rounded-[15px] text-[12px] tracking-[-0.6px]"
          >• {{ project.lang }}</span
        >
        <span
          class="bg-[#b2b2fd] text-[#1a41cd] font-bold py-[0.3em] px-[0.7em] rounded-[15px] text-[12px] tracking-[-0.6px]"
          >• {{ project.year }}</span
        >
      </div>
    </div>
  </article>
</template>

<script setup>
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";
import WIP_Loader from "./WIP_Loader.vue";

const props = defineProps({
  project: {
    type: Object,
    required: true,
    default: () => ({
      id: 0,
      Title: "",
      Description: {
        en: "",
        it: "",
      },
      lang: "",
      year: 0,
      imgUrl: "",
      WebUrl: "",
    }),
  },
  isHovered: {
    type: Boolean,
    default: false,
  },
});

const { locale } = useI18n();
const emit = defineEmits(["hoverState"]);
const isCardHovered = ref(false);

const isBlurred = computed(() => props.isHovered && !isCardHovered.value);

function onHover(state) {
  if (window.innerWidth >= 640) {
    isCardHovered.value = state;
    emit("hoverState", state);
  }
}
</script>

<style lang="scss" scoped>
.projectClass {
  transition: all 0.3s ease-in-out;
  &.hovered {
    transform: scale(1.1, 1.1);
  }
  &.blurred {
    filter: blur(10px);
    transform: scale(0.9);
  }
}
</style>
