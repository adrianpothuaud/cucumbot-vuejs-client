import Vue from 'vue'
import Router from 'vue-router'

import SuitesList from '@/components/SuitesList'
import SuiteForm from '@/components/SuiteForm'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: SuitesList
        },
        {
            path: '/new',
            component: SuiteForm
        }
    ]
})