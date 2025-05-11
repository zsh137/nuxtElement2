// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@element-plus/nuxt", "@pinia/nuxt"],
  elementPlus: {},
  css: ["animate.css/animate.min.css"],

  // 全局参数配置
  runtimeConfig: {
    //只在服务端渲染时使用
    baseURL: "http://localhost:3000",
    issever: true,
    public: {
      //在客户端渲染和服务端渲染都使用
      projectCompany: "公司名称",
    },
  },
});
