<script setup lang="ts">
const { direction, size } = defineProps<{
  direction: 'left' | 'right'
  size: string
}>()

const pathLg = computed(() => {
  const paths = {
    left: 'm0 4.5 7.5 4.33V.17zm6.75.75H67v-1.5H6.75z',
    right: 'm67 4.5-7.5 4.33V.17zm-6.75.75H0v-1.5h60.25z',
  }
  return paths[direction]
})

const pathMd = computed(() => {
  const paths = {
    left: 'm0 4.5 7.5 4.33V.17zm6.75.75H45v-1.5H6.75z',
    right: 'm45 4.5-7.5 4.33V.17zm-6.75.75H0v-1.5h38.25z',
  }
  return paths[direction]
})

const pathSm = computed(() => {
  const paths = {
    left: 'M.5 4.5 8 8.83V.17zm6.75.75H25.5v-1.5H7.25z',
    right: 'M25.5 4.5 18 8.83V.17zm-6.75.75H.5v-1.5h18.25z',
  }
  return paths[direction]
})
</script>

<template>
  <!-- @info why are arrows different sizes, seems weirdly inconsistent -->
  <!-- @todo would be nice to have the same viewBox, so only d would need to be changed? -->
  <svg
    v-if="size === 'lg'"
    width="67"
    height="9"
    viewBox="0 0 67 9"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class="w-[1.563rem] md:w-[2.813rem]"
  >
    <path
      :d="pathLg"
      fill="currentColor"
    />
  </svg>

  <svg
    v-if="size === 'md'"
    width="45"
    height="9"
    viewBox="0 0 45 9"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class="w-[1.563rem] md:w-[2.813rem]"
  >
    <path
      :d="pathMd"
      fill="currentColor"
    />
  </svg>

  <svg
    v-if="size === 'sm'"
    width="26"
    height="9"
    viewBox="0 0 26 9"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class="w-[1.563rem] md:w-[2.813rem]"
  >
    <path
      :d="pathSm"
      fill="currentColor"
    />
  </svg>
</template>

<style scoped></style>
