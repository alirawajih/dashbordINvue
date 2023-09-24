import { createStore } from "vuex";
// import { router } from '../router/index';
// import defineApilty from '@/ability/ability';
import {Settimeout} from "@/jsc/timeout";
import {ability} from "@/ability/defineApilty";
import {initialAbility} from '@/ability/config';
import dashbordone from "./dashbordone";


const store = createStore({
    modules: {
        dashbordone: dashbordone,
      },

    state: {
        theme:localStorage.getItem('theme')?localStorage.getItem('theme'):'dark',
        userIN: JSON.parse(localStorage.getItem("user")),
        count: 7,
        name: 'ali',
        menuopen: 'close',
        menu: true,
        navnbarsize: 'navBarUp',
        componentsize: 'components',
        userlogin: {},

        sockets: {
            connect: function () {
                console.log('socket connected')
            },
            customEmit: function (data) {
                console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)')
            }
        },


        users: [
            {
                email: 'ali@yahoo.com',
                password: '123',
                Firstname:'ali',
                lastname:'ahmad',
                position: 'admin',
                image:"https://placekitten.com/300/300",
                ability: [
                    {
                      action: 'manage',
                      subject: 'all',
                    },
                  ],
                  
            },
            {
                email: 'ali1@yahoo.com',
                password: '1234',
                Firstname:'ali1',
                lastname:'ahmad1',
                position: 'user',
                ability: [
                    {
                        action: 'read',
                        subject: 'ACL',
                      },
                  ],
                  
            },

        ],
        dashbordname:['DashbordOne','DashbordTow'],
        
        loginMessage: '',
        auth: false,

    },

    mutations: {
      
        // logout(state) {
        //     // localStorage.removeItem('user')
        //         // localStorage.removeItem('timeout')
        //         // state.auth = false
        //     // location.reload();



        // }
        
        add(state, val) {
            state.num = state.num + 1

        },
        navbar(state) {
            state.navbar = !state.navbar
        },
        menuopen(state) {
            // state.menu=false
            state.menuopen = 'open'

        },
        menuclos(state) {
            state.menuopen = 'close'
        },
        navbar_big(state) {
            state.navnbarsize = 'navBarUp-big'
        }, navbar_min(state) {
            state.navnbarsize = 'navBarUp'
        },
        component_big(state) {
            state.componentsize = 'components-big'
        }, component(state) {
            state.componentsize = 'components'
        },
        changeTheme(state,val){            
            localStorage.setItem('theme',val)
            state.theme = val

          
            
        }

    },
    getters: {
        length(state) {
            return state.name.length
        }
        ,
        menuopen(state) {
            return state.menuopen
        },

    },

    actions: {

        // login({state}, val) {
        //     return new Promise((resolve, reject) => {
        //         let user = state.users.filter(i=>i.email == val.email && i.password == val.password

        //             )
        //         timeout()
        //         if(user.length){
        //             let now = new Date()
        //             // user[0].timeoutasmint = now.getMinutes() + 2
        //             // user[0].timeout = now.setSeconds(now.getSeconds() +5)
                    

        //             // console.log(user[0].timeout)
        //             resolve(user[0])
        //         }else{
        //             reject()
        //         }

        //     })

        // },
        // logout({ commit }) {
        //     localStorage.removeItem('user');
        //     localStorage.removeItem('timeout')
        //     ability.update(initialAbility.position)

        // }

    },
    methods: {}


}
)
export default store
