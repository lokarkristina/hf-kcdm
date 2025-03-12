<script setup lang="ts"></script>

<template>
  <div>
    <!-- header -->
    <AppHeader />
    <!-- announce route changes -->
    <NuxtRouteAnnouncer />
    <!-- content slot -->
    <slot />
    <!-- footer -->
    <AppFooter />
  </div>
</template>

<style scoped></style>
