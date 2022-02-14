
 import {createRouter, createWebHistory} from 'vue-router'

 import Login from './components/Login.vue'

 import Profile from './components/Profile.vue'

 

 
const routes = [
    {path: '/', component: Login},
    {path: '/Profile', component: Profile},
]

const router = createRouter({
    history : createWebHistory(process.env.BASE_URL),
    routes
})

export default router