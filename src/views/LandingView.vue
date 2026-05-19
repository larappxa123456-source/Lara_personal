<script setup>
import { useRouter } from 'vue-router'

import avatarImage from '@/assets/images/avatar-transparent.png'
import Cloudscape from '@/components/Cloudscape.vue'

const router = useRouter()

const enterHome = () => {
  router.push('/home')
}
</script>

<template>
  <main
    class="landing-page"
    role="button"
    tabindex="0"
    aria-label="进入 Home"
    @click="enterHome"
    @keydown.enter="enterHome"
    @keydown.space.prevent="enterHome"
  >
    <Cloudscape />

    <div class="orbit-line orbit-one"></div>
    <div class="orbit-line orbit-two"></div>

    <div class="deco heart heart-one"></div>
    <div class="deco heart heart-two"></div>
    <div class="deco heart heart-three"></div>
    <div class="deco heart heart-four"></div>
    <div class="deco heart heart-five"></div>
    <div class="deco star star-one"></div>
    <div class="deco star star-two"></div>
    <div class="deco star star-three"></div>
    <div class="deco star star-four"></div>
    <div class="deco star star-five"></div>
    <div class="deco star star-six"></div>
    <div class="deco star star-seven"></div>
    <div class="deco flower flower-one"></div>
    <div class="deco flower flower-two"></div>
    <div class="deco flower flower-three"></div>
    <div class="deco flower flower-four"></div>
    <div class="deco flower flower-five"></div>
    <div class="deco dot dot-one"></div>
    <div class="deco dot dot-two"></div>
    <div class="deco dot dot-three"></div>
    <div class="deco dot dot-four"></div>
    <div class="deco dot dot-five"></div>
    <div class="deco dot dot-six"></div>
    <div class="deco dot dot-seven"></div>
    <div class="deco bubble bubble-one"></div>
    <div class="deco bubble bubble-two"></div>
    <div class="deco bubble bubble-three"></div>
    <div class="deco bubble bubble-four"></div>

    <section class="landing-content" aria-label="欢迎来到 Lara 的个人世界">
      <div class="avatar-stage">
        <div class="avatar-glow"></div>
        <img class="landing-avatar" :src="avatarImage" alt="Lara 头像" />
      </div>

      <h1 class="landing-title">
        <span>欢迎来到</span>
        <strong>Lara</strong>
        <span>的个人世界</span>
      </h1>

      <p class="landing-subtitle">随意点击任意地方，开启探索</p>

      <div class="tap-hint" aria-hidden="true">
        <span>点击任意处</span>
        <i></i>
      </div>
    </section>
  </main>
</template>
