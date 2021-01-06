<template>
    <view class="detail-box">
        <view class="head-box">
            <view class="title-box">
                <text class="title" v-text="title || ''"></text>
            </view>
            <view class="order-info">
                <text class="name">醉徽湘</text>
                <view class="info">
                    <text>桌号：</text>
                    <text>{{orderDetail.table_value || ''}}</text>
                </view>
                <view class="info">
                    <text>用餐人数：</text>
                    <text>{{`${orderDetail.eat_num || ''}人`}}</text>
                </view>
                <view class="info">
                    <text>下单时间：</text>
                    <text>{{`${orderDetail.start_time || ''}`}}</text>
                </view>
            </view>
        </view>
        <order-selected-list :orderSelectList="orderDetail.product_list"></order-selected-list>
        <text class="exrat-price">
            {{`餐具费：${orderDetail.extra_price || 0}元`}}
        </text>
        <view class="total-price-box">
            <text class="total-text">合计</text>
            <text class="total-num">{{`￥${orderDetail.total_price || 0}`}}</text>
        </view>
    </view>
</template>

<script>
import OrderSelectedList from '@/components/order-detail-select-list/index';
export default {
    props: {
        title: {
            type: String,
        },
        orderDetail: {
            type: Object,
            default: {}
        }
    },
    data() {
        return {
        }
    },
    components: {
        OrderSelectedList,
    },
    computed: {
    },
    methods: {
    }

}
</script>

<style scoped lang="scss">
    .detail-box {
        width: 100%;

        .head-box {
            width: 100%;
            height: 192px;
            position: relative;

            .title-box {
                width: 100%;
                height: 108px;
                background: #E02020;
                padding: 22px 29px;

                .title {
                    font-size: 16px;
                    font-weight: 600;
                    color: #FFFFFF;
                    line-height: 22px;
                }
            }

            .order-info {
                position: absolute;
                left: 0;
                right: 0;;
                margin: auto;
                top: 54px;
                width: calc(100% - 20px);
                height: 114px;
                background-image: url('/static/img/order-bg.png');
                background-repeat: no-repeat;
                background-size: 100%;
                padding: 23px 19px 0;

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
            margin: 2px 29px;
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
    }
</style>

