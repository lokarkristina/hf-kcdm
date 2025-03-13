<script setup lang="ts">
import newsFeatured from '~/db/newsFeatured'
</script>

<template>
  <div class="news-featured">
    <!-- image -->
    <AppImage />

    <h1 class="col-[6/-1] text-big-title leading-[0.9]">
      {{ newsFeatured.title }}
    </h1>

    <AppText :teaser="true" />

    <p class="text-sm text-hf-captions-gray uppercase">
      {{ newsFeatured.date }}
    </p>
  </div>
</template>

<style scoped></style>
