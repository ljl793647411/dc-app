import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
	    vuex_sessionKey: ''
	},
	mutations: {
		// payload为用户传递的值，可以是单一值或者对象
		setSessionKey(state, payload) {
			state.vuex_sessionKey = payload;
		}
	}
})

export default store