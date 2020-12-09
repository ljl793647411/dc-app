import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
        vuex_sessionKey: '',
        vuex_userInfo: {}
	},
	mutations: {
		// payload为用户传递的值，可以是单一值或者对象
		setSessionKey(state, payload) {
			state.vuex_sessionKey = payload;
		},
		// payload为用户传递的值，可以是单一值或者对象
		setUserInfo(state, payload) {
			state.vuex_userInfo = payload;
		}
	}
})

export default store