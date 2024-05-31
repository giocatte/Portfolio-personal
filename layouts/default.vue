<template>
  <div class="bg-palette-800">
    <div
      class="md:max-w-[90%] lg:max-w-[80%] min-h-svh scrollbar-none mx-auto bg-palette-300 overflow-y-auto overflow-x-hidden grid grid-cols-[15%_85%] grid-rows-[3.5rem_auto_4.2rem] [box-shadow:theme(colors.palette.300)_0px_0px_20px_20px]"
    >
      <div class="row-start-1 col-start-2 justify-self-end m-2">
        <Icon name="emojione:flag-for-italy" size="2rem"></Icon>
        <Icon name="emojione:flag-for-united-kingdom" size="2rem"></Icon>
      </div>
      <div
        class="relative flex flex-col border-palette-600 sm:row-start-1 sm:row-span-2"
      >
        <div
          ref="mePic"
          :class="
            router.currentRoute.value.path === '/' ? 'invisible' : 'animateme'
          "
          class="order-1 border-2 border-palette-accent_1 bg-[url('assets/images/me_.png')] m-4 bg-[size:80%] bg-no-repeat bg-center aspect-square rounded-full [box-shadow:theme(colors.palette.800)_0px_0px_20px_5px]"
        ></div>
        <nav
          class="order-2 w-fit m-auto py-8 px-4 rounded-full bg-palette-400 h-fit"
        >
          <ul class="flex flex-col flex-nowrap items-center space-y-12">
            <li class="max-w-min">
              <NuxtLink to="/" active-class="activeNav">
                <div class="w-fit h-fit bg-palette-400 rounded-full">
                  <Icon
                    name="tdesign:home"
                    size="3rem"
                    class="iconStyle text-palette-300"
                  ></Icon>
                </div>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/projects" active-class="activeNav">
                <Icon
                  name="tdesign:work"
                  size="3rem"
                  class="iconStyle text-palette-300"
                ></Icon
              ></NuxtLink>
            </li>
            <li>
              <NuxtLink to="/me" active-class="activeNav">
                <Icon
                  name="tdesign:user-1"
                  size="3rem"
                  class="iconStyle text-palette-300"
                ></Icon>
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
      <div class="relative pl-[2%] pt-[2%] row-start-2 col-start-2">
        <NuxtPage />
      </div>
    </div>
  </div>
</template>

<script setup>
const router = useRouter();
</script>

<style scoped>
.iconStyle:hover {
  @apply text-palette-700;
  filter: drop-shadow(0px 0px 5px theme("colors.palette.600"));
}
.activeNav svg {
  @apply text-palette-600;
  filter: drop-shadow(0px 0px 1rem theme("colors.palette.secondary"));
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
