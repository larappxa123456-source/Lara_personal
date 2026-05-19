<script setup>
import workflowHeroImage from '@/assets/images/workflow空背景.png'
import workflowQuoteImage from '@/assets/images/期待.png'
import workflowShotOne from '@/assets/images/n8n_1.png'

const navItems = [
  { label: '关于我', to: '/home' },
  { label: '项目', to: '/project' },
  { label: '工作流', to: '/workflow' },
  { label: 'SOP', to: '/sop' },
  { label: 'Resume', to: '/resume' },
  { label: '主页', to: '/home' },
]

const categories = ['全部', 'AI & Content', 'Social Media', 'Personal Assistant', 'Data & Analysis', 'Other']

const workflows = [
  {
    title: 'AI Content Pipeline',
    desc: '自动生成皮皮星吖内容的AI自动化流程，提升内容生产效率。',
    date: '2026.04',
    status: 'Active',
    statusTone: 'warm',
    image: workflowShotOne,
    detailTo: '/workflow/ai-content-pipeline',
    tags: ['n8n', '皮皮星吖', 'GLM', '内容生成',],
  },
]
</script>

<template>
  <main class="workflow-view-page">
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

    <section class="workflow-view-hero">
      <div class="workflow-view-copy">
        <h1>Workflow Archive <span aria-hidden="true">✿</span></h1>
        <h2>自动化工作流档案馆</h2>
        <p>记录我设计与搭建的自动化工作流系统，让重复的事情自动发生。</p>
      </div>

      <img class="workflow-view-hero-image" :src="workflowHeroImage" alt="Workflow automation illustration" />
    </section>

    <section class="workflow-view-toolbar" aria-label="工作流筛选">
      <div class="workflow-view-categories">
        <button v-for="(category, index) in categories" :key="category" type="button" :class="{ 'is-active': index === 0 }">
          {{ category }}
        </button>
      </div>

      <div class="workflow-view-sort" aria-label="视图设置">
        <button class="workflow-sort-select" type="button">
          最新
          <span class="workflow-sort-chevron" aria-hidden="true"></span>
        </button>
        <button class="is-icon-active" type="button" aria-label="网格视图">⌘</button>
        <button type="button" aria-label="列表视图">☷</button>
      </div>
    </section>

    <section class="workflow-view-grid" aria-label="工作流档案">
      <article v-for="workflow in workflows" :key="workflow.title" class="workflow-archive-card">
        <div class="workflow-card-shot">
          <img :src="workflow.image" :alt="`${workflow.title} preview`" />
          <strong :class="`is-${workflow.statusTone}`">✦ {{ workflow.status }}</strong>
        </div>

        <div class="workflow-card-body">
          <div class="workflow-card-heading">
            <h3>{{ workflow.title }}</h3>
            <button type="button" aria-label="收藏">☆</button>
          </div>
          <p>{{ workflow.desc }}</p>

          <div class="workflow-card-tags">
            <span v-for="tag in workflow.tags" :key="tag">{{ tag }}</span>
          </div>

          <footer class="workflow-card-footer">
            <span><i aria-hidden="true">●</i>{{ workflow.date }}</span>
            <RouterLink :to="workflow.detailTo">View Details →</RouterLink>
          </footer>
        </div>
      </article>
    </section>

    <section class="workflow-view-quote" aria-label="工作流寄语">
      <div class="workflow-quote-copy">
        <span aria-hidden="true">“</span>
        <p>把重复的事情交给系统，<br />把创造的时间留给自己。</p>
      </div>

      <img class="workflow-quote-image" :src="workflowQuoteImage" alt="Lara working with laptop" />
    </section>
  </main>
</template>
