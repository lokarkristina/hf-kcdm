<script setup lang="ts">
import { formatDate } from '#imports'
import newsDetail from '~/db/newsDetail'
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
        {{ newsDetail.h1 }}
      </template>
    </TitleArea>

    <!-- image -->

    <!-- date -->
    <p class="news-detail__date">
      {{ formatDate(newsDetail.date) }}
    </p>

    <!-- teaser text -->
    <AppText
      :includes="['text']"
      :teaser="true"
    />

    <!-- content -->
    <AppText :includes="['text', 'link']" />
    <AppHeading size="2" />
    <AppText :includes="['text', 'list']" />
    <AppHeading size="3" />
    <AppText />

    <!-- video -->
    <AppVideo />

    <AppHeading size="2" />
    <AppText />
    <AppText :includes="['text', 'list']" />
    <AppHeading size="3" />
    <AppText />
    <!-- image with desc. -->
    <AppImage />

    <AppHeading size="2" />
    <AppText />
    <!-- highlight -->
    <AppHighlight />

    <AppHeading size="3" />
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
</template>

<style scoped></style>
