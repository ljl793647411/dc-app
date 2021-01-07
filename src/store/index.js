import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
        vuex_sessionKey: '', // sessionKey
        vuex_userInfo: null, // 用户信息
        vuex_cellphone: null, // 手机号码
		vuex_sandCodeShopCartList: null, // 扫码点餐购物车列表
		vuex_store_id: 8, 	// 门店id
		vuex_table_id: 5, // 桌子id

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
        },
        // 设置手机号
        setTableId(state, payload) {
			state.vuex_table_id = payload;
        },
        // 设置手机号
        setStoreId(state, payload) {
			state.vuex_store_id = payload;
        }
	}
})

export default store