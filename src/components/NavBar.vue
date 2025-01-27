<template>
    <nav class="bg-purple-500 text-white p-4 flex justify-between items-center">
      <div class="flex items-center">
        <img src="https://via.placeholder.com/40" alt="Logo" class="h-8 w-8 mr-2" />
        <span class="font-bold text-lg">GUANGXI NORMAL UNIVERSITY</span>
      </div>
      <ul class="flex space-x-6">
        <li class="hover:text-gray-300 cursor-pointer">测评申请</li>
        <li class="hover:text-gray-300 cursor-pointer">评测报告</li>
        <li class="hover:text-gray-300 cursor-pointer">评测数据</li>
        <li class="hover:text-gray-300 cursor-pointer">系统数据</li>
      </ul>
      <div class="flex items-center">
        <span class="mr-2">李小明</span>
        <el-avatar size="small" src="https://via.placeholder.com/40" />
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: "Navbar",
  };
  </script>
  
  <style scoped>
  </style>
  