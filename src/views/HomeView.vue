<script setup>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'

import Cloudscape from '@/components/Cloudscape.vue'
import aboutImage from '@/assets/images/关于我.png'
import contactImage from '@/assets/images/记录与联系.png'
import githubBubble from '@/assets/home/github-bubble.png'
import homeAvatar from '@/assets/home/home-avatar.png'
import projectBubble from '@/assets/home/project-bubble.png'
import redNoteBubble from '@/assets/home/red-note-bubble.png'
import resumeBubble from '@/assets/home/resume-bubble.png'
import sopTaskImage from '@/assets/images/SOP.png'
import sopBubble from '@/assets/home/sop-bubble.png'
import workflowBubble from '@/assets/home/workflow-bubble.png'

const router = useRouter()
const targetRef = ref(null)
const aboutRef = ref(null)
const contentRef = ref(null)
const dragState = ref(null)
const dropActive = ref(false)
const firstTouchY = ref(0)
const contentTouchY = ref(0)
const isContentOpen = ref(false)
const burstingBubbleId = ref(null)
const burstGhost = ref(null)
const redNoteLabel = '小红书'
const mantraTokens = ['\u8bb0\u5f55\u6210\u957f', '\u5206\u4eab\u70ed\u7231', '\u6301\u7eed\u521b\u9020']
const hintText = '\u70b9\u51fb\u6216\u62d6\u52a8\u5468\u56f4\u6ce1\u6ce1\uff0c\u63a2\u7d22\u6211\u7684\u4e0d\u540c\u677f\u5757'

const navItems = [
  { label: '关于我', section: 'about' },
  { label: '项目', to: '/project' },
  { label: '工作流', to: '/workflow' },
  { label: 'SOP', to: '/sop' },
  { label: 'Resume', to: '/resume' },
  { label: '主页', section: 'hero' },
]

const featureProjects = [
  {
    title: 'AI Workflow Agent',
    desc: '基于 AI 的自动化工作流助手',
    accent: '#8ecdf4',
    tags: ['AI', 'n8n', 'Agent'],
    icon: '🤖',
  },
  {
    title: 'Prompt Engineering SOP',
    desc: '提示词工程体系与 SOP 文档库',
    accent: '#f6a6a8',
    tags: ['AI', 'SOP', '文档'],
    icon: '📋',
  },
  {
    title: 'Personal Dashboard',
    desc: '个人数据看板与效率管理系统',
    accent: '#93e0d4',
    tags: ['Vue3', 'Dashboard', 'UX'],
    icon: '📊',
  },
  {
    title: 'AI Content Pipeline',
    desc: '内容生产自动化流水线',
    accent: '#d6b4ff',
    tags: ['Workflow', 'Automation', 'Content'],
    icon: '🚀',
  },
]

const workflowSteps = [
  { title: '灵感收集', desc: '捕捉想法', icon: '💡' },
  { title: 'AI 思考', desc: '创意生成与整理', icon: '⚙️' },
  { title: '设计', desc: '视觉与交互设计', icon: '↖' },
  { title: '开发实现', desc: '代码与功能落地', icon: '</>' },
  { title: '部署分享', desc: '上线与分享价值', icon: '🚀' },
]

const tools = ['ChatGPT', 'NotebookLM', 'Figma', 'Codex', 'n8n', 'Vercel', '小红书', 'Github']

const milestones = [
  { year: '2023', title: '开始探索', desc: '开始学习前端开发和数字产品设计' },
  { year: '2024', title: 'AI 初体验', desc: '接触 AI 工具，开启效率革命' },
  { year: '2025', title: '工作流实践', desc: '搭建自动化流程，沉淀个人方法' },
  { year: '2026', title: '创造与分享', desc: '构建个人数字花园，分享与帮助更多人' },
]

const notes = [
  { title: '如何用 AI 提升工作效率', date: '2025.05.10' },
  { title: '我的 Prompt 工程方法论', date: '2025.05.05' },
  { title: '搭建个人工作流的思考', date: '2025.04.28' },
]

const contactItems = [
  { label: 'Email', value: 'larappxa123456@gmail.com', href: 'mailto:larappxa123456@gmail.com' },
  { label: 'Github', value: 'Lara_github', href: 'https://github.com/larappxa123456-source' },
  { label: '小红书', value: '皮皮星吖', href: 'https://xhslink.com/m/5uVbk8utvw' },
  { label: '微信', value: 'ppxa123456', href: 'weixin://dl/add?username=ppxa123456' },
]

const bubbleItems = [
  {
    id: 'rednote',
    label: redNoteLabel,
    image: redNoteBubble,
    className: 'home-bubble--rednote',
    accent: '#ff8d9a',
    glow: 'rgba(255, 157, 172, 0.38)',
    to: 'https://xhslink.com/m/5uVbk8utvw',
    external: true,
  },
  {
    id: 'github',
    label: 'Github',
    image: githubBubble,
    className: 'home-bubble--github',
    accent: '#b69cff',
    glow: 'rgba(189, 177, 255, 0.38)',
    to: 'https://github.com/larappxa123456-source',
    external: true,
  },
  {
    id: 'sop',
    label: 'SOP',
    image: sopBubble,
    className: 'home-bubble--sop',
    accent: '#8ecdf4',
    glow: 'rgba(151, 215, 248, 0.34)',
    to: '/sop',
    external: false,
  },
  {
    id: 'project',
    label: 'Project',
    image: projectBubble,
    className: 'home-bubble--project',
    accent: '#efc36d',
    glow: 'rgba(255, 221, 142, 0.36)',
    to: '/project',
    external: false,
  },
  {
    id: 'resume',
    label: 'Resume',
    image: resumeBubble,
    className: 'home-bubble--resume',
    accent: '#f3a3b6',
    glow: 'rgba(255, 183, 201, 0.4)',
    to: '/resume',
    external: false,
  },
  {
    id: 'workflow',
    label: 'Workflow',
    image: workflowBubble,
    className: 'home-bubble--workflow',
    accent: '#7fc8aa',
    glow: 'rgba(167, 231, 206, 0.42)',
    to: '/workflow',
    external: false,
  },
]

const bubbleMap = Object.fromEntries(bubbleItems.map((item) => [item.id, item]))

const dragItem = computed(() => {
  if (!dragState.value) {
    return null
  }
  return bubbleMap[dragState.value.id] || null
})

const ghostStyle = computed(() => {
  if (!dragState.value || !dragItem.value) {
    return {}
  }

  return {
    left: `${dragState.value.x}px`,
    top: `${dragState.value.y}px`,
    '--bubble-accent': dragItem.value.accent,
    '--bubble-glow': dragItem.value.glow,
  }
})

const isPointOverTarget = (x, y) => {
  if (!targetRef.value) {
    return false
  }

  const rect = targetRef.value.getBoundingClientRect()
  return x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom
}

const navigateToItem = (item) => {
  if (item.external) {
    window.open(item.to, '_blank', 'noopener,noreferrer')
  } else {
    router.push(item.to)
  }
}

const activateItem = (item, burstPoint = null) => {
  if (burstingBubbleId.value || burstGhost.value) {
    return
  }

  if (burstPoint) {
    burstGhost.value = {
      item,
      x: burstPoint.x,
      y: burstPoint.y,
    }

    window.setTimeout(() => {
      navigateToItem(item)
      burstGhost.value = null
    }, 430)
    return
  }

  burstingBubbleId.value = item.id

  window.setTimeout(() => {
    navigateToItem(item)
    burstingBubbleId.value = null
  }, 430)
}

const startBubbleDrag = (item, event) => {
  if (event.button !== undefined && event.button !== 0) {
    return
  }

  event.currentTarget.setPointerCapture?.(event.pointerId)
  dragState.value = {
    id: item.id,
    pointerId: event.pointerId,
    startX: event.clientX,
    startY: event.clientY,
    x: event.clientX,
    y: event.clientY,
    moved: false,
  }
  dropActive.value = false
}

const moveBubbleDrag = (event) => {
  const state = dragState.value
  if (!state || state.pointerId !== event.pointerId) {
    return
  }

  state.x = event.clientX
  state.y = event.clientY

  if (!state.moved) {
    const distance = Math.hypot(event.clientX - state.startX, event.clientY - state.startY)
    state.moved = distance > 10
  }

  dropActive.value = state.moved && isPointOverTarget(event.clientX, event.clientY)
}

const endBubbleDrag = (item, event) => {
  const state = dragState.value
  if (!state || state.pointerId !== event.pointerId) {
    return
  }

  const shouldOpen = !state.moved || isPointOverTarget(event.clientX, event.clientY)

  dragState.value = null
  dropActive.value = false

  if (shouldOpen) {
    activateItem(item, state.moved ? { x: event.clientX, y: event.clientY } : null)
  }
}

const cancelBubbleDrag = (event) => {
  const state = dragState.value
  if (!state || state.pointerId !== event.pointerId) {
    return
  }

  dragState.value = null
  dropActive.value = false
}

const activateWithKeyboard = (item) => {
  activateItem(item)
}

const turnToAbout = () => {
  isContentOpen.value = true
  window.setTimeout(() => {
    contentRef.value?.scrollTo({ top: 0, behavior: 'smooth' })
  }, 360)
}

const turnToHero = () => {
  isContentOpen.value = false
}

const handleFirstPageWheel = (event) => {
  if (event.deltaY > 20) {
    event.preventDefault()
    turnToAbout()
  }
}

const activateNavItem = (item) => {
  if (item.section === 'about') {
    turnToAbout()
    return
  }

  if (item.section === 'hero') {
    turnToHero()
  }
}

const handleFirstPageTouchStart = (event) => {
  firstTouchY.value = event.touches[0]?.clientY || 0
}

const handleFirstPageTouchEnd = (event) => {
  const endY = event.changedTouches[0]?.clientY || 0
  if (firstTouchY.value - endY > 40) {
    turnToAbout()
  }
}

const handleContentWheel = (event) => {
  if (event.deltaY < -20 && contentRef.value?.scrollTop <= 0) {
    event.preventDefault()
    turnToHero()
  }
}

const handleContentTouchStart = (event) => {
  contentTouchY.value = event.touches[0]?.clientY || 0
}

const handleContentTouchEnd = (event) => {
  const endY = event.changedTouches[0]?.clientY || 0
  if (endY - contentTouchY.value > 48 && contentRef.value?.scrollTop <= 0) {
    turnToHero()
  }
}
</script>

<template>
  <main class="site-home" :class="{ 'is-content-open': isContentOpen }">
    <header class="site-nav" aria-label="首页导航">
      <RouterLink class="site-brand" to="/" aria-label="Lara's World">
        <span class="brand-flower">✿</span>
        <strong>Lara's World</strong>
      </RouterLink>

      <nav class="nav-pill" aria-label="页面章节">
        <template v-for="item in navItems" :key="item.label">
          <button v-if="item.section" type="button" @click="activateNavItem(item)">{{ item.label }}</button>
          <RouterLink v-else :to="item.to">{{ item.label }}</RouterLink>
        </template>
      </nav>

      <RouterLink class="hello-button" to="/home">
        <span>Say Hello</span>
        <i aria-hidden="true">♥</i>
      </RouterLink>
    </header>

    <section
      id="top"
      class="home-page"
      aria-label="Lara Home hub"
      @wheel="handleFirstPageWheel"
      @touchstart.passive="handleFirstPageTouchStart"
      @touchend.passive="handleFirstPageTouchEnd"
    >
      <Cloudscape />

      <span class="home-spark home-spark--one"></span>
      <span class="home-spark home-spark--two"></span>
      <span class="home-spark home-spark--three"></span>
      <span class="home-spark home-spark--four"></span>
      <span class="home-heart home-heart--left"></span>
      <span class="home-heart home-heart--right"></span>
      <span class="hero-deco hero-deco--flower hero-deco--flower-one"></span>
      <span class="hero-deco hero-deco--flower hero-deco--flower-two"></span>
      <span class="hero-deco hero-deco--flower hero-deco--flower-three"></span>
      <span class="hero-deco hero-deco--star hero-deco--star-one"></span>
      <span class="hero-deco hero-deco--star hero-deco--star-two"></span>
      <span class="hero-deco hero-deco--star hero-deco--star-three"></span>
      <span class="hero-deco hero-deco--bubble hero-deco--bubble-one"></span>
      <span class="hero-deco hero-deco--bubble hero-deco--bubble-two"></span>
      <span class="hero-deco hero-deco--bubble hero-deco--bubble-three"></span>
      <span class="hero-deco hero-deco--comet hero-deco--comet-one"></span>
      <span class="hero-deco hero-deco--comet hero-deco--comet-two"></span>
      <span class="cloud-glitter cloud-glitter--one"></span>
      <span class="cloud-glitter cloud-glitter--two"></span>
      <span class="cloud-glitter cloud-glitter--three"></span>
      <span class="cloud-glitter cloud-glitter--four"></span>
      <span class="cloud-glitter cloud-glitter--five"></span>
      <span class="cloud-glitter cloud-glitter--six"></span>
      <span class="cloud-glitter cloud-glitter--seven"></span>
      <span class="cloud-glitter cloud-glitter--eight"></span>

      <section class="home-scene" aria-label="Lara Home hub">
        <div class="home-orbit home-orbit--left" aria-hidden="true"></div>
        <div class="home-orbit home-orbit--right" aria-hidden="true"></div>

        <button
          v-for="item in bubbleItems"
          :key="item.id"
          type="button"
        class="home-bubble"
        :class="[
          item.className,
          {
            'is-origin-dragging': dragState?.id === item.id,
            'is-bursting': burstingBubbleId === item.id,
          },
        ]"
          :style="{ '--bubble-accent': item.accent, '--bubble-glow': item.glow }"
          @pointerdown="startBubbleDrag(item, $event)"
          @pointermove="moveBubbleDrag($event)"
          @pointerup="endBubbleDrag(item, $event)"
          @pointercancel="cancelBubbleDrag($event)"
          @keydown.enter.prevent="activateWithKeyboard(item)"
          @keydown.space.prevent="activateWithKeyboard(item)"
        >
          <span class="home-bubble-shell">
            <svg class="home-bubble-glass" viewBox="0 0 120 120" aria-hidden="true" focusable="false">
              <circle class="bubble-glass-base" cx="60" cy="60" r="52" />
              <circle class="bubble-glass-rim" cx="60" cy="60" r="44" />
              <path class="bubble-glass-shine" d="M31 33C39 24 51 20 64 21" />
              <path class="bubble-glass-shine bubble-glass-shine--small" d="M25 54C24 59 24 64 25 69" />
              <circle class="bubble-glass-dot" cx="92" cy="33" r="5" />
            </svg>
            <span class="home-bubble-halo"></span>
            <img class="home-bubble-icon" :src="item.image" :alt="`${item.label} icon`" draggable="false" />
            <span v-if="burstingBubbleId === item.id" class="bubble-burst" aria-hidden="true">
              <i v-for="dot in 10" :key="dot"></i>
            </span>
          </span>
          <span class="home-bubble-label">{{ item.label }}</span>
        </button>

        <div ref="targetRef" class="home-center" :class="{ 'is-drop-active': dropActive }">
          <div class="home-center-ring"></div>
          <div class="home-center-ring home-center-ring--inner"></div>
          <img class="home-center-avatar" :src="homeAvatar" alt="Lara avatar" draggable="false" />
        </div>

      <div v-if="dragItem" class="home-bubble home-bubble--ghost" :style="ghostStyle" aria-hidden="true">
        <span class="home-bubble-shell">
          <svg class="home-bubble-glass" viewBox="0 0 120 120" aria-hidden="true" focusable="false">
              <circle class="bubble-glass-base" cx="60" cy="60" r="52" />
              <circle class="bubble-glass-rim" cx="60" cy="60" r="44" />
              <path class="bubble-glass-shine" d="M31 33C39 24 51 20 64 21" />
              <path class="bubble-glass-shine bubble-glass-shine--small" d="M25 54C24 59 24 64 25 69" />
              <circle class="bubble-glass-dot" cx="92" cy="33" r="5" />
            </svg>
            <span class="home-bubble-halo"></span>
            <img class="home-bubble-icon" :src="dragItem.image" :alt="`${dragItem.label} icon`" draggable="false" />
        </span>
        <span class="home-bubble-label">{{ dragItem.label }}</span>
      </div>

      <div
        v-if="burstGhost"
        class="home-bubble home-bubble--ghost home-bubble--release-burst is-bursting"
        :style="{
          left: `${burstGhost.x}px`,
          top: `${burstGhost.y}px`,
          '--bubble-accent': burstGhost.item.accent,
          '--bubble-glow': burstGhost.item.glow,
        }"
        aria-hidden="true"
      >
        <span class="home-bubble-shell">
          <svg class="home-bubble-glass" viewBox="0 0 120 120" aria-hidden="true" focusable="false">
            <circle class="bubble-glass-base" cx="60" cy="60" r="52" />
            <circle class="bubble-glass-rim" cx="60" cy="60" r="44" />
            <path class="bubble-glass-shine" d="M31 33C39 24 51 20 64 21" />
            <path class="bubble-glass-shine bubble-glass-shine--small" d="M25 54C24 59 24 64 25 69" />
            <circle class="bubble-glass-dot" cx="92" cy="33" r="5" />
          </svg>
          <span class="home-bubble-halo"></span>
          <img class="home-bubble-icon" :src="burstGhost.item.image" :alt="`${burstGhost.item.label} icon`" draggable="false" />
          <span class="bubble-burst" aria-hidden="true">
            <i v-for="dot in 10" :key="dot"></i>
          </span>
        </span>
        <span class="home-bubble-label">{{ burstGhost.item.label }}</span>
      </div>
    </section>

      <section class="home-copy" aria-label="Home introduction">
        <p class="home-mantra">
          <span v-for="token in mantraTokens" :key="token">{{ token }}</span>
        </p>
        <p class="home-hint">{{ hintText }}</p>
      </section>

      <button class="page-turn-button" type="button" aria-label="进入关于我" @click="turnToAbout">
        <span></span>
      </button>
    </section>

    <div
      ref="contentRef"
      class="content-page"
      @wheel="handleContentWheel"
      @touchstart.passive="handleContentTouchStart"
      @touchend.passive="handleContentTouchEnd"
    >
    <section id="about" ref="aboutRef" class="home-section about-section">
      <div class="section-media">
        <img :src="aboutImage" alt="Lara holding coffee" />
      </div>
      <div class="section-card about-card">
        <p class="section-kicker">✿ 关于我</p>
        <h1>你好，我是 <span>Lara</span></h1>
        <p>一个热爱 AI、产品、运营与创造的女孩。喜欢把复杂流程变得温柔，也喜欢把灵感变成真正能落地的作品。</p>
        <p>这里记录了我的成长、项目、工作流与热爱的事情。</p>
        <div class="tag-row">
          <span>AI Creator</span>
          <span>Workflow Designer</span>
          <span>Frontend Explorer</span>
          <span>Digital Garden Lover</span>
        </div>
        <div class="stat-grid">
          <strong>10+<small>项目经验</small></strong>
          <strong>5+<small>完成项目</small></strong>
          <strong>∞<small>持续探索</small></strong>
          <strong>100%<small>热爱生活</small></strong>
        </div>
      </div>
    </section>

    <section id="projects" class="home-section project-section">
      <div class="section-heading">
        <h2>✿ 精选项目</h2>
        <a href="/project">查看全部 →</a>
      </div>
      <div class="project-grid">
        <article
          v-for="project in featureProjects"
          :key="project.title"
          class="project-card"
          :style="{ '--project-accent': project.accent }"
        >
          <div class="project-preview">
            <span>{{ project.icon }}</span>
          </div>
          <h3>{{ project.title }}</h3>
          <p>{{ project.desc }}</p>
          <div class="mini-tags">
            <span v-for="tag in project.tags" :key="tag">{{ tag }}</span>
          </div>
        </article>
      </div>
    </section>

    <section id="workflow" class="home-section workflow-section">
      <div class="section-heading">
        <h2>✿ 工作流程</h2>
      </div>
      <div class="workflow-layout">
        <div class="workflow-track">
          <article v-for="step in workflowSteps" :key="step.title" class="workflow-step">
            <div class="step-icon">{{ step.icon }}</div>
            <h3>{{ step.title }}</h3>
            <p>{{ step.desc }}</p>
          </article>
        </div>
        <img class="workflow-figure" :src="sopTaskImage" alt="Lara workflow SOP" />
      </div>
      <div class="tool-row">
        <span>常用工具</span>
        <i v-for="tool in tools" :key="tool">{{ tool }}</i>
      </div>
    </section>

    <section class="home-section growth-section">
      <div class="section-heading">
        <h2>✿ 成长足迹</h2>
      </div>
      <div class="growth-map">
        <svg class="growth-wave" viewBox="0 0 1060 210" aria-hidden="true" preserveAspectRatio="none">
          <path class="growth-wave-main" d="M38 142C92 30 174 68 238 89C302 110 344 121 416 89C496 54 552 83 604 99C668 119 716 118 786 78C858 36 918 58 1023 83" />
          <path class="growth-wave-bottom" d="M72 174C153 201 250 169 330 182C420 196 500 168 584 184C686 204 740 166 828 176C904 184 953 173 1012 130" />
          <path class="growth-wave-loop" d="M44 141C12 150 13 197 51 201" />
          <circle cx="38" cy="142" r="4" />
          <circle cx="238" cy="89" r="4" />
          <circle cx="416" cy="89" r="4" />
          <circle cx="604" cy="99" r="4" />
          <circle cx="786" cy="78" r="4" />
          <circle cx="1023" cy="83" r="4" />
          <circle cx="330" cy="182" r="4" />
          <circle cx="584" cy="184" r="4" />
        </svg>

        <article
          v-for="(milestone, index) in milestones"
          :key="milestone.year"
          class="growth-node"
          :class="`growth-node--${index + 1}`"
        >
          <strong>{{ milestone.year }}</strong>
          <h3>{{ milestone.title }}</h3>
          <p>{{ milestone.desc }}</p>
        </article>

        <article class="growth-future">
          <strong>未来...</strong>
          <h3>持续探索</h3>
          <p>创造更多可能</p>
        </article>

        <span class="growth-star growth-star--one"></span>
        <span class="growth-star growth-star--two"></span>
        <span class="growth-flower"></span>
      </div>
    </section>

    <section id="resume" class="home-section resume-section">
      <div class="section-card resume-card">
        <p class="section-kicker">Resume</p>
        <h2>把兴趣、工具和作品整理成可持续成长的系统。</h2>
        <p>我关注 AI 自动化、前端体验、内容工作流和个人知识管理，希望每个项目都既好看，也真正好用。</p>
        <a href="/resume">查看 Resume →</a>
      </div>
    </section>

    <section id="contact" class="home-section contact-section">
      <div class="note-card">
        <h2>最新笔记</h2>
        <ul>
          <li v-for="note in notes" :key="note.title">
            <span>{{ note.title }}</span>
            <time>{{ note.date }}</time>
          </li>
        </ul>
        <RouterLink to="/project">查看更多笔记 →</RouterLink>
      </div>

      <div class="contact-figure">
        <img :src="contactImage" alt="Lara contact" />
      </div>

      <div class="contact-card">
        <h2>联系我</h2>
        <dl>
          <div v-for="item in contactItems" :key="item.label">
            <dt>{{ item.label }}</dt>
            <dd>
              <a :href="item.href" target="_blank" rel="noopener noreferrer">{{ item.value }}</a>
            </dd>
          </div>
        </dl>
      </div>
    </section>
    </div>
  </main>
</template>
