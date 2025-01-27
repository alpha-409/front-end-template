<template>
    <div class="bg-purple-200 p-4 rounded shadow">
      <h3 class="font-bold text-lg mb-2">{{ title }}</h3>
      <p class="text-sm">📅 {{ date }}</p>
      <p class="text-sm">📍 {{ location }}</p>
      <p class="text-sm">❗ {{ status }}</p>
      <div class="flex justify-end mt-4 space-x-2">
        <el-button size="small" type="primary">修改</el-button>
        <el-button size="small" type="danger">撤销</el-button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      title: String,
      date: String,
      location: String,
      status: String,
    },
  };
  </script>
  
  <style scoped>
  </style>
  