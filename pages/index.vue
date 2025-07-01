<template>
  <div class="relative row-start-2 col-start-1 col-span-3 w-full h-full justify-self-center flex flex-row items-center">
    <div class="w-full my-auto flex flex-col lg:flex-row justify-center items-start">
      <!-- <img src="../assets/images/meInRome.jpg" alt="Profile picture" loading="lazy"
      class="fixed bottom-0 right-0 -z-10 h-auto w-full max-w-[425px] lg:max-w-[475px] xl:max-w-[40vw] xl:right-16 2xl:right-48" /> -->
      <img src="../assets/images/meInRome.jpg" alt="Profile picture" loading="lazy"
        class="rounded-full object-cover object-bottom aspect-square w-2/3 sm:w-1/3 xl:w-[32%] self-end lg:order-2" />
      <div class="w-[75%] font-Ubuntu text-palette-secondary">
        <p class="text-xl w-fit mt-4 pl-4 animate__animated animate__fadeIn">
          {{ $t("HiIam") }}
        </p>
        <p class="pl-2 text-h3 leading-none font-normal tracking-wider">Giosuè</p>
        <p class="pl-2 text-h2 leading-none font-normal tracking-wider">
          Cattelan
        </p>
        <p class="text-xl w-fit mt-4 pl-4 animate__animated animate__fadeIn whitespace-pre-wrap md:whitespace-normal"
          v-html="$t('MeShortDesc')"></p>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
