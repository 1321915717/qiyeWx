import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({  
    state: {  
		type:'c'   //vuex 全局 c代表 中文版  e 代表 英文   用于前端中英文切换判断
    },  
    mutations: {  
        changeType(state,type) {  
            state.type = type;
           
        }
        
    }  
})  

export default store