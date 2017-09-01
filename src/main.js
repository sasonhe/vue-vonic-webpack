import Vue from 'vue'
import Vonic from 'vonic'

// Page Components
import Index from './components/Index.vue'
import About from './components/About.vue'
import Serch from './components/serch.vue'
// Routes
const routes = [
  { path: '/', component: Index },
  { path: '/about', component: About },
  { path: '/serch', component: Serch }
]

Vue.use(Vonic.app, {
  routes: routes
})
