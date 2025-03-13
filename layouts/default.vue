<script setup lang="ts"></script>

<template>
  <div class="grid grid-rows-[auto_1fr_auto] bg-hf-bg min-h-dvh">
    <!-- announce route changes -->
    <NuxtRouteAnnouncer />
    <!-- header -->
    <PageHeader />
    <!-- content slot -->
    <slot />
    <!-- footer -->
    <PageFooter />
    <!-- side modal -->
    <USlideovers />
  </div>
</template>

<style scoped></style>
