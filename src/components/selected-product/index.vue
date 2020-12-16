<template>
    <view>
        <view class="selected-board-box-class">
            <view class="board">
                <view class="message-content-box">
                    <view class="desk-num-info">
                        <text>桌号：</text>
                        <text>{{shopCartInfo.desk_name || ''}}</text>
                    </view>
                    <view class="eat-people-num">
                        <text>用餐人数：</text>
                        <text>{{`${shopCartInfo.eat_numb || 0}人`}}</text>
                        <view class="set-eatnum-box">
                            <u-input
                                type="number"
                                palceholder="请输入用餐人数"
                                v-model="eatNum"
                                :height="35"
                                placeholder-style="color: #0000007d;font-size: 14px;lineHeight: 35px"
                                :custom-style="{
                                    background: transparent,
                                    border: none,
                                    fontSize: '14px',
                                    height: '35px',
                                    lineHeight: '35px',
                                    width: '30px'
                                }"
                            >
                            </u-input>
                            <text v-if="eatNum" class="ok-btn" @click="setEatNumFunc">确定</text>
                        </view>
                    </view>
                </view>
                <view class="bottom-box">
                    <view class="shopping-box">
                        <view class="icon-box" @click="openShopCartModal">
                            <u-badge :count="shopCartInfo.selected_num_total || 0" :offset="[-8, -8]" bgColor="#E02020"></u-badge>
                            <image src="/static/img/list-icon.png"></image>
                        </view>
                        <view class="right-box">
                            <view class="price-box">
                                <text class="rmb" v-if="shopCartInfo.total_price || shopCartInfo.total_price == 0">￥</text>
                                <text class="total">{{shopCartInfo.total_price || ''}}</text>
                            </view>
                            <text class="desc">{{`已选择${shopCartInfo.selected_num_total || 0}件菜品`}}</text>
                        </view>
                    </view>
                    <view>
                        <view class="btn-box" @click="jumpOrderPayment">立即下单</view>
                        <text v-if="scene == 'markAnAppoint'" class="mark-an-apponitment-text">美味无需等待，到店即可享用</text>
                    </view>
                </view>
            </view>
            <view :class="['shopping-list-modal', {'shopping-list-modal-open': showMask}]">
                <view class="top-box">
                    <text class="title">商品服务</text>
                    <text class="operaton" @click="clearShoppingList">清空</text>
                </view>
                <view class="product" v-for="(item, index) in shopCartInfo.selelted_goods_list || []" :key="index">
                    <product-item type="shopCart" :productData="item" :storeId="storeId" :tableId="tableId"></product-item>
                </view>
                <view class="extra-price" v-if="shopCartInfo.selelted_goods_list.length > 0">
                    <text>餐具费：</text>
                    <text class="price-font-color">{{`￥${shopCartInfo.extra_price || ''}`}}</text>
                </view>
            </view>
        </view>
        <view v-if="showMask" class="global-mask" @click="closeShoppingModal"></view>
    </view>
</template>

<script>
    import ProductItem from '@/components/custom-product-item/custom-product-item';
	export default {
        props: {
            shopCartInfo: {
                type: Object,
                default: {}
            },
            // 调用场景 ['default', 'markAnAppoint']
            scene: {
                type: String,
                default: 'default'
            },
            storeId: {
                type: String | Number
            },
            tableId: {
                type: String | Number
            },
            
        },
		data() {
			return {
                showMask: false,
                eatNum: '',
			}
		},
		computed: {
			
        },
        components: {
            ProductItem
        },
		methods: {
            // 获取购物车列表
            openShopCartModal() {
                if (this.showMask) {
                    this.closeShoppingModal()
                    return
                }
                this.showMask = true
            },
            // 清空购物车
            clearShoppingList() {
                const postData = {
                    store_id: this.storeId,
                    table_id: this.tableId
                }
                try {
                    this.$u.api.clearShopCart(postData)
                } catch (error) {
                    
                }
            },
            // 关闭购物车弹窗
            closeShoppingModal() {
                this.showMask = false
            },
            // 跳转订单详情
            jumpOrderPayment() {
                const postData = {
                    store_id: this.storeId,
                    table_id: this.tableId
                }
                this.$u.api.addOrder(postData).then(res => {
                    this.$u.route('/pages/code-order/order-detail/index', {
                        orderId: res.order_id || ''
                    })
                }).catch(() => {
                    uni.showToast({
                        title: '下单失败',
                        icon: 'none',
                    })
                })
            },
            // 设置就餐人数
            setEatNumFunc() {
                const postData = {
                    store_id: this.storeId,
                    table_id: this.tableId,
                    eat_numb: Number(this.eatNum)
                }
                this.$u.api.setEatNum(postData).then(() => {
                    this.eatNum = ''
                })
            }
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
                .set-eatnum-box {
                    display: flex;
                    align-items: center;
                    margin-left: 12px;

                    .ok-btn {
                        color: #0081ff;
                        padding-left: 12px;
                    }
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

            .mark-an-apponitment-text {
                padding-top: 2px;
                font-size: 12px;
                font-weight: 400;
                color: #F7B500;
                line-height: 17px;
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
