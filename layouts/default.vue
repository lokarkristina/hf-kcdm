<script setup lang="ts"></script>

<template>
  <div class="grid grid-rows-[auto_1fr_auto] bg-bg min-h-dvh">
    <!-- announce route changes -->
    <NuxtRouteAnnouncer />
    <!-- header -->
    <AppHeader />
    <!-- content slot -->
    <slot />
    <!-- footer -->
    <AppFooter />
  </div>
</template>

<style scoped></style>
