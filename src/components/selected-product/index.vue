<template>
    <view>
        <view class="selected-board-box-class">
            <view class="board">
                <view class="message-content-box">
                    <view class="desk-num-info">
                        <text>桌号：</text>
                        <text>1楼01号</text>
                    </view>
                    <view class="eat-people-num">
                        <text>用餐人数：</text>
                        <text>4人</text>
                        <text class="select">请选择用餐人数</text>
                    </view>
                </view>
                <view class="bottom-box">
                    <view class="shopping-box">
                        <view class="icon-box" @click="getShoppingList">
                            <u-badge count="7" :offset="[-8, -8]" bgColor="#E02020"></u-badge>
                            <image src="/static/img/list-icon.png"></image>
                        </view>
                        <view class="right-box">
                            <view class="price-box">
                                <text class="rmb">￥</text>
                                <text class="total">
                                    216.00
                                </text>
                            </view>
                            <text class="desc">已选择8件菜品</text>
                        </view>
                    </view>
                    <view class="btn-box" >立即下单</view>
                </view>
            </view>
            <view :class="['shopping-list-modal', {'shopping-list-modal-open': showMask}]">
                <view class="top-box">
                    <text class="title">商品服务</text>
                    <text class="operaton" @click="clearShoppingList">清空</text>
                </view>
                <view class="product" v-for="(item, index) in shoppingList" :key="index">
                    <product-item type="shopCart"></product-item>
                </view>
                <view class="extra-price">
                    <text>餐具费：</text>
                    <text class="price-font-color">￥4</text>
                </view>
            </view>
        </view>
        <view v-if="showMask" class="global-mask" @click="closeShoppingModal"></view>
    </view>
</template>

<script>
    import ProductItem from '@components/custom-product-item/custom-product-item';
	export default {
        props: {
        },
		data() {
			return {
                shoppingList: [],
                showMask: false
			}
		},
		computed: {
			
        },
        components: {
            ProductItem
        },
		methods: {
            // 获取购物车列表
            getShoppingList() {
                if (this.showMask) {
                    this.closeShoppingModal()
                    return
                }
                this.showMask = true
                this.shoppingList = new Array(4)
            },
            // 清空购物车
            clearShoppingList() {
                this.shoppingList = []
            },
            // 关闭购物车弹窗
            closeShoppingModal() {
                this.showMask = false
            },
		}
	}
</script>

<style lang="scss" scoped>
	.selected-board-box-class {
        width: 100%;
        height: 120px;
        position: fixed;
        z-index: 9999;
        bottom: 0;
        left: 0;
        background: #fff;
        padding: 0 20px;
        box-sizing: border-box;

        .board {
            position: relative;
            z-index: 2;
            width: 100%;
            height: 100%;
            background: #ffffff;
            padding: 10px 0;
        }
        .message-content-box {
            width: 100%;
            margin-bottom: 12px;
            display: flex;

            .desk-num-info {
                display: flex;
                align-items: center;
                font-size: 14px;
                font-weight: 400;
                color: rgba(0, 0, 0, 0.85);
                line-height: 20px;
                padding-right: 30px;
            }

            .eat-people-num {
                display: flex;
                align-items: center;
                font-size: 14px;
                font-weight: 400;
                color: rgba(0, 0, 0, 0.85);
                line-height: 20px;

                .select {
                    color: #7D8699;
                }
            }
        }

        .bottom-box {
            display: flex;
            justify-content: space-between;
            align-items: center;

            .btn-box {
                width: 91px;
                height: 26px;
                display: flex;
                align-items: center;
                justify-content: center;
                background: #E02020;
                font-size: 12px;
                font-weight: 400;
                color: #FFFFFF;
                line-height: 17px;
                border-radius: 21px;
            }

            .shopping-box {
                display: flex;
                .icon-box {
                    width: 40px;
                    height: 40px;
                    position: relative;
                }

                .right-box {
                    padding-left: 11px;
                    font-weight: 400;
                    color: rgba(0, 0, 0, 0.85);
                    line-height: 17px;
                   
                   .price-box {
                        .rmb {
                            font-size: 12px;
                        }

                        .total {
                            font-size: 16px;
                        }
                   }
                   .desc {
                        font-size: 12px;
                   }
                }
            }
        }

        .shopping-list-modal {
            width: 100%;
            height: 434px;
            border-radius: 23px 23px 0 0;
            background: #fff;
            position: absolute;
            top: 0;
            left: 0;
            transform: all 0.3s ease;
            z-index: 1;
            padding: 19px 26px;
            border-bottom: 1px solid #000000;

            .top-box {
                padding-bottom: 20px;
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: space-between;
                .title {
                    font-size: 16px;
                    font-weight: 600;
                    color: rgba(0, 0, 0, 0.85);
                    line-height: 22px;
                }
                .operaton {
                    font-size: 12px;
                    font-weight: 400;
                    color: rgba(0, 0, 0, 0.5);
                    line-height: 17px;
                }
            }

            .product {
                margin-bottom: 14px;
            }

            .extra-price {
                width: 100%;
                border-top: 2px solid #F3F4F7;
                padding-top: 15px;
                font-size: 14px;
                font-weight: 400;
                color: rgba(0, 0, 0, 0.85);
                line-height: 20px;
                .price-font-color {
                    color: #E02020;
                }
            }
        }

        .shopping-list-modal-open {
            top: -434px;
        }

    }

    
	
</style>
