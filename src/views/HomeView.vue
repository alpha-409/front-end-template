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
            <div class="relative">
              <img src="https://ai-public.mastergo.com/ai/img_res/e4bc5818ca7568ca8dbcc27fe9d53321.jpg" alt="用户头像" class="h-10 w-10 rounded-full cursor-pointer">
              <span class="absolute bottom-0 right-0 bg-green-500 rounded-full h-3 w-3"></span>
            </div>
            <el-icon class="ml-2 cursor-pointer"><Menu /></el-icon>
          </div>
        </div>
      </header>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue';
  import { Calendar, Location, InfoFilled, Menu } from '@element-plus/icons-vue';
  
  const activeTab = ref('application');
  const currentPage = ref(1);
  
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
  
  
