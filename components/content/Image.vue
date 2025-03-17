<script setup lang="ts">
import { image } from '~/db/content'

const { showDescription = false } = defineProps<{
  showDescription?: boolean
}>()
</script>

<template>
  <div class="border-b content content-image border-ocean-green">
    <picture class="block responsive-image">
      <source
        v-for="img in image.images"
        :key="img.media"
        :srcset="img.src"
        :media="img.media"
      >

      <img
        :src="image.default"
        alt="Description of image"
        class="object-cover responsive-image__img size-full md:max-h-72 max-h-52"
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
