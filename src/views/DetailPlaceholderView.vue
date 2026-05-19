<script setup>
import rednoteWorkflowVideo from '@/assets/video/小红书n8n.mp4'
import weiboAnalysisVideo from '@/assets/video/微博分析视频.mp4'

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
    default: '返回',
  },
  videoKey: {
    type: String,
    default: '',
  },
})

const videos = {
  rednote: rednoteWorkflowVideo,
  weibo: weiboAnalysisVideo,
}
</script>

<template>
  <main class="detail-placeholder-page">
    <section class="detail-placeholder-card">
      <p>{{ eyebrow }}</p>
      <h1>{{ title }}</h1>

      <div v-if="videos[videoKey]" class="detail-video-frame">
        <video :src="videos[videoKey]" controls playsinline preload="metadata"></video>
      </div>
      <span v-else>内容占位中</span>

      <RouterLink :to="backTo">{{ backLabel }} →</RouterLink>
    </section>
  </main>
</template>
