<template>
  <div class="bg-palette-800">
    <div
      class="max-w-[80%] scrollbar-none min-h-svh mx-auto bg-palette-300 overflow-y-auto overflow-x-hidden grid grid-cols-[15%_85%] grid-rows-[18%_auto_10%] [box-shadow:theme(colors.palette.300)_0px_0px_20px_20px]"
    >
      <div class="flex flex-col gap-2 border-palette-600 row-span-2">
        <div
          class="border-2 border-palette-accent_1 bg-[url('assets/images/me.png')] m-4 bg-[size:80%] bg-no-repeat bg-center aspect-square rounded-[50%]"
        ></div>
        <nav class="w-[100%] grow-[4] pt-8">
          <ul class="flex flex-col flex-nowrap items-center space-y-12">
            <li class="max-w-min">
              <NuxtLink to="/">
                <Icon
                  name="tdesign:home"
                  size="3rem"
                  class="text-palette-accent_2"
                ></Icon>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/about">
                <Icon
                  name="tdesign:work"
                  class="w-12 h-12 text-palette-accent_2"
                ></Icon>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/about">
                <Icon
                  name="tdesign:user-1"
                  size="3rem"
                  class="text-palette-accent_2"
                ></Icon>
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped></style>
