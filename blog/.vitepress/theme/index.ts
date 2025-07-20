// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import Theme from 'vitepress/theme'
import './style.css'
import './css/custom.css'
import ArticleCard from './components/ArticleCard.vue'
import CardContainer from './components/CardContainer.vue'
import BlogLayout from './layouts/Blog.vue'
import AuthorBox from './components/AuthorBox.vue'



export default {
  ...Theme,
  Layout: () => {
    return h(Theme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
    app.component('ArticleCard', ArticleCard)
    app.component('CardContainer', CardContainer)
    app.component('blog', BlogLayout)
    app.component('AuthorBox', AuthorBox)
  }
}
