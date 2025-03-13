<script setup lang="ts">
import { SidebarModal } from '#components'

const slideover = useSlideover()

function openSlideover() {
  slideover.open(SidebarModal, {
    onClose: slideover.close,
  })
}

const links = [
  { label: 'Znanje', to: '#' },
  { label: 'Aktualno', to: '#' },
  { label: 'O KCDM', to: '#' },
]
</script>

<template>
  <header class="header">
    <UContainer :ui="{ constrained: 'max-w-main' }">
      <!-- page logo -->
      <NuxtLink
        to="/"
        class="header-logo"
      >
        <img
          src="/logos/kcdm-logo.png"
          alt="KCDM logo"
        >
      </NuxtLink>

      <!-- main navigation -->
      <nav>
        <UVerticalNavigation
          :links="links"
          :ui="{ base: 'uppercase' }"
        />
      </nav>

      <!-- mobile navigation -->
      <button @click="openSlideover">
        <UIcon
          name="i-heroicons-bars-3"
          class="w-5 h-5"
          title="Open menu"
        />
      </button>

      <!-- search -->
      <div class="header-search">
        <UButton icon="i-heroicons-magnifying-glass" />
      </div>

      <!-- extra links -->
      <UButton
        :ui="{ base: 'border-dotted', rounded: 'rounded-full' }"
        variant="ghost"
        class="uppercase"
        square
        title="Search"
      >
        Platforma DNA
      </UButton>

      <div class="language-switcher">
        <!-- @todo set it up properly -->
        EN
      </div>
    </UContainer>
  </header>
</template>

<style scoped></style>
