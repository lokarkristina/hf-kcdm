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

    <UContainer :ui="{ constrained: 'max-w-main' }">
      <div class="grid-container grid-4-8">
        <!-- featured news -->
        <NewsFeatured />

        <!-- news lists -->
        <div class="grid grid-cols-7 gap-x-8">
          <!-- 'Aktualno' -->
          <FeaturedList
            type="news"
            :count="5"
            class="col-[1/5]"
          >
            Aktualno
          </FeaturedList>

          <!-- 'Napovedujemo' -->
          <FeaturedList
            type="events"
            :count="3"
            class="col-[5/-1]"
          >
            Napovedujemo
          </FeaturedList>
        </div>
      </div>
    </UContainer>
  </div>
</template>

<style scoped></style>
