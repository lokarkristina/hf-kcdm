<script setup lang="ts">
import newsFeatured from '~/db/newsFeatured'
</script>

<template>
  <div class="news-featured">
    <!-- image -->
    <ContentImage />

    <h1 class="col-[6/-1] text-big-title leading-[0.9]">
      {{ newsFeatured.title }}
    </h1>

    <ContentText :is-teaser="true" />

    <!-- reset the text default spacer -->
    <p class="date -mt-5">
      {{ newsFeatured.date }}
    </p>
  </div>
</template>
