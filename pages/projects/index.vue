<template>
  <div class="w-full h-full border border-black">
    <p>hello, here I will place my projects :P</p>
    <p class="shadow-md bg-palette-400 p-4 min-w-48 text-center mx-auto mt-8 font-bold w-fit text-xl">
      {{ $t("welcome") }}
      locale: {{ locale }}
    </p>
    <div class="w-fit mx-auto">
      <button @click="setLocale('it')" class="btn m-4">Italiano</button>
      <button @click="setLocale('en')" class="btn m-4">English</button>
    </div>
  </div>
</template>

<script setup>
const { locale, setLocale } = useI18n();
</script>

<style lang="scss" scoped></style>
