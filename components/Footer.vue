<template>
  <div
    class="fixed w-full bottom-2 z-0 left-0 flex flex-row flex-nowrap items-center justify-center gap-x-4 sm:gap-x-12 pt-3 childrenShadow"
  >
    <a href="https://www.linkedin.com/in/giosue-cattelan/" target="_blank">
      <Icon
        name="bxl:linkedin"
        size="1.5rem"
        class="text-blue-500 sm:text-palette-500 sm:hover:text-blue-500"
      ></Icon
    ></a>
    <a href="https://github.com/giocatte" target="_blank">
      <Icon
        name="bxl:github"
        size="1.5rem"
        class="text-black sm:text-palette-500 sm:hover:text-black"
      ></Icon
    ></a>
    <a href="mailto:giosuecattelan@gmail.com" target="_blank">
      <Icon
        name="bxl:gmail"
        class="rounded-md w-6 h-5 bg-white sm:bg-transparent sm:hover:bg-white text-red-500 sm:text-palette-500 sm:hover:text-red-500"
      ></Icon
    ></a>
    <div class="self-end">
      <p class="text-xl text-palette-1000">Giosuè Cattelan</p>
      <p class="text-[.5rem] text-center text-palette-800">2024</p>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.childrenShadow {
  > * svg,
  p {
    filter: drop-shadow(0 3px 9px theme("colors.palette.BG_blue"));
    z-index: 0;
  }
  &:hover > * {
    // @apply sm:hover:bg-palette-300;
  }
}
</style>
