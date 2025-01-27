import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  // 初始化 token：从 localStorage 中获取
  const token = ref(localStorage.getItem('authToken') || null)

  // 计算属性：判断是否已认证
  const isAuthenticated = computed(() => !!token.value)

  // 设置 token，同时同步到 localStorage
  function setToken(newToken) {
    token.value = newToken
    localStorage.setItem('authToken', newToken) // 持久化
  }

  // 清除 token，同时从 localStorage 中移除
  function clearToken() {
    token.value = null
    localStorage.removeItem('authToken') // 清除持久化数据
  }

  return {
    token,
    isAuthenticated,
    setToken,
    clearToken,
  }
})
