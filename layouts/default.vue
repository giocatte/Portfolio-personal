<template>
  <div>
    <header class="">
      <nav class="left-nav text-secondary">
        <ul class="flex gap-4">
          <NuxtLink to="/" class="btn">I</NuxtLink>
          <li><NuxtLink to="/" class="btn">C</NuxtLink></li>
          <li><NuxtLink to="/about" class="btn">O</NuxtLink></li>
          <li><NuxtLink to="/products" class="btn">n</NuxtLink></li>
        </ul>
      </nav>
    </header>
    <div class="pattern"></div>
    <div class="container mx-auto p-4">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.pattern {
  width: calc(100vw - 2rem);
  height: calc(100vh - 2rem);
  /* Add your background pattern here */
  background-color: #313131;
  background-image: radial-gradient(
    rgba(255, 255, 255, 0.171) 2px,
    transparent 0
  );
  background-size: 30px 30px;
  background-position: -5px -5px;
}
</style>
