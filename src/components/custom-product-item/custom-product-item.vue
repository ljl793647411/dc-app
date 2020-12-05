<template>
    <view class="product-item-box-class">
        <view class="left-img">
            <image :src="productData.img" class="img" />
        </view>
        <view class="right-content">
            <view class="name u-line-1">
                秘制剁椒鱼头王
            </view>
            <view class="content-bottom">
                <view class="desc-box">
                    <view class="desc">
                        <text v-if="type==='default'">
                            {{`本月销量 90份`}}
                        </text>
                    </view>
                    <view class="price-box">
                        <view class="price">
                            ￥49.00
                        </view>
                        <view class="del-price" v-if="type==='default'">
                            ￥69.00
                        </view>
                    </view>
                </view>
                <view class="btn-box">
                    <view class="btn">-</view>
                    <text class="text">1</text>
                    <view class="btn">+</view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
	export default {
        props: {
            // 菜品对象信息
            productData: {
                type: Object,
                default: {}
            },
            // 调用场景 ['default', 'shopCart']
            type: {
                type: String,
                default: 'default'
            }
        },
		data() {
			return {
			}
		},
		computed: {
			
		},
		methods: {
		}
	}
</script>

<style lang="scss" scoped>
	.product-item-box-class {
        width: 100%;
        height: 66px;
        display: flex;

        .left-img {
            width: 66px;
            height: 66px;
            background: #ccc;
        }

        .right-content {
            flex: 1;
            padding: 0 16px;

            .name {
                width: 100%;
                font-size: 16px;
                font-weight: 500;
                color: rgba(0, 0, 0, 0.85);
                line-height: 22px;
            }

            .content-bottom {
                margin-top: 2px;
                width: 100%;
                display: flex;
                justify-content: space-between;

                .desc-box {
                    .desc {
                        font-size: 12px;
                        font-weight: 400;
                        color: rgba(0, 0, 0, 0.85);
                        line-height: 17px;
                        padding-bottom: 6px;
                        min-height: 20px;
                    }

                    .price-box {
                        display: flex;
                        align-items: center;

                        .price {
                            font-size: 14px;
                            font-weight: 600;
                            color: #E02020;
                            line-height: 20px; 
                            padding-right: 10px;
                        }
                        .del-price {
                            font-size: 12px;
                            font-weight: 400;
                            color: rgba(0, 0, 0, 0.5);
                            line-height: 17px;
                            text-decoration:line-through;
                        }
                    }
                }

                .btn-box {
                    width: 64px;
                    height: 100%;
                    display: flex;

                    .btn {
                        width: 20px;
                        height: 20px;
                        background: #E02020;
                        border-radius: 50%;
                        font-size: 10px;
                        color: #fff;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }

                    .text {
                        font-size: 12px;
                        font-weight: 400;
                        color: rgba(0, 0, 0, 0.85);
                        line-height: 17px;
                        text-align: center;
                        flex: 1;
                    }
                }
            }
        }

    }
	
</style>
