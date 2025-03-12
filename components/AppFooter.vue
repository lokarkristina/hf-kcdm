<script setup lang="ts"></script>

<template>
  <footer class="footer">
    <UContainer :ui="{ constrained: 'max-w-main' }">
      <!-- socials & newsletter -->
      <div class="footer-connect">
        <div class="grid grid-cols-split-40-60">
          <div class="footer-socials">
            <p class="text-sm uppercase font-ultra">
              Spremljajte nas
            </p>
            <div class="footer-socials__icons flex items-center gap-3">
              <SocialIcon type="facebook" />
              <SocialIcon type="linkedin" />
              <SocialIcon type="vine" />
            </div>
          </div>
          <div class="footer-newsletter">
            <p class="text-sm uppercase font-ultra">
              Naročite se na naše e-novice
            </p>
            <div class="footer-form">
              <NewsletterForm />
            </div>
          </div>
        </div>
      </div>

      <!-- project info -->
      <div class="footer-info grid grid-cols-split-40-60">
        <div>
          <p>Arhivske vsebine</p>
          <p>
            Lorem ipsum dolor sit amet consectetur. Tempus blandit enim eget
            nunc enim. Tincidunt feugiat id eleifend eget. Fames condimentum
            scelerisque sollicitudin feugiat tellus lorem tristique iaculis.
            Mauris feugiat placerat.
          </p>
        </div>
        <div>
          <ul>
            <li>Logo 1</li>
            <li>Logo 2</li>
          </ul>
        </div>
      </div>

      <!-- legal info -->
      <div class="footer-legal">
        <span>&copy; Kompetenčni center za Design Management </span>
        <nav>
          <ul>
            <li>
              <ULink to="#">Pogoji uporabe</ULink>
            </li>
            <li>
              <ULink to="#">Politika zasebnosti</ULink>
            </li>
          </ul>
        </nav>

        <div class="authors">
          <a href="#">
            Oblikovanje in razvoj spletnih strani: Humanfrog
            <img
              src="~/assets/img/humanfrog-logo.png"
              alt="Humagfrong logo icon"
            >
          </a>
        </div>
      </div>
    </UContainer>
  </footer>
</template>

<style scoped>
/* @todo using tailwind variables doen't work */
</style>
