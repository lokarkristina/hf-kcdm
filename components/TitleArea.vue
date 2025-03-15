<script setup lang="ts">
const { showLinkBack } = defineProps<{
  showLinkBack: boolean
}>()

// @todo figure out the logic on how the
// nav gets built
const sideLinks = [
  { label: 'Novice', to: '/news' },
  { label: 'Prihajajoči dogodki', to: '/' },
  { label: 'Pretekli dogodki', to: '/' },
]
</script>

<template>
  <!-- @todo add container constrained to default -->
  <UContainer :ui="{ constrained: 'max-w-main' }">
    <!-- @todo a je vse ok here? -->
    <div
      class="font-ultra title-area gap-x-40 text-white grid-container grid-rows-[auto_minmax(206px,1fr)_auto]"
    >
      <div
        class="col-[1/-1] row-[1/3] grid grid-rows-[auto_1fr] grid-cols-subgrid bg-ocean-green py-7 px-6"
      >
        <!-- back link -->
        <template v-if="showLinkBack">
          <ULink
            to="/news"
            inactive-class="flex items-center gap-2.5 mb-7 uppercase text-sm col-[6/-1]"
          >
            <!-- @todo get breakpoints into the js and v-if so it doesn't render -->
            <span class="hidden md:block">
              <AppArrow
                direction="left"
                size="lg"
              />
            </span>
            <span class="md:hidden">
              <AppArrow
                direction="left"
                size="sm"
              />
            </span>

            <span> Novice </span>
          </ULink>
        </template>

        <h1 class="col-[6/-1] text-big-title leading-[0.9]">
          <slot name="title" />
        </h1>
      </div>

      <!-- back to frontpage & side navigation links -->
      <aside
        class="grid grid-rows-subgrid col-[1/5] row-[1/-1] my-7 px-6 border-e-2 border-ocean-green-600"
      >
        <div class="row-[1] link-back col-[1] hidden md:block">
          <!-- link to homepage -->
          <ULink
            to="/"
            class="flex items-center gap-2.5 uppercase text-sm flex-shrink-0"
          >
            <AppArrow
              direction="left"
              size="md"
            />
            <span> Aktualno </span>
          </ULink>
        </div>
        <div class="row-[-1] side-navigation uppercase text-primary">
          <!-- side navigation -->
          <UVerticalNavigation
            :links="sideLinks"
            :ui="{
              base: 'border-l-6 border-ocean-green-600 ',
              rounded: 'rounded-none',
              size: 'text-sm',
              font: 'font-ultra',
              padding: 'ps-4',
            }"
          />
        </div>
      </aside>
    </div>
  </UContainer>
</template>
