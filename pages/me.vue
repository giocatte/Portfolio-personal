<template>
  <div
    class="overflow-hidden justify-self-center relative row-start-2 col-start-1 col-span-3 w-[calc(100%_+_1rem)] h-full xl:w-full place-self-center grid grid-rows-[7.5svh_60svh_auto_auto] xl:grid-rows-[10%_minmax(auto,_75%)_minmax(auto,_15%)] grid-cols-[20%_minmax(0,_1fr)] xl:grid-cols-[65%_35%] xl:gap-2 items-start content-start justify-items-stretch"
  >
    <h2 class="self-center col-start-1 col-span-2 xl:col-span-1 row-start-1 text-6xl 2xl:text-8xl px-3 animate__animated animate__fadeIn">
      {{ $t("About") }}
    </h2>
    <p class="col-start-1 col-span-2 xl:col-span-1 row-start-4 xl:row-start-2 px-3 text-base md:text-lg md:p-4 4k:text-2xl" v-html="$t('MeDescription')">
    </p>
    <div class="col-start-1 col-span-2 xl:col-span-1 xl:col-start-2 row-start-2 xl:row-start-1 xl:row-span-3 mx-auto ml-0 xl:rounded-lg h-full w-full xl:w-[97%] overflow-hidden">
      <img
        src="assets/images/meInRome.jpg"
        class="h-full w-full object-cover object-center"
        style="transform: scale(1.05);"
      />
    </div>
    <Footer class="xl:hidden col-start-1 col-span-2 row-start-3 justify-evenly my-1"></Footer>    
    <div
      class="hidden xl:flex col-start-1 row-start-3 w-full h-full gap-x-5 flex-row flex-nowrap justify-between items-start"
    >
      <a :href="locale == 'it' ? '/assets/files/Cattelan_CV_ITA.pdf':'/assets/files/Cattelan_CV_EN.pdf'" target="_blank"  class="group hoverFade animate__animated animate__fadeInDown" style="--fade-color: #dc2626;">
        <button
          class="btn h-[45px] w-[130px] rounded-full border-red-500 border-2 bg-white group-hover:bg-red-500"
        >
          <span class="text-base flex items-center justify-center text-red-500 group-hover:text-white"
            >Curriculum
            <svg
              class="ml-px text-red-400 group-hover:text-white"
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="1.2rem"
              height="1.2rem"
              viewBox="0 0 524.000000 524.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,524.000000) scale(0.100000,-0.100000)"
                fill="currentColor"
                stroke="none"
              >
                <path
                  d="M794 5165 c-176 -38 -318 -170 -382 -354 -14 -40 -16 -132 -19 -693
l-4 -648 170 0 171 0 0 608 c1 640 2 654 47 704 10 11 36 29 58 39 38 18 101
19 1385 19 l1345 0 463 -463 462 -463 0 -222 0 -222 170 0 170 0 0 293 0 292
-563 563 -562 562 -1425 -1 c-1143 0 -1437 -3 -1486 -14z"
                />
                <path
                  d="M1555 3265 c-305 -57 -521 -284 -599 -629 -18 -76 -26 -253 -16 -355
38 -406 232 -660 576 -752 64 -18 108 -22 234 -22 175 0 259 17 385 77 141 67
245 182 304 336 30 77 49 160 37 160 -3 0 -74 11 -158 25 -208 34 -194 36
-209 -31 -7 -31 -30 -83 -51 -116 -64 -99 -166 -148 -309 -148 -203 0 -345
111 -416 323 -25 76 -27 95 -27 252 -1 189 7 238 59 352 73 158 205 243 381
243 150 0 264 -70 321 -197 17 -37 33 -76 37 -87 4 -11 12 -16 21 -12 9 3 84
20 168 37 83 17 156 35 162 40 13 13 -29 130 -73 199 -108 170 -270 277 -473
310 -86 13 -268 11 -354 -5z"
                />
                <path
                  d="M2590 3241 c0 -5 12 -35 26 -67 40 -90 552 -1506 574 -1587 l13 -47
224 2 225 3 23 75 c12 41 91 264 174 495 84 231 168 461 186 510 158 435 209
574 221 598 l15 27 -209 0 -209 0 -13 -62 c-10 -53 -110 -376 -369 -1200 -20
-65 -39 -120 -42 -122 -3 -3 -23 54 -46 127 -23 73 -109 346 -193 607 -83 261
-158 504 -166 540 -8 36 -17 75 -19 88 -5 22 -6 22 -210 22 -113 0 -205 -4
-205 -9z"
                />
                <path
                  d="M393 778 c3 -237 8 -313 20 -349 63 -188 222 -330 403 -359 36 -6
719 -10 1799 -10 1455 0 1751 3 1806 14 180 39 325 171 386 355 12 36 17 112
20 349 l5 302 -171 0 -171 0 0 -262 c-1 -325 -9 -355 -105 -399 -38 -18 -113
-19 -1775 -19 -1662 0 -1737 1 -1775 19 -96 44 -104 74 -105 399 l0 262 -171
0 -171 0 5 -302z"
                />
              </g>
            </svg>
          </span>
        </button>
      </a>
      <a href="https://www.linkedin.com/in/giosue-cattelan/" target="_blank" class="group hoverFade  animate__animated animate__fadeInDown" style="--fade-color: #3b82f6">
        <button
          class="btn h-[45px] w-[130px] rounded-full border-blue-500 border-2 bg-white group-hover:bg-blue-500"
        >
          <span class="text-base flex items-center justify-center text-blue-500 group-hover:text-white"
            >Linked
            <Icon
              name="bxl:linkedin"
              size="1.2rem"
              class="ml-px text-blue-500 xl:group-hover:text-white border border-blue-500 border-l-0 group-hover:border-white rounded-md p-px relative -left-[2px]"
            ></Icon
          ></span>
        </button>
      </a>
      <a href="https://github.com/giocatte" target="_blank" class="group hoverFade  animate__animated animate__fadeInDown" style="--fade-color: #000">
        <button
          class="btn h-[45px] w-[130px] rounded-full border-black border-2 bg-white group-hover:bg-black"
        >
          <span class="text-base flex items-center justify-center text-black group-hover:text-white"
            >GitHub
            <Icon
              name="bxl:github"
              size="1.2rem"
              class="text-black xl:text-black group-hover:text-white"
            ></Icon
          ></span></button
      ></a>
      <a href="mailto:giosuecattelan@gmail.com" target="_blank" class="group hoverFade animate__animated animate__fadeInDown" style="--fade-color: #dc2626">
        <button
          class="btn h-[45px] w-[130px] rounded-full border-red-600 border-2 bg-white group-hover:bg-red-600"
        >
          <span class="text-base flex items-center justify-center text-red-600 group-hover:text-white animate__animated animate__fadeIn"
            >{{$t("SendA")}}
            <Icon
              name="bxl:gmail"
              class="ml-px rounded-[25%] w-[1.2rem] aspect-video bg-red-600 text-white group-hover:bg-white group-hover:text-red-600"
            ></Icon
          ></span>
        </button>
      </a>
    </div>
  </div>
</template>

<script setup>
const { locale } = useI18n();
</script>

<style scoped>
.hoverFade > *:hover {
  animation: fadeIn 650ms;
}

@keyframes fadeIn {
  0% {
    background-color: white;
  }
  100% {
    background-color: var(--fade-color);
  }
}

</style>
