<script setup lang="ts">
import { teaserText, textLink, textList, text } from '~/db/content'

const { isTeaser, hasList, hasLink } = defineProps<{
  isTeaser?: boolean
  hasList?: boolean
  hasLink?: boolean
}>()

const getContent = computed(() => {
  if (isTeaser) return teaserText
  if (hasLink) return textLink
  if (hasList) return `${text}${textList}${text}`
  return text
})

// styling that changes based on teaser text or not
const textStyling = computed(() => ({
  'teaser text-ocean-green-700 pb-5': isTeaser,
  'text-ocean-green-800': !isTeaser,
}))
</script>

<template>
  <div class="text-formatted">
    <!-- use text content safely, we need it for links inside text -->
    <p
      :class="textStyling"
      class="p-formatted font-serif"
      v-html="getContent"
    />
  </div>
</template>

<style>
/* reuse the styling on all text elements */
.text-formatted {
  p,
  ul,
  ol {
    /* @todo this seems sus */
    margin-block-end: theme('spacing.5');
    font-size: theme('fontSize.xl');
    line-height: 1.5;
  }

  p.teaser {
    font-size: theme('fontSize.3xl');
    line-height: 1.1;
  }

  a {
    font-size: inherit;
    line-height: 1.4;
    color: var(--primary-color, #4bac87);
    text-decoration-line: underline;
    text-decoration-style: dotted;
    text-decoration-thickness: 7.5%;
    text-underline-offset: 15%;
  }

  ol,
  ul {
    margin-block-start: theme('spacing.5');
  }

  ul {
    list-style: disc;
  }

  li::marker {
    /* @todo align with content */
    color: theme('colors.ocean-green.500');
  }
}
</style>
