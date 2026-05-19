<script setup>
import projectBottomImage from '@/assets/images/project底部.png'
import projectHeroImage from '@/assets/images/项目1.png'
import projectSideImage from '@/assets/images/期待.png'
import helloTalkImage from '@/assets/images/HT.png'
import quickStartImage from '@/assets/images/快开始.png'

const navItems = [
  { label: '关于我', to: '/home' },
  { label: '项目', to: '/project' },
  { label: '工作流', to: '/workflow' },
  { label: 'SOP', to: '/sop' },
  { label: 'Resume', to: '/resume' },
  { label: '主页', to: '/home' },
]

const filters = ['全部项目', 'AI & Automation', 'Frontend', 'Design', 'Tools', 'Explorations']

const projects = [
  {
    no: '01',
    title: '微博舆情可视化分析系统',
    desc: '一个帮助用户实时监测微博热点、分析舆论趋势并辅助决策的舆情分析系统。',
    role: '产品设计 · 全栈开发',
    tags: ['Flask', '爬虫', 'Transformers', 'BERT模型', 'Echarts图表'],
    points: ['实时监测网络舆情，降低企业公关风险', '多维度数据可视化，提高决策效率', '自动化舆情分析，减少人工成本'],
    image: projectHeroImage,
    detailTo: '/project/ai-workflow-agent',
    flipped: false,
  },
  {
    no: '02',
    title: 'Hello Talk产品体验报告',
    desc: '从HelloTlk 如何让陌生人愿意开口说第一句话的角度 体验软件',
    role: '产品体验报告 · 竞品分析',
    tags: ['报告文档'],
    points: ['与Tandem进行产品对比', '从多角度出发分析', '学习软件怎么才能留存'],
    image: helloTalkImage,
    detailTo: '/project/personal-dashboard',
    flipped: true,
  },
  {
    no: '03',
    title: '快开始 APP',
    desc: '一个帮学生党和助职场新人，从知道目标但迷茫、拖延、无法开始，使用AI辅助进行快速的任务拆解，并及时调用番茄时钟强制开始的APP',
    role: '产品经理 · 全栈开发 · 竞品分析',
    tags: ['next.js', 'Supabase', 'AI API', 'Vibe coding', 'React'],
    points: ['不是单纯的时间管理工具，更是督促你快点开始的朋友', 'AI拆解步骤，直接导入番茄钟开始，自动记录在时间视图模块', '可视化快速复盘，及时反馈你的时间情况'],
    image: quickStartImage,
    detailTo: '/project/content-automation-pipeline',
    flipped: false,
  },
]
</script>

<template>
  <main class="project-page">
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

    <section class="project-hero">
      <div class="project-hero-copy">
        <h1>Project Archive <span aria-hidden="true">☁</span></h1>
        <p>记录我创造过的数字作品与灵感实验。</p>
      </div>
      <img class="project-hero-image" :src="projectSideImage" alt="Lara creating projects" />
    </section>

    <section class="project-filters" aria-label="项目分类">
      <button v-for="(filter, index) in filters" :key="filter" type="button" :class="{ 'is-active': index === 0 }">
        {{ filter }}
      </button>
    </section>

    <section class="project-list" aria-label="精选项目">
      <article v-for="project in projects" :key="project.no" class="archive-card" :class="{ 'is-flipped': project.flipped }">
        <div class="archive-shot">
          <img :src="project.image" :alt="`${project.title} preview`" />
        </div>

        <div class="archive-info">
          <strong>{{ project.no }}</strong>
          <h2>{{ project.title }}</h2>
          <p>{{ project.desc }}</p>
          <h3>我的角色</h3>
          <p>{{ project.role }}</p>
          <h3>技术栈</h3>
          <div class="archive-tags">
            <span v-for="tag in project.tags" :key="tag">{{ tag }}</span>
          </div>
          <h3>项目亮点</h3>
          <ul>
            <li v-for="point in project.points" :key="point">{{ point }}</li>
          </ul>
          <div class="archive-actions">
            <RouterLink :to="project.detailTo">查看详情 →</RouterLink>
            <a href="https://github.com/larappxa123456-source" target="_blank" rel="noopener noreferrer">Lara_github ↗</a>
            <a href="#">Live Demo ↗</a>
          </div>
        </div>
      </article>
    </section>

    <section class="project-contact">
      <div class="project-quote">
        <span aria-hidden="true">“</span>
        <p>每一个项目，都是一次探索与创造的旅程。期待未来能创造更多有趣且有价值的作品。</p>
        <a href="mailto:larappxa@gmail.com">联系我 →</a>
      </div>

      <div class="project-contact-list">
        <dl>
          <div>
            <dt>Email</dt>
            <dd><a href="mailto:larappxa123456@gmail.com">larappxa123456@gmail.com</a></dd>
          </div>
          <div>
            <dt>Github</dt>
            <dd><a href="https://github.com/larappxa123456-source" target="_blank" rel="noopener noreferrer">Lara_github</a></dd>
          </div>
          <div>
            <dt>小红书</dt>
            <dd><a href="https://xhslink.com/m/5uVbk8utvw" target="_blank" rel="noopener noreferrer">皮皮星吖</a></dd>
          </div>
          <div>
            <dt>微信</dt>
            <dd><a href="weixin://dl/add?username=ppxa123456">ppxa123456</a></dd>
          </div>
        </dl>
      </div>

      <img class="project-bottom-image" :src="projectBottomImage" alt="Lara drinking tea" />
    </section>
  </main>
</template>
