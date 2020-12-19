import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
        vuex_sessionKey: '', // sessionKey
        vuex_userInfo: {}, // 用户信息
        vuex_cellphone: {}, // 手机号码
        vuex_sandCodeShopCartList: {}, // 扫码点餐购物车列表

	},
	mutations: {
		// payload为用户传递的值，可以是单一值或者对象
		setSessionKey(state, payload) {
			state.vuex_sessionKey = payload;
		},
		// payload为用户传递的值，可以是单一值或者对象
		setUserInfo(state, payload) {
			state.vuex_userInfo = payload;
        },
        // 扫码点餐购物车数据
        setSandCodeShopCartList(state, payload) {
			state.vuex_sandCodeShopCartList = payload;
        },
        // 设置手机号
        setCellphone(state, payload) {
			state.vuex_cellphone = payload;
        }
	}
})

export default store