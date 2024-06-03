<template>
  <div class="bg-palette-800">
    <div
      class="md:max-w-[90%] lg:max-w-[80%] min-h-svh scrollbar-none mx-auto bg-palette-300 overflow-y-auto overflow-x-hidden grid grid-cols-[15%_85%] grid-rows-[3.5rem_auto_4.2rem] [box-shadow:theme(colors.palette.300)_0px_0px_20px_20px]"
    >
      <div class="row-start-1 col-start-2 justify-self-end m-2">
        <!-- <button @click="setLocale('it')" class="m-4">
          <Icon
            name="emojione:flag-for-italy"
            size="2rem"
            class="iconStyle"
          ></Icon>
        </button>
        <button @click="setLocale('en')" class="m-4">
          <Icon
            name="emojione:flag-for-united-kingdom"
            size="2rem"
            class="iconStyle"
          ></Icon>
        </button> -->
        <div class="container">
          <div class="pane">
            <label class="label">
              <button @click="setLocale('it')" class="m-4">
                <Icon
                  name="emojione:flag-for-italy"
                  size="2rem"
                  class="iconStyle"
                ></Icon>
              </button>
              <input id="left" class="input" name="radio" type="radio" />
            </label>
            <label class="label">
              <button @click="setLocale('en')" class="m-4">
                <Icon
                  name="emojione:flag-for-united-kingdom"
                  size="2rem"
                  class="iconStyle"
                ></Icon>
              </button>
              <input
                id="right"
                class="input"
                checked="checked"
                name="radio"
                type="radio"
              />
            </label>
            <span class="selection"></span>
          </div>
        </div>
      </div>
      <div
        class="relative flex flex-col border-palette-600 sm:row-start-1 sm:row-span-2"
      >
        <div
          ref="mePic"
          :class="
            router.currentRoute.value.path === '/' ? 'invisible' : 'animateme'
          "
          class="order-1 border-2 border-palette-accent_1 bg-[url('assets/images/me.png')] m-4 bg-[size:80%] bg-no-repeat bg-center aspect-square rounded-full [box-shadow:theme(colors.palette.800)_0px_0px_20px_5px]"
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
const { locale, setLocale } = useI18n();
</script>

<style lang="scss" scoped>
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

.container {
  transform-style: preserve-3d;
  perspective: 1000px;
}

.pane {
  outline: 2px solid #00ff6a;
  box-shadow: 0 0 10px #00ff6a77, inset 0 0 10px #00ff6a77;
  height: 1cm;
  width: 3cm; // Adjusted width for two options
  border-radius: 5px;
  position: relative;
  overflow: hidden;
  transition: 0.7s ease;
}

.input {
  display: none;
}

.label {
  height: 1cm;
  width: 1.5cm; // Adjusted width for two options
  float: left;
  font-weight: 600;
  letter-spacing: -1px;
  font-size: 14px;
  padding: 0px;
  position: relative;
  z-index: 1;
  color: #00ff6a;
  text-align: center;
  padding-top: 10px;
}

.selection {
  display: none;
  position: absolute;
  height: 1cm;
  width: 1.5cm; // Adjusted width for two options
  z-index: 0;
  left: 0;
  top: 0;
  box-shadow: 0 0 10px #00ff6a77;
  transition: .15s ease;
}

.label:has(input:checked) {
  color: #212121;
}

.pane:has(.label:nth-child(1):hover) {
  transform: rotateY(-30deg);
}

.pane:has(.label:nth-child(2):hover) {
  transform: rotateY(30deg);
}

.label:has(input:checked) ~ .selection {
  background-color: #00ff6a;
  display: inline-block;
}

.label:nth-child(1):has(input:checked) ~ .selection {
  transform: translateX(0);
}

.label:nth-child(2):has(input:checked) ~ .selection {
  transform: translateX(1.5cm); // Adjusted translation for two options
}
