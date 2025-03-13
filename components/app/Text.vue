<script setup lang="ts">
import newsDetail from '~/db/newsDetail'

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
  <!-- Use text content safely -->
  <p
    :class="textStyling"
    class="mb-5"
    v-html="newsDetail[teaser ? 'teaserText' : 'text']"
  />
</template>

<style scoped></style>
