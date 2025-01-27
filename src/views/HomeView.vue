<!-- 代码已包含 CSS：使用 TailwindCSS , 安装 TailwindCSS 后方可看到布局样式效果 -->

<template>
    <div class="min-h-screen bg-gray-100">
      <!-- 顶部导航栏 -->
      <header class="bg-pink-600 text-white py-4">
        <div class="container mx-auto flex justify-between items-center px-4">
          <div class="flex items-center">
            <img src="../assets/gxnu.png" alt="广西师范大学 Logo" class="h-10 w-10 mr-3">
            <h1 class="text-xl font-bold">广西师范大学</h1>
          </div>
          <div class="flex items-center">
            <span class="mr-4">AI辅助师范生技能评测系统 师范生</span>
            <div class="relative">
              <img src="https://ai-public.mastergo.com/ai/img_res/e4bc5818ca7568ca8dbcc27fe9d53321.jpg" alt="用户头像" class="h-10 w-10 rounded-full cursor-pointer">
              <span class="absolute bottom-0 right-0 bg-green-500 rounded-full h-3 w-3"></span>
            </div>
            <el-icon class="ml-2 cursor-pointer"><Menu /></el-icon>
          </div>
        </div>
      </header>
  
      <!-- 主要内容区域 -->
      <main class="container mx-auto mt-6 px-4">
        <!-- 标签页 -->
        <el-tabs v-model="activeTab" class="mb-6">
          <el-tab-pane label="测评申请" name="application"></el-tab-pane>
          <el-tab-pane label="评测报告" name="report"></el-tab-pane>
          <el-tab-pane label="评测数据" name="data"></el-tab-pane>
          <el-tab-pane label="系统数据" name="system"></el-tab-pane>
        </el-tabs>
  
        <!-- 操作按钮 -->
        <div class="mb-6 space-x-4">
          <el-button type="primary" class="!rounded-button bg-pink-500 hover:bg-pink-600">预约评测</el-button>
          <el-button type="primary" class="!rounded-button bg-pink-500 hover:bg-pink-600">立即评测</el-button>
        </div>
  
        <!-- 评测卡片列表 -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="(card, index) in evaluationCards" :key="index" class="bg-pink-100 rounded-lg p-6 shadow-md">
            <h3 class="text-xl font-bold mb-4">{{ card.title }}</h3>
            <div class="space-y-2">
              <p><el-icon><Calendar /></el-icon> {{ card.date }}</p>
              <p><el-icon><Location /></el-icon> {{ card.location }}</p>
              <p><el-icon><InfoFilled /></el-icon> {{ card.status }}</p>
            </div>
            <div class="mt-4 space-x-2">
              <el-button type="primary" class="!rounded-button bg-pink-500 hover:bg-pink-600">修改</el-button>
              <el-button type="danger" class="!rounded-button">撤销</el-button>
            </div>
          </div>
        </div>
  
        <!-- 分页器 -->
        <div class="mt-8 flex justify-center">
          <el-pagination
            :total="100"
            :page-size="20"
            :current-page="currentPage"
            layout="prev, pager, next"
            @current-change="handlePageChange"
          />
        </div>
      </main>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue';
  import { Calendar, Location, InfoFilled, Menu } from '@element-plus/icons-vue';
  
  const activeTab = ref('application');
  const currentPage = ref(1);
  
  const evaluationCards = [
    {
      title: '形容词、副词',
      date: '2024年09月30日 第一节课',
      location: '数学楼201',
      status: '待评测'
    },
    {
      title: '时间状语从句',
      date: '2024年09月30日 第二节课',
      location: '数学楼201',
      status: '系统正在评测'
    },
    {
      title: '动词时态',
      date: '2024年09月28日 第五节课',
      location: '数学楼201',
      status: '等待专家评测'
    },
    {
      title: '动词第三人称单数',
      date: '2024年09月27日 第七节课',
      location: '数学楼201',
      status: '正在生成评测报告'
    },
    {
      title: '主动语态',
      date: '2024年09月24日 第七节课',
      location: '数学楼201',
      status: '正在生成评测报告'
    },
    {
      title: '被动语态',
      date: '2024年09月23日 第九节课',
      location: '数学楼201',
      status: '正在生成评测报告'
    }
  ];
  
  const handlePageChange = (page: number) => {
    currentPage.value = page;
  };
  </script>
  
  <style scoped>
  .el-tabs__item.is-active {
    color: #ec4899 !important;
  }
  .el-tabs__active-bar {
    background-color: #ec4899 !important;
  }
  </style>
  
  