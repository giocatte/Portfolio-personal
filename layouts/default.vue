<template>
  <div>
    <header class="">
      <nav class="left-nav text-secondary">
        <ul class="flex gap-4">
          <NuxtLink to="/" class="btn">I</NuxtLink>
          <li>
            <NuxtLink to="/" class="btn">C</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about" class="btn">O</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/products" class="btn">n</NuxtLink>
          </li>
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
