import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Login from './components/Login.vue'
import ProfileList from './components/ProfileList.vue'
import ProfileDetail from './components/ProfileDetail.vue'
import './style.css'

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  { path: '/profiles', component: ProfileList },
  { path: '/profile/:id', component: ProfileDetail, props: true }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')


