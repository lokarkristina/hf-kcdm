<script setup lang="ts">
import newsFeatured from '~/db/newsFeatured'
</script>

<template>
  <div class="px-5 news-featured md:pe-5">
    <!-- image -->
    <ContentImage />

    <h1
      class="col-[6/-1] mb-5 text-primary underline decoration-dotted font-ultra text-big-title leading-[0.9]"
    >
      {{ newsFeatured.title }}
    </h1>

    <ContentText :is-teaser="true" />

    <!-- reset the text default spacer -->
    <p class="-mt-5 date">
      {{ newsFeatured.date }}
    </p>
  </div>
</template>
