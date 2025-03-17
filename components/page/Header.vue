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
  <header class="py-6 header">
    <UContainer :ui="{ constrained: 'max-w-main' }">
      <div class="items-center md:grid-container md:grid-4-8-full">
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

        <div class="flex items-center">
          <!-- main navigation -->
          <nav>
            <UVerticalNavigation
              :links="links"
              :ui="{ base: 'uppercase' }"
            />
          </nav>

          <!-- mobile navigation -->
          <button
            class="md:hidden"
            @click="openSlideover"
          >
            <UIcon
              name="i-heroicons-bars-3"
              class="w-5 h-5"
              title="Open menu"
            />
          </button>

          <!-- search -->
          <div class="ml-auto header-search">
            <UButton icon="i-heroicons-magnifying-glass" />
          </div>

          <!-- extra links -->
          <UButton
            :ui="{ base: 'mx-4 border-2 border-dotted', rounded: 'rounded-none' }"
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
        </div>
      </div>
    </UContainer>
  </header>
</template>
