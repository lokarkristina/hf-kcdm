<script setup lang="ts">
import { formatDate } from '#imports'
import content from '~/db/content'
</script>

<template>
  <div class="news-detail">
    <!-- title area -->
    <!-- @todo add new layout za content area i think. -->
    <TitleArea :show-link-back="true">
      <!-- @todo maybe this needs to go out of the title area -->
      <template #title>
        {{ content.h1 }}
      </template>
    </TitleArea>

    <UContainer :ui="{ constrained: 'max-w-main' }">
      <div class="grid-container grid-4-8">
        <!-- image -->
        <ContentImage />

        <!-- date -->
        <p
          class="news-detail__date date inline-block pb-5 pt-2 pe-6 justify-self-start mb-5 border-b border-ocean-green-500"
        >
          {{ formatDate(content.date) }}
        </p>

        <!-- teaser text -->
        <ContentText :is-teaser="true" />

        <!-- content -->
        <ContentText :has-link="true" />

        <ContentHeading type="h2" />
        <ContentText :has-list="true" />
        <ContentHeading type="h3" />
        <ContentText />

        <!-- video -->
        <ContentVideo />

        <ContentHeading type="h2" />
        <ContentText />
        <ContentText :has-list="true" />
        <ContentHeading type="h3" />
        <ContentText />
        <!-- image with desc. -->
        <ContentImage :show-description="true" />

        <ContentHeading type="h2" />
        <ContentText />
        <!-- highlight -->
        <ContentHighlight />

        <ContentHeading type="h3" />
        <ContentText />
        <ContentText />
        <!-- quote -->
        <ContentQuote />
        <ContentText />

        <!-- gallery -->
        <ContentGallery />

        <!-- some more text -->
        <ContentText />
      </div>
    </UContainer>
  </div>
</template>

<style scoped></style>
