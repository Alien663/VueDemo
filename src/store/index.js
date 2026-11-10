import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
  state: () => ({
    Layout: 'default',
    isLogin: true,
  }),
  actions: {
    setLayout(layout) {
      this.Layout = layout;
    },
    setIsLogin(isLogin) {
      this.isLogin = isLogin;
    }
  }
})