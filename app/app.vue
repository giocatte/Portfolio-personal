<template>
  <div class="w-full">
    <NuxtRouteAnnouncer />
    <p class="w-fit mx-auto mt-44 p-2 rounded-md bg-red-800 text-xl font-semibold text-center">{{ $t('redirect') }}</p>
    <p class="text-xl font-semibold text-center underline py-2 mb-44">
      <NuxtLink to="https://www.giosuecattelan.it">www.giosuecattelan.it</NuxtLink>
    </p>
  </div>
</template>