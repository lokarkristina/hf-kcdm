<script setup lang="ts">
const footerLinks = [
  { to: '#', label: 'Pogoji uporabe' },
  { to: '#', label: 'Politika zasebnosti' },
]
</script>

<template>
  <!-- the bottom spacer is waaay too big on design, so reduce it -->
  <footer class="pb-5 mt-16 md:pb-10 footer md:mt-28">
    <UContainer :ui="{ constrained: 'max-w-main' }">
      <!-- socials & newsletter -->
      <div class="py-6 border-t-8 footer-connect border-lines">
        <div class="grid md:grid-container md:grid-4-8-full md:gap-y-5">
          <div class="pb-4 mb-4 border-b footer-socials md:pb-0 md:mb-0 border-lines md:border-0">
            <p class="mb-3 text-sm uppercase font-ultra">
              Spremljajte nas
            </p>
            <div class="flex items-center gap-3 footer-socials__icons">
              <IconSocial type="facebook" />
              <IconSocial type="linkedin" />
              <IconSocial type="vine" />
            </div>
          </div>
          <div class="footer-newsletter">
            <p class="mb-3 text-sm uppercase font-ultra">
              Naročite se na naše e-novice
            </p>
            <div class="footer-form">
              <NewsletterForm />
            </div>
          </div>
        </div>
      </div>

      <!-- project info -->
      <div
        class="items-start py-4 text-sm border-t-8 footer-info md:grid-container grid-4-8-full border-lines"
      >
        <div>
          <p class="text-primary font-ultra">
            Arhivske vsebine
          </p>
          <p class="p-formatted text-captions">
            Lorem ipsum dolor sit amet consectetur. Tempus blandit enim eget
            nunc enim. Tincidunt feugiat id eleifend eget. Fames condimentum
            scelerisque sollicitudin feugiat tellus lorem tristique iaculis.
            Mauris feugiat placerat.
          </p>
        </div>
        <!-- contributers logos -->
        <ul
          class="grid grid-cols-2 items-center [&_img]:object-contain [&_img]h-full [&_img]:pb-5"
        >
          <li>
            <img
              src="/images/image-footer-1.png"
              alt="Footer logo 1"
            >
          </li>
          <!-- the spacings here aren't consistent, figure it out it seems -->
          <!-- @todo i think there's a better way of adding this code -->
          <!-- @todo idk how should bottom spacer work
           bc from figma values - looks bad in combination with border -->
          <li class="border-l border-lines ps-5 ms-5">
            <img
              src="/images/image-footer-2.png"
              alt="Footer logo 2"
            >
          </li>
        </ul>
      </div>

      <!-- legal info -->
      <div
        class="footer-legal text-captions grid md:grid-rows-2 md:grid-cols-[auto_1fr] items-center gap-y-2 md:gap-y-0.5 text-sm border-t-2 border-lines pt-4"
      >
        <p class="md:row-[1]">
          &copy; Kompetenčni center za Design Management
        </p>
        <nav class="md:row-[1]">
          <ul class="items-center md:flex gap-y-2">
            <li
              v-for="link in footerLinks"
              :key="link.label"
            >
              <ULink
                :to="link.to"
                class="inline-flex items-center py-2 link-inline md:py-1 md:ps-3 before:none md:before:block md:before:size-1 md:before:me-3 before:bg-captions"
              >
                {{ link.label }}
              </ULink>
            </li>
          </ul>
        </nav>

        <div class="authors md:row-[2] md:col-span-2">
          <ULink
            to="#"
            external
            class="inline-flex items-center link-inline gap-1"
            target="_blank"
          >
            Oblikovanje in razvoj spletnih strani: Humanfrog
            <img
              src="/logos/humanfrog-logo.png"
              alt="Humanfrog logo icon"
            >
          </ULink>
        </div>
      </div>
    </UContainer>
  </footer>
</template>
