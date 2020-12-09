// 此处第二个参数vm，就是我们在页面使用的this，你可以通过vm获取vuex等操作，更多内容详见uView对拦截器的介绍部分：
// https://uviewui.com/js/http.html#%E4%BD%95%E8%B0%93%E8%AF%B7%E6%B1%82%E6%8B%A6%E6%88%AA%EF%BC%9F
const install = (Vue, vm) => {
	/**
	 * code 微信授权获取openid
	 */
    const login = (params = {}) => vm.$u.get("login/login",params);
	/**
	 * 退出登录
	 */
    const logout = (params = {}) => vm.$u.get("login/logout",params);
	/**
	 * 绑定用户信息
	 */
    const bindUserInfo = (params = {}) => vm.$u.post("member/add",params);
	/**
	 * 首页热门商品
	 */
    const hotProduct = (params = {}) => vm.$u.get("bookProduct/hotProduct",params);
	/**
	 * 模糊搜索菜品
	 */
    const fuzzySearchGoodsList = (params = {}) => vm.$u.get("bookProduct/fuzzySearchGoodsList",params);
	/**
	 * 获取菜品列表及分类
	 */
    const productList = (params = {}) => vm.$u.get("bookProduct/productList",params);
	/**
	 * 购物车接口
	 */
    const shopCartList = (params = {}) => vm.$u.get("bookProduct/shopCartList",params);
    
	
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	vm.$u.api = {
        login, 
        logout,
        bindUserInfo,
        hotProduct,
        fuzzySearchGoodsList,
        productList,
        shopCartList,
	};
}

export default {
	install
}