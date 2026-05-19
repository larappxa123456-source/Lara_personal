<script setup>
import sopHeroImage from '@/assets/images/SOP.png'
import sopProjectImage from '@/assets/images/SOP项目.png'

const navItems = [
  { label: '关于我', to: '/home' },
  { label: '项目', to: '/project' },
  { label: '工作流', to: '/workflow' },
  { label: 'SOP', to: '/sop' },
  { label: 'Resume', to: '/resume' },
  { label: '主页', to: '/home' },
]

const categories = ['全部', 'AI Prompt', '内容生产', '自动化', '复盘模板']

const sopItems = [
  {
    no: '01',
    title: 'Prompt Engineering SOP',
    desc: '把需求拆解、上下文补齐、输出格式和验收标准整理成可复用的提示词流程。',
    tags: ['Prompt', 'AI', 'Checklist'],
    status: '已沉淀',
  },
  {
    no: '02',
    title: 'Content Workflow SOP',
    desc: '从选题、资料收集、初稿生成到审核发布，形成稳定的内容生产工作台。',
    tags: ['Content', 'Notion', 'Review'],
    status: '迭代中',
  },
  {
    no: '03',
    title: 'Automation Debug SOP',
    desc: '记录自动化节点排查、日志定位、重试策略和异常处理的标准步骤。',
    tags: ['n8n', 'Debug', 'Workflow'],
    status: '可复用',
  },
]
</script>

<template>
  <main class="sop-page">
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

    <section class="sop-hero">
      <div class="sop-hero-copy">
        <h1>SOP Cabinet <span aria-hidden="true">✿</span></h1>
        <h2>标准流程展示柜</h2>
        <p>把反复发生的工作整理成清晰、可复制、能交付的流程卡片。</p>
      </div>

      <img class="sop-hero-image" :src="sopHeroImage" alt="Lara holding an SOP checklist" />
    </section>

    <section class="sop-filters" aria-label="SOP 分类">
      <button v-for="(category, index) in categories" :key="category" type="button" :class="{ 'is-active': index === 0 }">
        {{ category }}
      </button>
    </section>

    <section class="sop-cabinet" aria-label="SOP 展示柜">
      <article v-for="item in sopItems" :key="item.no" class="sop-card">
        <div class="sop-card-media">
          <img :src="sopProjectImage" :alt="`${item.title} preview`" />
          <strong>{{ item.status }}</strong>
        </div>

        <div class="sop-card-body">
          <span>{{ item.no }}</span>
          <h3>{{ item.title }}</h3>
          <p>{{ item.desc }}</p>

          <div class="sop-card-tags">
            <i v-for="tag in item.tags" :key="tag">{{ tag }}</i>
          </div>

          <button type="button">查看流程 →</button>
        </div>
      </article>
    </section>

    <section class="sop-note">
      <p>更多 SOP 正在整理中，后续会逐步补充详细步骤、模板和示例。</p>
    </section>
  </main>
</template>
