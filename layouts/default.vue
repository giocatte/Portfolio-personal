<template>
  <div class="bg-palette-800">
    <div
      class="md:max-w-[90%] lg:max-w-[80%] scrollbar-none min-h-svh mx-auto bg-palette-300 overflow-y-auto overflow-x-hidden grid grid-cols-[15%_85%] grid-rows-[7.5rem_auto_4.2rem] [box-shadow:theme(colors.palette.300)_0px_0px_20px_20px]"
    >
      <div class="relative flex flex-col gap-2 border-palette-600 row-span-2">
        <div
          :class="router.currentRoute.value.path === '/' ? 'invisible' : ''"
          class="order-1 border-2 border-palette-accent_1 bg-[url('assets/images/me.png')] m-4 bg-[size:80%] bg-no-repeat bg-center aspect-square rounded-[50%]"
        ></div>
        <nav class="order-2 w-[100%] grow-[4] pt-8">
          <ul class="flex flex-col flex-nowrap items-center space-y-12">
            <li class="max-w-min">
              <NuxtLink to="/">
                <Icon
                  name="tdesign:home"
                  size="3rem"
                  class="iconStyle text-palette-600"
                ></Icon>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/about">
                <Icon
                  name="tdesign:work"
                  size="3rem"
                  class="iconStyle text-palette-600"
                ></Icon>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/about">
                <Icon
                  name="tdesign:user-1"
                  size="3rem"
                  class="iconStyle text-palette-600"
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
</style>
