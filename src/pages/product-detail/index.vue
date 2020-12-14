<template>
    <view class="product-detail-box shopping-show-active">
        <view class="img-head">
            <image :src="productData.img_src" />
        </view>
        <view class="detail-content">
            <view class="name u-line-1">
                <text>{{productDetail.name || ''}}</text>
            </view>
            <view class="content-bottom">
                <view class="desc-box">
                    <view class="desc">
                        {{`本月销量${productDetail.sales || 0}份`}}
                    </view>
                    <view class="price-box">
                        <view class="price">
                            {{`￥${productDetail.new_price || 0}`}}
                        </view>
                        <view class="del-price">
                            {{`￥${productDetail.old_price || 0}`}}
                        </view>
                    </view>
                </view>
                <view class="btn-box">
                    <view class="btn" v-if="selected_num > 0" @click.stop="subtract">-</view>
                    <text class="text">{{selected_num}}</text>
                    <view class="btn" @click.stop="add">+</view>
                </view>
            </view>
        </view>
        <view class="product-desc">
            <view class="title">
                商品简介
            </view>
            <view class="content">
                {{productDetail.product_desc || ''}}
            </view>
        </view>
        <selected-product></selected-product>
    </view>
</template>
<script>
    import SelectedProduct from '@/components/selected-product/index';
	export default {
        props: {
            productDetail: {
                type: Object,
                default: {}
            }
        },
        data() {
            return {
                // 已选择的菜品数量
                selectedNum: 0,
            }
        },
        components: {
            SelectedProduct,
        },
        onLoad(options) {
            const { productId } = options
            this.getProductDetail({productId})
        },
        methods: {
            // 获取商品详情
            getProductDetail({productId}) {
                const postData = {
                    product_id: productId,
                    table_id: 1
                }
                this.$u.api.getProductDetail(postData).then(res => {
                    this.orderDeatilData = res || {}
                })
            },
            // 减一件商品
            subtract(e) {
                console.log('subtract')
            },
            // 加一件商品
            add() {
                this.selectedNum += 1;
                this.$u.debounce(() => {
                    const postData = {
                        store_id: 1,
                        table_id: 1,
                        product_id: this.productData.product_id,
                        selected_num: this.selectedNum,
                    }
                    this.$u.api.updateShopCart(postData)
                }, 500)
            },
        }
	}
</script>
<style lang="scss">
    .product-detail-box {
        width: 100%;
        // 预留购物面板的距离
        padding-bottom: 120px;

        .img-head {
            width: 100%;
            height: 275px;
        }

        .detail-content {
            padding: 13px 16px;

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

        .product-desc {
            margin-top: 30px;
            padding: 0 16px 13px;

            .title {
                font-size: 14px;
                font-weight: 500;
                color: rgba(0, 0, 0, 0.85);
                line-height: 20px;
                padding-bottom: 13px;
            }

            .content {
                font-size: 12px;
                font-weight: 400;
                color: rgba(0, 0, 0, 0.85);
                line-height: 17px;
            }
        }
    }
</style>
