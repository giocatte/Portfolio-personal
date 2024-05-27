<template>
  <div class="bg-palette-primary grid grid-cols-12 h-svh">
    <div class="sideNav bg-palette-600 col-start-1 row-span-1">
      <nav class="left-nav">
        <ul class="flex gap-4">
          <li>
            <NuxtLink to="/"
              ><span class="material-symbols-outlined"> home </span></NuxtLink
            >
          </li>
          <li><NuxtLink to="/about">O</NuxtLink></li>
          <li><NuxtLink to="/products">n</NuxtLink></li>
        </ul>
      </nav>
    </div>
    <p class="col-start-2 col-span-11 text-h1 text-palette-accent_2">
      Giosuè Cattelan🫡
    </p>
  </div>
</template>

<style scoped>
.pattern {
  width: 100%;
  min-height: 100vh;
  height: 100%;
  /* background-color: theme("colors.palette.primary");
  background-image: radial-gradient(
    theme("colors.palette.accent_2") 2px,
    transparent 0
  ); */
  background-size: 30px 30px;
  background-position: -5px -5px;
}
</style>
