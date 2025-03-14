<script setup lang="ts">
import { image } from '~/db/content'

const { showDescription = false } = defineProps<{
  showDescription?: boolean
}>()
</script>

<template>
  <div class="content content-image border-b border-ocean-green">
    <picture class="responsive-image block">
      <source
        v-for="img in image.images"
        :key="img.media"
        :srcset="img.src"
        :media="img.media"
      >

      <img
        :src="image.default"
        alt="Description of image"
        class="responsive-image__img size-full object-cover md:max-h-72 max-h-52"
      >
    </picture>

    <!-- image description -->
    <p
      v-if="showDescription"
      class="text-ocean-green-600 text-base/[1.46] py-5 pe-5"
    >
      {{ image.description }}
    </p>
  </div>
</template>

<style scoped></style>
