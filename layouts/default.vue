<template>
  <div
    class="max-h-svh overflow-y-scroll no-scrollbar bg-palette-BG_avory relative z-10"
  >
    <div class="bg-gradientCSS" :class="router.currentRoute.value.path === '/'?'bg-palette-BG_green':router.currentRoute.value.path === '/projects'?'bg-palette-BG_blue':'bg-orange-300'"></div>
    <div
      class="relative md:max-w-[95%] lg:max-w-[85%] min-h-svh px-2 mx-auto grid grid-cols-[5rem_auto_5rem] grid-rows-[7rem_auto_4.25rem] z-0"
    >
      <NuxtLink
        to="/"
        ref="mePic"
        :class="
          router.currentRoute.value.path === '/' ? 'invisible' : 'animateme'
        "
        class="row-start-1 col-start-1 w-full h-auto my-auto border-2 border-palette-accent_1 bg-[url('assets/images/me.webp')] bg-[size:80%] bg-no-repeat bg-center aspect-square rounded-full cursor-default"
      ></NuxtLink>
      <nav
        class="row-start-1 col-start-2 w-fit h-fit m-auto rounded-full bg-palette-400"
      >
        <ul class="flex flex-row flex-nowrap items-center space-x-4">
          <li class="p-3 relative">
            <NuxtLink to="/" active-class="activeNav">
              <div class="w-fit h-fit bg-palette-400 rounded-full">
                <Icon
                  name="tdesign:home"
                  size="2rem"
                  class="iconStyle text-palette-300"
                ></Icon>
              </div>
            </NuxtLink>
          </li>
          <li class="p-3 relative">
            <NuxtLink to="/projects" active-class="activeNav">
              <Icon
                name="tdesign:work"
                size="2rem"
                class="iconStyle text-palette-300"
              ></Icon
            ></NuxtLink>
          </li>
          <li class="p-3 relative">
            <NuxtLink to="/me" active-class="activeNav">
              <Icon
                name="tdesign:user-1"
                size="2rem"
                class="iconStyle text-palette-300"
              ></Icon>
            </NuxtLink>
          </li>
        </ul>
      </nav>
      <div class="row-start-1 col-start-3 justify-self-end my-auto z-10">
        <button
          v-if="locale == 'it'"
          @click="toggleLocale('en')"
          class="animate__animated animate__flipInY"
        >
          <Icon
            name="emojione:flag-for-italy"
            size="2rem"
            class="iconStyle"
          ></Icon>
        </button>
        <button
          v-else-if="locale == 'en'"
          @click="toggleLocale('it')"
          class="animate__animated animate__flipInY"
        >
          <Icon
            name="emojione:flag-for-united-kingdom"
            size="2rem"
            class="iconStyle"
          ></Icon>
        </button>
      </div>
      <NuxtPage />
      <!-- <Footer
        class="relative row-start-3 col-start-1 col-span-3 sm:col-start-2 sm:col-span-1 w-full h-full justify-self-center"
      ></Footer> -->
      <Footer v-if="router.currentRoute.value.path !== '/me'" class="self-center col-start-2 -z-10 left-0 justify-center  gap-x-4 sm:gap-x-12 pt-3 childrenShadow"></Footer>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
const router = useRouter();
const { locale, setLocale } = useI18n();
const elements = ref(null);

const toggleLocale = (lang) => {
  // Trigger exit animation
  elements.value = document.querySelectorAll(".animate__fadeIn");
  elements.value.forEach((element) => {
    element.classList.remove("animate__fadeIn");
    element.classList.add("animate__fadeOut");
  });

  // Change the locale after the exit animation completes
  setTimeout(() => {
    setLocale(lang);
    // Trigger entry animation
    elements.value.forEach((element) => {
      element.classList.remove("animate__fadeOut");
      element.classList.add("animate__fadeIn");
    });
  }, 350); // Adjust delay as per your animation duration
};

watch(locale, (newLocale, oldLocale) => {
  // This watcher can remain empty or handle other tasks
});
</script>

<style lang="scss" scoped>
.iconStyle {
  @apply md:w-8 md:h-8;
  :hover {
    @apply text-palette-700;
    filter: drop-shadow(0px 0px 5px theme("colors.palette.600"));
  }
}
.activeNav svg {
  @apply text-palette-600;
  filter: drop-shadow(0px 0px 1rem theme("colors.palette.secondary"));
}
.bg-gradientCSS {
  @apply -z-[8] fixed top-0 left-0 w-full h-svh [clip-path:_polygon(100%_0,_40%_0,_100%_100%,_100%_0)] md:[clip-path:_polygon(32.5%_0,_100%_0,_100%_100%,_82%_100%)];
}

.animateme {
  animation-name: appearing;
  animation-duration: 1500ms;
}
@keyframes appearing {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
