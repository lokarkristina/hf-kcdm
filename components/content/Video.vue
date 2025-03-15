<script setup lang="ts">
import { videoId } from '~/db/content'

const label = 'To je naslov videa'
</script>

<template>
  <div class="content content-video youtube border-t border-ocean-green pt-5">
    <p
      class="text-sm color-ocean-green uppercase mb-5 font-ultra text-ocean-green-600"
    >
      {{ label }}
    </p>
    <!-- @todo video not playing bc of CORS, so fix that -->
    <lite-youtube
      :videoid="videoId"
      :playlabel="label"
      class="max-h-72 aspect-video"
    />
  </div>
</template>
