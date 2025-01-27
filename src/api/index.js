import axios from 'axios'

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 
    import.meta.env.MODE === 'development' ? '/api' : 'https://api.example.com',
  timeout: 10000
})

// 请求拦截器
instance.interceptors.request.use(
  config => {
    // 可以在这里添加token等
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截器
instance.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    return Promise.reject(error)
  }
)

export const login = (data) => {
  return instance.post('/student/auth/login', data)
}

export default instance
