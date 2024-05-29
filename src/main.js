

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'

import HomeContent from './components/HomeContent.vue'
import About from './components/About.vue'
import Portfolio from './components/Portfolio.vue'
import Skills from './components/Skills.vue'
import Resume from './components/Resume.vue'
import Contact from './components/Contact.vue'
import Cats from './components/Cats.vue'
import NavMenu from './components/NavMenu.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: HomeContent },
        { path: '/about', component: About },
        { path: '/portfolio', component: Portfolio },
        { path: '/skills', component: Skills },
        { path: '/resume', component: Resume },
        { path: '/contact', component: Contact },
        { path: '/cats', component: Cats },
    ]
});


const app = createApp(App)

app.component('nav-menu', NavMenu)

app.use(router)
app.mount('#app')
