<script setup lang="ts"></script>

<template>
  <div>
    <!-- title area -->
    <TitleArea :show-link-back="false">
      <template #title>
        Novice
      </template>
    </TitleArea>

    <!-- list of news -->
    <UContainer :ui="{ constrained: 'max-w-main' }">
      <NewsList />
    </UContainer>
  </div>
</template>

<style scoped></style>
