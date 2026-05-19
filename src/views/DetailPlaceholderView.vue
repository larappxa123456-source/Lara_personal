<script setup>
defineProps({
  eyebrow: {
    type: String,
    default: 'Detail',
  },
  title: {
    type: String,
    default: 'Coming Soon',
  },
  backTo: {
    type: String,
    default: '/home',
  },
  backLabel: {
    type: String,
    default: 'Back',
  },
  videoKey: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <main class="detail-placeholder-page">
    <section class="detail-placeholder-card">
      <p>{{ eyebrow }}</p>
      <h1>{{ title }}</h1>
      <span>Content coming soon.</span>
      <RouterLink :to="backTo">{{ backLabel }} -></RouterLink>
    </section>
  </main>
</template>
