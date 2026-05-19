<script setup>
import resumeImage from '@/assets/images/resume.png'

const navItems = [
  { label: '关于我', to: '/home' },
  { label: '项目', to: '/project' },
  { label: '工作流', to: '/workflow' },
  { label: 'SOP', to: '/sop' },
  { label: 'Resume', to: '/resume' },
  { label: '主页', to: '/home' },
]

const tags = ['AI Builder', 'Workflow Designer', 'Product enthusiast', 'Digital Garden Lover']

const stats = [
  { label: '10+ 项目经验', icon: '▣' },
  { label: '5+ 完成项目', icon: '▤' },
  { label: '100% 热爱生活', icon: '♡' },
  { label: '∞ 持续探索', icon: '↻' },
]
</script>

<template>
  <main class="resume-page">
    <header class="site-nav" aria-label="一级导航">
      <RouterLink class="site-brand" to="/" aria-label="Lara's World">
        <span class="brand-flower">✿</span>
        <strong>Lara's World</strong>
      </RouterLink>

      <nav class="nav-pill" aria-label="页面导航">
        <RouterLink v-for="item in navItems" :key="item.label" :to="item.to">{{ item.label }}</RouterLink>
      </nav>

      <RouterLink class="hello-button" to="/home">
        <span>Say Hello</span>
        <i aria-hidden="true">♥</i>
      </RouterLink>
    </header>

    <section class="resume-stage" aria-label="Lara resume">
      <div class="resume-art-card">
        <img :src="resumeImage" alt="Lara resume character card" />
      </div>

      <aside class="resume-info-card">
        <div class="resume-ribbon">角色信息</div>
        <h1>Lara Zhao <span aria-hidden="true">☁</span></h1>

        <div class="resume-tags">
          <span v-for="tag in tags" :key="tag">{{ tag }}</span>
        </div>

        <p class="resume-quote">“把复杂的事情变简单，把普通的想法变有趣。”</p>

        <ul class="resume-stats">
          <li v-for="stat in stats" :key="stat.label">
            <i aria-hidden="true">{{ stat.icon }}</i>
            <span>{{ stat.label }}</span>
          </li>
        </ul>

        <div class="resume-actions">
          <a class="resume-primary" href="/resume.pdf" download>下载简历 PDF ↓</a>
          <a class="resume-secondary" href="mailto:larappxa@gmail.com">查看详细档案 →</a>
        </div>
      </aside>
    </section>
  </main>
</template>
