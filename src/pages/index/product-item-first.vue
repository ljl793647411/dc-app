<template>
    <view class="home-product-item-first-box">
        <view class="img">
            <image :src="productDetail.img_src"></image>
        </view>
        <view class="right-content">
            <view class="title">
                <text>{{productDetail.name || ''}}</text>
            </view>
            <view class="bottom-content">
                <view class="desc-box">
                    <view class="desc">
                        <text>
                            {{`本月销量${productDetail.sales || 0}份`}}
                        </text>
                    </view>
                    <view class="price-box">
                        <view class="price">
                            {{`￥${productDetail.new_price || ''}`}}
                        </view>
                        <view class="del-price">
                            {{`￥${productDetail.old_price || ''}`}}
                        </view>
                    </view>
                </view>
                <button class="order-immediately-btn" @click="add">
                    立即点餐 
                </button>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    props: {
        productDetail: {
            type: Object,
            default: {}
        }
    },
    methods: {
        add() {
            this.$emit('saceCode')
        }
    }
}
</script>

<style lang="scss" scoped>
    .home-product-item-first-box {
        flex: 1;
        width: 100%;
        height: 126px;
        background: #FFFFFF;
        box-shadow: 0px 0px 30px 0px rgba(141, 151, 158, 0.2);
        border-radius: 12px;
        padding: 8px;
        display: flex;
        margin-bottom: 13px;

        .img {
            width: 151px;
            height: 108px;
            background: #ccc;
        }
        .right-content {
            margin-left: 13px;
        }

        .title {
            font-size: 16px;
            font-weight: 500;
            color: rgba(0, 0, 0, 0.85);
            line-height: 22px;
        }

        .bottom-content {
            margin-top: 2px;
            .desc-box {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
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
            .order-immediately-btn {
                margin-top: 13px;
                width: 91px;
                height: 26px;
                background: #E02020;
                border-radius: 21px;
                font-size: 12px;
                font-weight: 400;
                color: #FFFFFF;
                line-height: 17px;
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
    }
</style>