<template>
  <div class="col-[1/-1]">
    <!-- title area -->
    <TitleArea :show-link-back="false">
      <template #title>
        Aktualno
      </template>
    </TitleArea>

    <UContainer :ui="{ constrained: 'max-w-main' }">
      <!-- @todo this should be solved with another layout, where only content changes, I believe -->
      <div class="-mt-24 md:grid-container md:grid-4-8 md:-mt-72">
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
