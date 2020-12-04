<template>
	<view class="u-wrap">
		<view class="u-search-box">
            <u-input
                class="search-input"
                palceholder="搜索商品名称"
                v-model="searchData"
                :height="35"
                @input="changeHandle"
                placeholder-style="color: #0000007d;font-size: 14px;"
                :custom-style="{
                    paddingLeft: '45px',
                    paddingRight: '32px',
                    background: '#F3F4F7',
                    borderRadius: '18px',
                    fontSize: '14px'
                }"
            >
            </u-input>
            <u-icon name="search" class="search-icon"></u-icon>
		</view>
		<view class="u-menu-wrap" v-if="!searchData">
			<scroll-view scroll-y scroll-with-animation class="u-tab-view menu-scroll-view" :scroll-top="scrollTop">
				<view v-for="(item,index) in tabbar" :key="index" class="u-tab-item" :class="[current==index ? 'u-tab-item-active' : '']"
				 :data-current="index" @tap.stop="swichMenu(index)">
					<text class="u-line-1">{{item.name}}</text>
				</view>
			</scroll-view>
			<block v-for="(item,index) in tabbar" :key="index">
				<scroll-view scroll-y class="right-box" v-if="current==index">
					<view class="page-view">
                        <list-component></list-component>
					</view>
				</scroll-view>
			</block>
		</view>
        <view class="search-list" v-else>
            <view v-for="item in searchList" :key="item" class="search-list-item">
                <product-item :productData="item"></product-item>
            </view>
        </view>
	</view>
</template>

<script>
    import classifyData from "@common/classify.data.js";
    import ListComponent from './list'
    import ProductItem from '@components/custom-product-item/custom-product-item';
	export default {
		data() {
			return {
				tabbar: classifyData,
				scrollTop: 0, //tab标题的滚动条位置
				current: 0, // 预设当前项的值
				menuHeight: 0, // 左边菜单的高度
                menuItemHeight: 0, // 左边菜单item的高度
                searchData: '', // 搜索框的值
                searchList: [], // 模糊搜索出来的列表
			}
		},
		computed: {
			
        },
        components: {
            ListComponent,
            ProductItem
        },
		methods: {
			// 点击左边的栏目切换
			async swichMenu(index) {
				if(index == this.current) return ;
				this.current = index;
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
							return ;
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
                    this.searchList = new Array(value.length)
                }, 500)
            },
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
        top: 19px;
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
