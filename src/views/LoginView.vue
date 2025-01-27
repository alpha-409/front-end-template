<template>
  <div class="min-h-screen flex items-center justify-center bg-cover bg-center" :style="{ backgroundImage: `url(${backgroundImage})` }">
    <div class="bg-white rounded-lg shadow-xl overflow-hidden flex max-w-4xl w-full">
      <div class="bg-primary text-white p-12 flex-1">
        <h2 class="text-3xl font-bold mb-6">AI辅助师范生</h2>
        <h3 class="text-xl mb-8">技能评测系统</h3>
        <div class="flex justify-between items-center">
          <img src="/loginPCTool.webp" alt="设备图标" class="w-full h-auto object-contain" />
        </div>
      </div>
      <div class="p-12 flex-1">
        <h2 class="text-2xl font-semibold text-gray-800 mb-6">欢迎登录</h2>
        <form @submit.prevent="handleLogin" class="space-y-6">
          <div class="flex items-center mb-6">
            <el-icon class="mr-4 text-primary">
              <user />
            </el-icon>
            <el-input v-model="username" id="username" name="username" type="text" required class="w-full" placeholder="请输入学号" />
          </div>
          <div class="flex items-center mb-6">
            <el-icon class="mr-4 text-primary">
              <lock />
            </el-icon>
            <el-input v-model="password" id="password" name="password" type="password" required class="w-full" placeholder="请输入密码" />
          </div>
          <div class="flex items-center justify-between">
            <el-checkbox v-model="rememberPassword">记住密码</el-checkbox>
            <!-- <a href="#" class="text-sm text-purple-600 hover:text-purple-500">忘记密码？</a> -->
            <a href="#" class="text-sm hover:text-[#A46297]" style="color: #A46297;">忘记密码？</a>

          </div>
          <el-button type="primary" native-type="submit" class="w-full !rounded-button whitespace-nowrap cursor-pointer hover:!bg-primary">登 录</el-button>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { ElMessage } from 'element-plus';
import { ElInput, ElButton, ElCheckbox, ElIcon } from 'element-plus';
import { User, Lock } from '@element-plus/icons-vue'; // 引入element-plus的图标
import { login } from '@/api';
import { useAuthStore } from '@/stores/auth';
import router from '@/router';

const username = ref('');
const password = ref('');
const rememberPassword = ref(false);
const backgroundImage = '/background.jpg';  // 使用public文件夹中的背景图

const handleLogin = async () => {
  if (!username.value || !password.value) {
    ElMessage.error('请输入学号和密码！');
    return;
  }

  try {
    const response = await login({ username: username.value, password: password.value });
    if (response.code === 200) {
      ElMessage.success(response.message);
      const authStore = useAuthStore(); // 实例化 store
      authStore.setToken(response.data.token); // 保存 token
      router.push('/'); // 跳转到首页
    } else {
      ElMessage.error(response.message);
    }
  } catch (error) {
    ElMessage.error('登录失败，请检查网络！');
    console.error(error);
  }
};

</script>

<style scoped>
/* 鼠标悬停按钮时改变光标 */
.cursor-pointer:hover {
  cursor: pointer;
}
/* 禁止按钮悬停时背景色变化 */
.el-button:hover {
  border-color: var(--el-button-border-color) !important; /* 保持原边框色 */
}

/* 设置图标颜色为主题色 */
.text-primary {
  color: #A46297;
}
</style>
