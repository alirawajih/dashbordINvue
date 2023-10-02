import { createRouter, createWebHistory } from 'vue-router'

import ecommerce from "@/views/ecommerce/ecommerce";
import analytics from "@/views/analytics/analytics"
import login from "@/views/login/login"
import notfound from "@/components/notfound/notfound.vue"
import templetform from "@/views/templetform.vue"
import store from '@/store';
import { isLogin, incressExpiry } from '@/userManegment';
import { ability } from '@/ability/defineApilty'
import { chickTime, Settimeout } from '@/jsc/timeout'
import notAuthe from '@/components/notfound/notAuthe.vue'
import email from '@/components/email.vue'
import chat from "@/components/chat.vue"
import user from "@/components/user.vue"
import apexchartExampel from "../views/apexchart/allapexchartExampel.vue"
import GoogleChart from "../views/googlechart/googlechart.vue"
import homePage from "../components/homePage.vue"
import inputForm from "../components/inputForm/inputForm.vue"
const routes = [
    {
        path: '/', redirect: { name: 'ecommerce' }
    },


    {
        path: '/404', name: 'NotFound',
        components: {
            default: notfound,
            fullPage: notfound
        }
    },
    {
        path: '/:catchAll(.*)', redirect: '/dashboard/notfound'
    },


    {
        path: '/dashboard',
        name: 'dashboard',
        component: templetform,
        children: [
            {
                path: 'analytics',
                name: 'analytics',
                component: analytics,
                meta: {
                    subject: 'Auth',
                    action: 'read'
                }
            }, {
                path: 'ecommerce',
                name: 'ecommerce',
                component: ecommerce,
                meta: {
                    subject: 'ACL',
                    action: 'read'
                }
            }, {
                path: 'apexchart',
                name: 'apexchart',
                component: apexchartExampel,
                meta: {
                    subject: 'ACL',
                    action: 'read'
                }
            }, {
                path: 'notfound',
                name: 'notfound',
                component: notfound,
                meta: {
                    subject: 'ACL',
                    action: 'read'
                }
            }
            , {
                path: 'notAuth',
                name: 'notAuth',
                component: notAuthe,
                meta: {
                    subject: 'ACL',
                    action: 'read'
                }
            }, {
                path: 'email',
                name: 'email',
                component: email,
                meta: {
                    subject: 'Auth',
                    action: 'read'
                }
            }
            , {
                path: 'chat',
                name: 'chat',
                component: chat,
                meta: {
                    subject: 'Auth',
                    action: 'read'
                }
            },
            {
                path: 'GoogleChart', name: 'GoogleChart', component: GoogleChart,
                meta: {
                    subject: 'ACL',
                    action: 'read'
                }
            }, {
                path: 'user',
                name: 'user',
                component: user,
                meta: {
                    subject: 'ACL',
                    action: 'read'
                }
            },
            {
                path:'inputForm',
                name:"inputForm",
                component:inputForm,
                meta: {
                    subject: 'ACL',
                    action: 'read'
                }
            }
        ],
    },

    ,

    {
        path: '/login/:name',
        name: 'login',
        components: {
            default: login,
            fullPage: login
        }, meta: {
            subject: 'ACL',
            action: 'read'
        },
        props: true 
    },
    {
        path: '/homePage',
        name: 'homePage',
        components: {
            default: homePage,
            fullPage: homePage
        }, meta: {
            subject: 'ACL',
            action: 'read'
        }
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        // always scroll to top
        return { top: 0 }
    },
});
router.beforeEach((to, from, next) => {
    document.title = `dashbord|${to.name}`;
    // chickTime()
    let action = null
    let subject = null
    const canNavigate = to.matched.some(route => {
        action = route.meta.action
        subject = route.meta.subject
        return ability.can(action, subject)
    })

    if (!isLogin() && to.name != "homePage" && to.name != "login") {
        router.replace({ name: "homePage" })
    }
    

    if (isLogin() && to.name == "login") {
        router.replace({ name: "ecommerce" })
    }

    if (!canNavigate) {
        router.replace({ name: "notAuth", query: { notuthe: to.name } })
    } else { next() }



})
router.afterEach(() => {
    // Remove initial loading
    const appLoading = document.getElementById('loading-bg')
    if (appLoading) {
        appLoading.style.display = 'none'
    }
})
export default router