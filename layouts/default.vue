<template>
  <div>
    <header class="shadow-sm bg-gray-700">
      <nav class="container mx-auto py-4 flex justify-between h-20 text-purple-600">
        <NuxtLink to="/" class="text-xl font-bold font-Blackout">Giosuè Cattelan</NuxtLink>
        <ul class="flex gap-4">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/products" class="btn">Merch</NuxtLink></li>
        </ul>
      </nav>
    </header>
    <div class="container mx-auto p-4">
      <slot />
    </div>
  </div>
</template>

<style scoped>
  /* .router-link-exact-active {
    color: #a82d9d;
  } */
</style>