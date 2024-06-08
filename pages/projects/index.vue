<template>
  <div class="w-full h-full border border-black">
    <p>hello, here I will place my projects :P</p>
    <p
      class="shadow-md bg-palette-400 p-4 min-w-48 text-center mx-auto mt-8 font-bold w-fit text-xl"
    >
      {{ $t("welcome") }}
      locale: {{ locale }}
    </p>
    <div class="w-fit mx-auto">
      <button @click="setLocale('it')" class="btn m-4">Italiano</button>
      <button @click="setLocale('en')" class="btn m-4">English</button>
    </div>
    <div>
      <ProjectCard :project="data.projects[0]" v-if="data"></ProjectCard>
    </div>
  </div>
</template>

<script setup>
import ProjectCard from "~/components/ProjectCard.vue";

const { locale, setLocale } = useI18n();

const { data } = await useFetch("/api/projects");
const projects = () =>
  setTimeout(() => {
    data.value.projects.map(function (project, key) {
      console.log(project.Title, project.Description);
    });
  }, 2000);
projects();
</script>

<style lang="scss" scoped></style>
