<template>
  <div
    class="relative row-start-2 col-start-1 col-span-3 w-full h-full justify-self-center"
  >
    <div class="w-[75%] font-Ubuntu text-palette-secondary">
      <p class="text-xl w-fit mt-4 pl-4 animate__animated animate__fadeIn">
        {{ $t("HiIam") }}
      </p>
      <p class="pl-2 text-h3 leading-none font-normal tracking-wider">Giosuè</p>
      <p class="pl-2 text-h2 leading-none font-normal tracking-wider">
        Cattelan
      </p>
      <p
        class="text-xl w-fit mt-4 pl-4 animate__animated animate__fadeIn whitespace-pre-wrap md:whitespace-normal"
        v-html="$t('MeShortDesc')"
      ></p>
      <!-- <NuxtLink to="/me">
        <div
          class="transition ease-linear hover:-translate-y-1 hover:scale-110 duration-200 cursor-pointer w-full h-full lg:w-[clamp(100px,_40vw,_475px);] lg:h-[clamp(100px, 53vh, 550px)] mt-auto mb-0 ml-auto mr-0 fixed bottom-0 right-0 bg-bottom bg-[size:_clamp(100px,_100%,_425px)_auto;] lg:top-0 lg:bg-[size:_clamp(426px,_100%,_475px)_auto;] lg:-left-0 xl:-left-16 xl:bg-[size:40%] 2xl:-left-48 bg-[url('assets/images/me_hd2-min.webp')] bg-no-repeat sm:bg-right-bottom"
        ></div>
      </NuxtLink> -->
    </div>
    <!-- <img
      src="../assets/images/me_hd2.png"
      alt="Profile picture"
      class="fixed -bottom-0 -z-10 right-0 w-auto max-h-[400px] md:max-h-[450px] lg:max-h-[500px] xl:max-h-[650px]"
    /> -->
    <!-- <div
          class="transition ease-linear hover:-translate-y-1 hover:scale-110 duration-200 absolute right-4 sm:right-8 md:right-16 2xl:right-24 border-2 border-palette-accent_1 bg-[url('assets/images/me.webp')] bg-[size:80%] bg-no-repeat bg-center aspect-square rounded-full [box-shadow:theme(colors.palette.400)_0px_0px_20px_5px] w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-60 xl:h-60 2xl:w-72 2xl:h-72 4k:w-[25rem] 4k:h-[25rem] cursor-pointer"
        ></div> -->
    <img
      src="../assets/images/me_hd2-min.webp"
      alt="Profile picture"
      loading="lazy"
      class="fixed bottom-0 right-0 -z-10 h-auto w-full max-w-[425px] lg:max-w-[475px] xl:max-w-[40vw] xl:right-16 2xl:right-48"
    />
    <!-- <div
          class="w-full h-full fixed bottom-0 right-0 bg-bottom bg-[size:_clamp(100px,_100%,_425px)_auto;] lg:top-0 lg:bg-[size:_clamp(426px,_100%,_475px)_auto;] lg:-left-0 xl:-left-16 xl:bg-[size:40%] 2xl:-left-48 bg-[url('assets/images/me_hd2.png')] bg-no-repeat sm:bg-right-bottom"
        ></div> -->
  </div>
</template>

<script setup></script>

<style scoped></style>
