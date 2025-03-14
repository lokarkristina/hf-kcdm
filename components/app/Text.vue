<script setup lang="ts">
import newsDetail from '~/db/content'

const { teaser } = defineProps<{
  teaser?: boolean
}>()

// styling that changes based on teaser text or not
const textStyling = computed(() => ({
  'text-ocean-green-700 text-3xl font-serif pb-5': teaser,
  'text-ocean-green-800': !teaser,
}))
</script>

<template>
  <div class="text-formatted">
    <!-- use text content safely, we need it for links inside text -->
    <p
      :class="textStyling"
      class="p-formatted font-serif"
      v-html="newsDetail[teaser ? 'teaserText' : 'text']"
    />
  </div>
</template>

<style>
/* reuse the styling on all text elements */
p {
}
</style>
