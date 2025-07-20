import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Panic Nation",
  description: "Talk of the Nation!",
  base: '/PN-Blog/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/PN-Blog/' },
    ],
    search: {
      provider: 'local'
    }
  }
})