import store from "@/store"
import { Settimeout } from "@/jsc/timeout";
import axios from "axios";

export function login(email, password, name) {
    // axios.get('http://localhost:5000/users/2')
    //     .then((response) => {
    //         console.log(response.data)
    //     })
    return new Promise((resolve, reject) => {
        let data = store.state.users
        // if (name == 'DashbordOne') {
        //     data = store.state.dashbordone.usersone
        // }
        // if (name == 'DashbordTow') {
        //     data = 

        // }
        let user = data.filter(i => i.email == email && i.password == password)

        if (user.length) {
            Settimeout()
            resolve(user[0])
            
        } else {
            reject()
        }

    })

}
export function Logoutuser() {
    localStorage.removeItem('user');
    localStorage.removeItem('timeout')
    // ability.update(initialAbility.position)

}