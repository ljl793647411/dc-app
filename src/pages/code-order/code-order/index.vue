<template>
	<view class="u-wrap shopping-show-active">
		<view class="u-search-box">
            <u-input
                class="search-input"
                placeholder="搜索商品名称"
                v-model="searchData"
                :height="35"
                @input="changeHandle"
                placeholder-style="color: #0000007d;font-size: 14px;lineHeight: 35px"
                :custom-style="{
                    paddingLeft: '45px',
                    paddingRight: '32px',
                    background: '#F3F4F7',
                    borderRadius: '18px',
                    fontSize: '14px',
                    height: '35px',
                    lineHeight: '35px'
                }"
            >
            </u-input>
            <u-icon name="search" class="search-icon"></u-icon>
		</view>
		<view class="u-menu-wrap" v-if="!searchData">
			<scroll-view scroll-y scroll-with-animation class="u-tab-view menu-scroll-view" :scroll-top="scrollTop">
				<view v-for="(item,index) in tabbar" :key="index" class="u-tab-item" :class="[currentKey==item.child_key ? 'u-tab-item-active' : '']"
				 :data-current="index" @tap.stop="swichMenu(item, index)">
					<text class="u-line-1">{{item.name}}</text>
				</view>
			</scroll-view>
            <scroll-view scroll-y class="right-box">
                <view v-for="(item,index) in tabbarList" :key="index" @click="jumpDetail(item)">
                    <view v-if="item.parent_key == currentKey" class="page-view">
                        <product-item :productData="item" :storeId="vuex_store_id" :tableId="vuex_table_id"></product-item>
                    </view>
                </view>
            </scroll-view>
		</view>
        <view class="search-list" v-else>
            <view v-for="item in searchList" :key="item" class="search-list-item">
                <product-item :productData="item" :storeId="vuex_store_id" :tableId="vuex_table_id"></product-item>
            </view>
        </view>
        <selected-product :shopCartInfo="vuex_sandCodeShopCartList" :storeId="vuex_store_id" :tableId="vuex_table_id"></selected-product>
	</view>
</template>

<script>
    import { loginFunc, checkIsAuth } from '@/common/utils'
    import ProductItem from '@/components/custom-product-item/custom-product-item';
    import SelectedProduct from '@/components/selected-product/index';
    import socketTask from '@/common/ws.js'
    import { mapState } from 'vuex';
	export default {
		data() {
			return {
                tabbar: [], // 分类列表的值
                tabbarList: [], // 对应列表的值
                currentKey: '', // 当前应该显示列表的key
				scrollTop: 0, //tab标题的滚动条位置
				menuHeight: 0, // 左边菜单的高度
                menuItemHeight: 0, // 左边菜单item的高度
                searchData: '', // 搜索框的值
                searchList: [], // 模糊搜索出来的列表
                wsTask: null, // ws实例
                init: true,
			}
        },
        onLoad(options) {
            this.initFunc(options)
        },
        onShow() {
            if (this.init) {
                this.wsTask = socketTask(this.vuex_table_id, this.vuex_userInfo.member_id); // table_id和user_id
                this.wsTask.onMessage(this.setShppCartInfo)
                this.init = false
            }
        },
        onHide() {
            this.wsTask.close()
            this.init = true
        },
		computed: {
            ...mapState({
                vuex_sessionKey: 'vuex_sessionKey',
                vuex_userInfo: 'vuex_userInfo',
                vuex_sandCodeShopCartList: 'vuex_sandCodeShopCartList', // 购物车数据
                vuex_store_id: 'vuex_store_id',
                vuex_table_id: 'vuex_table_id'
            }),
        },
        components: {
            ProductItem,
            SelectedProduct
        },
		methods: {
            // 入口放在这里是因为还可通过微信扫一扫
            // 这个方法把获取sessionKey的方法也放到业务逻辑里
            // 是因为需要在login拿到sessionKey之后才能请求其他逻辑，
            // 必须是串行逻辑
            async initFunc(options) {
                // 要是没有sessionKey,先请求login
                if (!this.vuex_sessionKey) {
                    await loginFunc(this)
                }
                let query = options.q
                var queryString = decodeURIComponent(query)
                let params = {}
                if (queryString) {
                    let queryArray = queryString.split('?')
                    if (queryArray.length > 1) {
                        let query = queryArray[1]
                        let array = query.split('&')
                        let storeArray = array[0].split('=')
                        let tableArray = array[1].split('=')
                        this.$store.commit('setStoreId', storeArray[1])
                        this.$store.commit('setTableId', tableArray[1])
                    }
                }
                // 如果没有授权，先跳授权页
                if (!checkIsAuth(this)) {
                    return
                }
                this.getProductList()
                this.getShopCartInfo()
                if (options.source !== 'orderDetail') {
                    this.checkIsExistOrder()
                }
            },
            // 设置购物车数据
            setShppCartInfo(res) {
                try {
                    const data = JSON.parse(res.data)
                    this.$store.commit('setSandCodeShopCartList', JSON.parse(data.shopCarJson))
                    this.tabbarList = data.product_list;
                } catch (error) {
                    uni.showToast({
                        title: '操作失败，请重试',
                        icon: 'none'
                    })
                }
            },
			// 点击左边的栏目切换
			async swichMenu(item, index) {
				if(item.child_key == this.currentKey) return ;
				this.currentKey = item.child_key;
				// 如果为0，意味着尚未初始化
				if(this.menuHeight == 0 || this.menuItemHeight == 0) {
					await this.getElRect('menu-scroll-view', 'menuHeight');
					await this.getElRect('u-tab-item', 'menuItemHeight');
				}
				// 将菜单菜单活动item垂直居中
				this.scrollTop = index * this.menuItemHeight + this.menuItemHeight / 2 - this.menuHeight / 2;
			},
			// 获取一个目标元素的高度
			getElRect(elClass, dataVal) {
				new Promise((resolve, reject) => {
					const query = uni.createSelectorQuery().in(this);
					query.select('.' + elClass).fields({size: true},res => {
						// 如果节点尚未生成，res值为null，循环调用执行
						if(!res) {
							setTimeout(() => {
								this.getElRect(elClass);
							}, 10);
							return
						}
						this[dataVal] = res.height;
					}).exec();
				})
            },
            // 搜索框change事件
            changeHandle(value) {
                this.$u.debounce(() => {
                    if (!value) {
                        this.searchList = []
                        return;
                    }
                    const postData = {
                        store_id: this.vuex_store_id,
                        table_id: this.vuex_table_id,
                        product_name: value
                    }
                    this.$u.api.fuzzySearchGoodsList(postData).then(res => {
                        if (res) {
                            this.searchList = res || []
                        }
                    })
                }, 500)
            },
            // 获取分类列表
            getProductList() {
                const postData = {
                    store_id: this.vuex_store_id,
                    table_id: this.vuex_table_id
                }
                this.$u.api.productList(postData).then(res => {
                    if (res) {
                        this.tabbar = res.category_list || [];
                        this.tabbarList = res.product_list || [];
                        if (this.tabbar.length > 0) {
                            // 赋默认值为第一个菜单的key
                            this.currentKey = this.tabbar[0].child_key;
                        }
                    }
                })
            },
            // 获取购物车信息
            getShopCartInfo() {
                const postData = {
                    store_id: this.vuex_store_id,
                    table_id: this.vuex_table_id
                }
                this.$u.api.shopCartList(postData).then(res => {
                    if (res) {
                        this.$store.commit('setSandCodeShopCartList', res)
                    }
                })
            },
            // 跳转商品详情
            jumpDetail(item) {
                this.$u.route('/pages/product-detail/index', {
                    tableId: this.vuex_table_id,
                    storeId: this.vuex_store_id,
                    productId: item.product_id || '',
                    isNeedws: 1,
                })
            },
            // 检查是否有存在中的订单
            checkIsExistOrder () {
                const postData = {
                    store_id: this.vuex_store_id,
                    table_id: this.vuex_table_id
                }
                this.$u.api.isExistOrder(postData).then(res => {
                    if (res.isExist) {
                        this.$u.route('/pages/code-order/order-pay-page/index', {
                            orderId: res.order_id
                        })
                    }
                })
            }
		}
	}
</script>

<style lang="scss" scoped>
	.u-wrap {
		height: calc(100vh);
		/* #ifdef H5 */
		height: calc(100vh - var(--window-top));
		/* #endif */
		display: flex;
		flex-direction: column;
	}

	.u-search-box {
		margin: 14px;
        position: 'relative'
    }

    .search-input input{
        height: "65px";
        background: '#F3F4F7';
        border-radius: "18px";
        padding-left: '45px';
    }
    
    .search-icon {
        position: absolute;
        z-index: 1;
        top: 25px;
        left: 32px;
    }

	.u-menu-wrap {
		flex: 1;
		display: flex;
		overflow: hidden;
	}
    
	.u-tab-view {
		width: 93px;
		height: 100%;
        background: #f6f6f6;
	}

	.u-tab-item {
		height: 39px;
		background: #f6f6f6;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #000;
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
	}
	
	.u-tab-item-active {
        color: rgba(0, 0, 0, 0.5);
		background: #fff;
	}

	.u-tab-view {
		height: 100%;
	}
	
	.right-box {
		background-color: rgb(250, 250, 250);
	}
	
	.page-view {
		padding: 8px;
    }
    
    .search-list {
        padding: 0 14px 14px;
    }

    .search-list-item {
        margin-bottom: 17px;
    }
	
</style>
