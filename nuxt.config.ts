// https://nuxt.com/docs/api/configuration/nuxt-config
import path from 'node:path'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  modules: [
    // '@element-plus/nuxt',
    '@pinia/nuxt',
  ],
  css: [
    // 'element-plus/dist/index.css',
    // 'element-plus/theme-chalk/display.css',
    "@/assets/css/fonts.css",
    "@/assets/css/global.css",
    "@/assets/css/base.css",
  
  ],
  app: {
    buildAssetsDir: '/hl_web/',
    rootId: "hl_app",
    // head: {
    //   script: [
    //     {src: "/load.min.js", type: "text/javascript" },
 
    //   ],
    // }
  },
  devServer: {
    host: '0.0.0.0',
    port: 3000
  },
  plugins: [
    {
      src: '@/plugins/wangeditor',
      mode: 'client',
    },
    {
      src: '@/plugins/pinia'
    },
    {
      src: '@/plugins/add-body-class.server'
    }
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/colors.scss" as *;'
        }
      }
    },
    plugins: [
        createSvgIconsPlugin({
            iconDirs: [path.resolve(process.cwd(), 'assets/svg')]
        }),
    ],

  },
  nitro: {
    devProxy: {
      [process.env.API_PROXY_PATH || '/api/**']: {
        target: process.env.API_PROXY_TARGET || 'http://localhost:8000/api/**',
        changeOrigin: true,
        prependPath: true
      }
    },
    // 该配置用于服务端请求转发
    routeRules: {
      [process.env.API_PROXY_PATH || '/api/**']: {
        proxy: process.env.API_PROXY_TARGET || 'http://localhost:8000/api/**',
      }
    }
  },
  runtimeConfig: {
    public: {
      baseUrl: process.env.PUBLIC_BASE_URL,
    }
  },
  experimental: {
    inlineSSRStyles: false,
  },
  layouts: {
    default: null, // 不使用布局
  }
  
})
