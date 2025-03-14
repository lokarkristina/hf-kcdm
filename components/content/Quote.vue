<script setup lang="ts">
import { quote } from '~/db/content'
</script>

<template>
  <!-- @todo why another different font? :o -->
  <div class="content content-quote content--offset py-5 font-mont">
    <div
      aria-hidden="true"
      class="decorative-quotes flex w-[4.375rem] gap-5 h-12 mb-3.5"
    >
      <img
        src="~/assets/img/icons/block-quotes.png"
        alt=""
      >
      <img
        src="~/assets/img/icons/block-quotes.png"
        class="rotate-180"
        alt=""
      >
    </div>

    <blockquote>
      <p class="text-2xl/[1.5] font-normal">
        {{ quote.text }}
      </p>
      <cite
        class="text-ocean-green-800 text-lg/[1.5] mt-3 not-italic flex items-center gap-4 before:block before:h-[1px] before:w-[2.875rem] before:bg-lines"
      >
        {{ `${quote.author}, ${quote.company}` }}</cite>
    </blockquote>
  </div>
</template>

<style scoped></style>
