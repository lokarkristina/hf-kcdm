<script setup lang="ts">
import { formatDate } from '#imports'
import content from '~/db/content'
</script>

<template>
  <div class="news-detail">
    <!-- title area -->
    <!-- @todo add new layout za content area i think. -->
    <TitleArea
      page="list"
      :show-link-back="true"
    >
      <!-- @todo maybe this needs to go out of the title area -->
      <template #title>
        {{ content.h1 }}
      </template>
    </TitleArea>

    <UContainer :ui="{ constrained: 'max-w-main' }">
      <div class="grid-container grid-4-8">
        <!-- image -->
        <AppImage />

        <!-- date -->
        <p class="news-detail__date">
          {{ formatDate(content.date) }}
        </p>

        <!-- teaser text -->
        <AppText
          :includes="['text']"
          :teaser="true"
        />

        <!-- content -->
        <AppText :includes="['text', 'link']" />
        <AppHeading type="h2" />
        <AppText :includes="['text', 'list']" />
        <AppHeading type="h3" />
        <AppText />

        <!-- video -->
        <AppVideo />

        <AppHeading type="h2" />
        <AppText />
        <AppText :includes="['text', 'list']" />
        <AppHeading type="h3" />
        <AppText />
        <!-- image with desc. -->
        <AppImage />

        <AppHeading type="h2" />
        <AppText />
        <!-- highlight -->
        <PtHighlight />

        <AppHeading type="h3" />
        <AppText />
        <AppText />
        <!-- quote -->
        <AppQuote />
        <AppText />

        <!-- gallery -->
        <AppGallery />

        <!-- some more text -->
        <AppText />
      </div>
    </UContainer>
  </div>
</template>

<style scoped></style>
