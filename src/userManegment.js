export  function isLogin(){
    let user = JSON.parse(localStorage.getItem('user'))  
    // return user && ((new Date(user.timeout)).getSeconds()) > ((new Date()).getSeconds())
    return user 
}

export function incressExpiry(){
    let user = JSON.parse(localStorage.getItem('user'))
    if(!user) return
    let now = new Date()
    user.timeout =  now.setSeconds(now.getSeconds() + 20)
    localStorage.setItem("user", JSON.stringify(user))
}