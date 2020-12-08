<template>
    <view>
        <view class="order-item-box">
            <view class="info-box">
                <view class="top">
                    <view class="title">{{orderData.shop_name || ''}}</view>
                    <view class="status">{{orderStatusText(orderData)}}</view>
                </view>
                <view class="date">
                    {{orderData.start_time}}
                </view>
                <view class="desc">
                    {{`共计${orderData.order_goods_num || 0}件菜品`}}
                </view>
            </view>
            <view class="operation-box">
                <view class="btn add" v-if="orderData.order_status == 1 && orderData.order_type == 1">加菜</view>
                <view class="btn btn-2" v-if="orderData.order_status == 1 && orderData.order_type == 1">立即付款</view>
                <view class="btn add" v-if="orderData.order_status == 2 && orderData.order_type == 3">再来一单</view>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    props: {
        orderData: {
            type: Object,
            default: {}
        }
    },
    methods: {
        // 获取订单状态文案
        orderStatusText(item) {
            if (item.order_status == 1 && item.order_type == 1) {
                return '进行中'
            }
            if (item.order_status == 2 && item.order_type == 1) {
                return '已完成'
            }
            if (item.order_status == 2 && item.order_type == 3) {
                return '已送达'
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .order-item-box {
        width: 100%;
        background: #FFFFFF;
        box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.19);
        border-radius: 8px;
        padding: 13px 13px 13px 17px;
        margin-bottom: 17px;

        .operation-box {
            width: 100%;
            display: flex;
            justify-content: flex-end;
            align-items: center;

            .btn {
                margin-top: 13px;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 28px;
                border-radius: 21px;
                font-size: 13px;
                font-weight: 400;
                line-height: 18px;
                margin-left: 12px;
            }

            .add {
                width: 85px;
                background: #FFFFFF;
                border: 1px solid #E02020;
                color: #E02020;
            }

            .btn-2 {
                width: 87px;
                background: #FA6400;
                color: #FFFFFF;
            }
        }
        .info-box {
            width: 100%;
            .top {
                width: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;

                .title {
                    font-size: 18px;
                    font-weight: 400;
                    color: #1D1E2C;
                    line-height: 24px;
                }
                .status {
                    font-size: 14px;
                    font-weight: 400;
                    color: #F7B500;
                    line-height: 24px;
                }
            }
            .date {
                font-size: 14px;
                font-weight: 400;
                color: rgba(0, 0, 0, 0.5);
                line-height: 24px;
            }
            .desc {
                margin-top: 3px;
                font-size: 14px;
                font-weight: 400;
                color: #1D1E2C;
                line-height: 24px;
            }
        }
    }
</style>