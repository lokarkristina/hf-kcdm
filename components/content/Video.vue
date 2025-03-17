<script setup lang="ts">
import { videoId } from '~/db/content'

const label = 'To je naslov videa'
</script>

<template>
  <div class="pt-5 border-t content content-video youtube border-ocean-green">
    <p
      class="mb-5 text-sm uppercase color-ocean-green font-ultra text-ocean-green-600"
    >
      {{ label }}
    </p>
    <!-- @todo video not playing bc of CORS, so fix that,
     also warning on build, so fix that also -->
    <lite-youtube
      :videoid="videoId"
      :playlabel="label"
      class="max-h-72 aspect-video"
    />
  </div>
</template>
