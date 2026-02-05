
export function Settimeout() {
    let now = new Date()
    let timeout = now.setSeconds(now.getSeconds()+60 )
    localStorage.setItem('timeout', timeout)
}
export function chickTime() {
    let timeoutloc = localStorage.getItem('timeout')
    let timnow = (new Date()).getTime()

    if (timeoutloc < timnow) {
        localStorage.removeItem('timeout')
        localStorage.removeItem('user')
        // updateability()
    }
    return timeoutloc < timnow
}
