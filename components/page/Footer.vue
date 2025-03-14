<script setup lang="ts">
const footerLinks = [
  { to: '#', label: 'Pogoji uporabe' },
  { to: '#', label: 'Politika zasebnosti' },
]
</script>

<template>
  <footer class="pb-16 md:pb-40 footer mt-16 md:mt-28">
    <UContainer :ui="{ constrained: 'max-w-main' }">
      <!-- socials & newsletter -->
      <div class="footer-connect py-6 border-t-8 border-lines">
        <div class="grid md:grid-container md:grid-4-8-full md:gap-y-5">
          <div class="footer-socials pb-4 md:pb-0 mb-4 md:mb-0 border-b border-lines md:border-0">
            <p class="text-sm uppercase font-ultra mb-3">
              Spremljajte nas
            </p>
            <div class="flex items-center gap-3 footer-socials__icons">
              <SocialIcon type="facebook" />
              <SocialIcon type="linkedin" />
              <SocialIcon type="vine" />
            </div>
          </div>
          <div class="footer-newsletter">
            <p class="text-sm uppercase font-ultra mb-3">
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
        class="footer-info md:grid-container grid-4-8-full text-sm py-4 items-start border-t-8 border-lines"
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
          <ul class="md:flex items-center gap-y-2">
            <li
              v-for="link in footerLinks"
              :key="link.label"
            >
              <ULink
                :to="link.to"
                class="link-inline py-2 md:py-1 md:ps-3 inline-flex before:none md:before:block md:before:size-1 items-center md:before:me-3 before:bg-captions"
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
            class="link-inline inline-flex items-center gap-1"
            target="_blank"
          >
            Oblikovanje in razvoj spletnih strani: Humanfrog
            <img
              src="~/assets/img/humanfrog-logo.png"
              alt="Humagfrong logo icon"
            >
          </ULink>
        </div>
      </div>
    </UContainer>
  </footer>
</template>
