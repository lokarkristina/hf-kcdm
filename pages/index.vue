<script setup lang="ts"></script>

<template>
  <div>
    <!-- title area -->
    <TitleArea
      page="home"
      :breadcrumbs="false"
    >
      <template #title>
        Aktualno
      </template>
      <template #image>
        <img
          src="/images/image-awards.png"
          alt="Fotografija z dogodka"
        >
      </template>
    </TitleArea>
  </div>
</template>

<style scoped></style>
