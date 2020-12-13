<template>
    <view class="order-pay-page-box">
        <view class="detail-box">
            <view class="head-box">
                <view class="title-box">
                    <u-icon name="checkmark-circle" class="head-icon" :size="64" color="#ffffff"></u-icon>
                    <view class="title">
                        <text class="text">订单已完成</text>
                        <text class="desc">请到店后核对手机号</text>
                    </view>
                </view>
                <view class="order-info">
                    <view class="title">预约详情</view>
                    <view class="name">醉徽湘</view>
                    <view class="info">
                        <text>桌号：</text>
                        <text>{{orderDetailData.desk_name || ''}}</text>
                    </view>
                    <view class="info">
                        <text>用餐人数：</text>
                        <text>{{`${orderDetailData.eat_numb || ''}人`}}</text>
                    </view>
                    <view class="info">
                        <text>下单时间：</text>
                        <text>{{`${orderDetailData.start_time || ''}`}}</text>
                    </view>
                </view>
            </view>
            <view class="order-select-list-margin">
                <order-selected-list :orderSelectList="orderDetailData.product_list"></order-selected-list>
            </view>
            <text class="exrat-price">
                {{`餐具费：${orderDetailData.extra_price || 0}元`}}
            </text>
            <view class="total-price-box">
                <text class="total-text">支付金额</text>
                <view class="total-num">
                    <text>{{`￥${orderDetailData.total_price || 0}`}}</text>
                </view>
            </view>
            <view class="actual-price-box">
                <text>实付款：</text>
                <text>{{`￥${orderDetailData.total_price || 0}`}}</text>
            </view>
        </view>
    </view>
</template>

<script>
import OrderDetail from '@/components/order-detail/index'
import OrderSelectedList from '@/components/order-detail-select-list/index';
export default {
    data() {
        return {
            orderDetailData: {}
        }
    },
    components: {
        OrderDetail,
        OrderSelectedList,
    },
    onLoad() {
        this.getOrderDetail()
    },
    methods: {
        getOrderDetail() {
            this.$u.api.getOrderDetail(res => {
                this.orderDetailData = res || {}
            })
        }
    }
}
</script>

<style lang="scss" scoped>
    .order-pay-page-box {
        width: 100%;
        .detail-box {
            width: 100%;

            .order-select-list-margin {
                margin-bottom: 4px;
            }

            .head-box {
                width: 100%;
                height: 280px;
                position: relative;

                .title-box {
                    width: 100%;
                    height: 108px;
                    background: #E02020;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    .head-icon {
                        margin-right: 15px;
                    }

                    .title {
                        display: flex;
                        flex-direction: column;
                        .text {
                            font-size: 18px;
                            font-weight: 600;
                            color: #FFFFFF;
                            line-height: 25px;
                        }
                        .desc {
                            font-size: 12px;
                            font-weight: 400;
                            color: #FFFFFF;
                            line-height: 17px;
                        }
                    }
                }

                .order-info {
                    position: absolute;
                    left: 0;
                    right: 0;;
                    margin: auto;
                    top: 91px;
                    width: calc(100% - 20px);
                    height: 114px;
                    background-image: url('/static/img/order-bg.png');
                    background-repeat: no-repeat;
                    background-size: 100%;
                    padding: 23px 19px 0;

                    .title {
                        font-size: 18px;
                        font-weight: 600;
                        color: rgba(0, 0, 0, 0.85);
                        line-height: 25px;
                        padding-bottom: 23px;
                    }

                    .info {
                        padding-top: 6px;                    
                        font-size: 14px;
                        font-weight: 400;
                        color: rgba(0, 0, 0, 0.85);
                        line-height: 20px;
                    }
                    .name {
                        font-size: 18px;
                        font-weight: 600;
                        color: rgba(0, 0, 0, 0.85);
                        line-height: 25px;
                    }
                }
            }

            .exrat-price {
                width: calc(100% - 54px);
                font-size: 14px;
                font-weight: 400;
                color: rgba(0, 0, 0, 0.85);
                line-height: 20px;
                margin: 0 29px;
            }
            .total-price-box {
                width: calc(100% - 54px);
                margin-top: 7px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin: 7px 29px;

                .total-text {
                    font-size: 18px;
                    font-weight: 600;
                    color: rgba(0, 0, 0, 0.85);
                    line-height: 25px;
                }
                .total-num {
                    font-size: 12px;
                    font-weight: 600;
                    color: rgba(0, 0, 0, 0.85);
                    line-height: 17px;
                }
            }
            .actual-price-box {
                width: calc(100% - 54px);
                display: flex;
                align-items: center;
                justify-content: flex-end;
                margin: 0 auto;
                font-size: 12px;
                font-weight: 600;
                color: rgba(0, 0, 0, 0.85);
                line-height: 17px;
            }
        }

    }
</style>