<template>
    <view class="product-detail-box shopping-show-active">
        <view class="img-head">
            <image src=""></image>
        </view>
        <view class="detail-content">
            <view class="name u-line-1">
                秘制剁椒鱼头王
            </view>
            <view class="content-bottom">
                <view class="desc-box">
                    <view class="desc">
                        {{`本月销量 90份`}}
                    </view>
                    <view class="price-box">
                        <view class="price">
                            ￥49.00
                        </view>
                        <view class="del-price">
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
        <view class="product-desc">
            <view class="title">
                商品简介
            </view>
            <view class="content">
                是湖南省的传统名菜，属于湘菜系。据传，起源和清代文人黄宗宪有关。通常以鳙鱼鱼头、剁椒为主料，配以豉油、姜、葱、蒜等辅料蒸制而成。
            </view>
        </view>
        <selected-product></selected-product>
    </view>
</template>
<script>
    import SelectedProduct from '@components/selected-product/index';
	export default {
        data() {
            return {

            }
        },
        components: {
            SelectedProduct,
        },
        mounted() {

        },
        methods: {

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
