<template>
  <article
    v-if="project"
    class="projectClass w-[80%] sm:w-[45%] bg-palette-300 hover:shadow-lg mx-auto my-6 transition-all duration-150 ease-in-out rounded-[10px] cursor-pointer z-10"
    :class="{ hovered: isHovered, blurred: isBlurred }"
    @mouseenter="onHover(true)"
    @mouseleave="onHover(false)"
  >
    <div
      class="rounded-lg w-full h-auto aspect-video overflow-hidden bg-center bg-no-repeat bg-[length:101%_101%]"
      :style="{ backgroundImage: `url('/images/${project.imgUrl}')` }"
    ></div>
    <div class="flex flex-col gap-[20px] pt-[20px] p-[10px]">
      <div class="flex justify-between items-center">
        <div
          class="text-base font-semibold text-black whitespace-nowrap overflow-hidden text-ellipsis"
        >
          <p class="text-2xl">{{ project.imgUrl }}</p>
          {{ project.Title }}
        </div>
        <div
          class="w-[50px] h-[50px] p-[9px] rounded-full transition-all duration-300 ease transform hover:rotate-[-45deg] hover:bg-[#a6c2f0]"
        >
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
        </div>
      </div>
      <div class="flex gap-[10px]">
        <button class="btn">
          <span
            class="bg-[rgba(165,96,247,0.43)] text-[rgb(85,27,177)] font-bold py-[0.3em] px-[0.7em] rounded-[15px] text-[12px] tracking-[-0.6px]"
            >• Vue</span
          >
        </button>
        <span
          class="bg-[#b2b2fd] text-[#1a41cd] font-bold py-[0.3em] px-[0.7em] rounded-[15px] text-[12px] tracking-[-0.6px]"
          >• 2023</span
        >
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: "ProjectCard",
  props: {
    project: {
      type: Object,
      required: true,
      default: () => ({
        id: 0,
        Title: "",
        Description: "",
        imgUrl: "",
      }),
    },
    isHovered: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["hoverState"],
  data() {
    return {
      isCardHovered: false,
    };
  },
  computed: {
    isBlurred() {
      return this.isHovered && !this.isCardHovered;
    },
  },
  methods: {
    onHover(state) {
      this.isCardHovered = state;
      this.$emit("hoverState", state);
    },
  },
};
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
