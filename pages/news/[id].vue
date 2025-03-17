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
      <div class="md:grid-container md:grid-4-8">
        <!-- image -->
        <ContentImage />

        <!-- date -->
        <p
          class="inline-block pt-2 pb-5 mb-5 border-b news-detail__date date pe-6 justify-self-start border-ocean-green-500"
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
