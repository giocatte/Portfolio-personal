<template>
  <div>
    <NuxtLink to="/me">
      <div
        class="transition ease-linear hover:-translate-y-1 hover:scale-110 duration-200 absolute right-4 sm:right-8 md:right-16 2xl:right-24 border-2 border-palette-accent_1 bg-[url('assets/images/me.webp')] bg-[size:80%] bg-no-repeat bg-center aspect-square rounded-full [box-shadow:theme(colors.palette.800)_0px_0px_20px_5px] w-20 h-20 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-60 xl:h-60 2xl:w-72 2xl:h-72 4k:w-[25rem] 4k:h-[25rem] cursor-pointer"
      ></div>
    </NuxtLink>
    <div class="w-[75%] font-Ubuntu text-palette-secondary">
      <p class="text-xl w-fit mt-4 pl-4 animate__animated animate__fadeIn">
        {{ $t("HiIam") }}
      </p>
      <p class="pl-2 text-h3 leading-none font-normal tracking-wider">Giosuè</p>
      <p class="pl-2 text-h2 leading-none font-normal tracking-wider">Cattelan</p>
      <p
        class="text-xl w-fit mt-4 pl-4 animate__animated animate__fadeIn"
        v-html="$t('MeShortDesc')"
      ></p>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
