<script setup>
const props = defineProps({
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

const videoSources = {
  rednote:
    'https://lara-video-weibo-1307617103.cos.ap-guangzhou.myqcloud.com/%E5%B0%8F%E7%BA%A2%E4%B9%A6n8n.mp4',
  weibo:
    'https://lara-video-weibo-1307617103.cos.ap-guangzhou.myqcloud.com/%E5%BE%AE%E5%8D%9A%E5%88%86%E6%9E%90%E8%A7%86%E9%A2%91.mp4',
}

const videoSrc = videoSources[props.videoKey] || ''
</script>

<template>
  <main class="detail-placeholder-page">
    <section class="detail-placeholder-card">
      <p>{{ eyebrow }}</p>
      <h1>{{ title }}</h1>
      <div v-if="videoSrc" class="detail-video-frame">
        <video :src="videoSrc" controls playsinline preload="metadata"></video>
      </div>
      <span>Content coming soon.</span>
      <RouterLink :to="backTo">{{ backLabel }} -></RouterLink>
    </section>
  </main>
</template>
