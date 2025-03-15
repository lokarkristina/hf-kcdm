<script setup lang="ts"></script>

<template>
  <div>
    <!-- title area -->
    <TitleArea :show-link-back="false">
      <template #title>
        Aktualno
      </template>
    </TitleArea>

    <UContainer :ui="{ constrained: 'max-w-main' }">
      <div class="grid-container grid-4-8">
        <!-- featured news -->
        <NewsFeatured />

        <!-- news lists -->
        <div
          class="grid grid-cols-7 gap-x-8 border-t border-ocean-green-500 pt-3.5 mt-6"
        >
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
