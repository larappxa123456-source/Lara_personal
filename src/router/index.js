import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: () => import('@/views/LandingView.vue'),
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/HomeView.vue'),
  },
  {
    path: '/resume',
    name: 'Resume',
    component: () => import('@/views/ResumeView.vue'),
  },
  {
    path: '/project',
    name: 'Project',
    component: () => import('@/views/ProjectView.vue'),
  },
  {
    path: '/project/ai-workflow-agent',
    name: 'ProjectAiWorkflowAgent',
    component: () => import('@/views/DetailPlaceholderView.vue'),
    props: {
      eyebrow: 'Project 01',
      title: '微博舆情可视化分析系统',
      backTo: '/project',
      backLabel: '返回项目页',
      videoKey: 'weibo',
    },
  },
  {
    path: '/project/personal-dashboard',
    name: 'ProjectPersonalDashboard',
    component: () => import('@/views/DetailPlaceholderView.vue'),
    props: {
      eyebrow: 'Project 02',
      title: 'Personal Dashboard',
      backTo: '/project',
      backLabel: '返回项目页',
    },
  },
  {
    path: '/project/content-automation-pipeline',
    name: 'ProjectContentAutomationPipeline',
    component: () => import('@/views/DetailPlaceholderView.vue'),
    props: {
      eyebrow: 'Project 03',
      title: 'Content Automation Pipeline',
      backTo: '/project',
      backLabel: '返回项目页',
    },
  },
  {
    path: '/workflow',
    name: 'Workflow',
    component: () => import('@/views/WorkflowView.vue'),
  },
  {
    path: '/workflow/ai-content-pipeline',
    name: 'WorkflowAiContentPipeline',
    component: () => import('@/views/DetailPlaceholderView.vue'),
    props: {
      eyebrow: 'Workflow Detail',
      title: 'AI Content Pipeline',
      backTo: '/workflow',
      backLabel: '返回工作流页',
      videoKey: 'rednote',
    },
  },
  {
    path: '/sop',
    name: 'SOP',
    component: () => import('@/views/SopView.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
