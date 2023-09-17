// import consollog from "./jsc/jsexm"
import apility from '@/ability/defineApilty'
import store from './store';

// const options = { path: '/' }; //Options object to pass into SocketIO


export default {
 install(app,options){
    app.config.globalProperties.apility= function(){
        apility
    }
    app.config.globalProperties.setalert= function(data){
        // alert(data)
    }
 

    
 }
 
}