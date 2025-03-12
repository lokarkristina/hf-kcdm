<script setup lang="ts">
const state = reactive({
  email: undefined,
  terms: false,
})

function onFormSubmit(event) {
  // @todo functionality
  console.log(event.data)
}
</script>

<template>
  <UForm
    :state="state"
    @submit="onFormSubmit"
  >
    <UFormGroup name="email">
      <UInput
        v-model="state.email"
        placeholder="Vnesite svoj e-naslov"
      />
    </UFormGroup>
    <UFormGroup name="terms">
      <label>
        Strinjam se s
        <a
          href="#"
          target="_blank"
        >pogoji uporabe</a>.
        <UCheckbox v-model="state.terms" />
      </label>
    </UFormGroup>
    <UButton type="submit">
      Submit
    </UButton>
  </UForm>
</template>

<style scoped></style>
