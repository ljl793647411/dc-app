<template>
    <view class="order-payment-box">
        <u-icon class="icon-box" :size="152" name="checkmark-circle-fill" color="#E02020"></u-icon>
        <text class="text-title">下单成功</text>
        <view class="text-desc">
            订单尚未支付，请在用餐结束后再订单内支付或前往收银台支付。
        </view>
        <view class="btn-group">
            <button class="view-order" @click="viewOrder">查看订单</button>
            <button class="order-cancel" @click="orderCancel">取消订单</button>
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        // 跳转订单详情
        viewOrder() {
            this.$u.route('/pages/order-payment/index')
        },
        // 取消订单
        orderCancel() {

        }
    }
}
</script>

<style scoped lang="scss">
    .order-payment-box {
        width: 100%;
        height: 100vh;
        display: flex;
        align-items: center;
        flex-direction: column;
        padding: 0 46px;

        .icon-box {
            margin-top: 50%;
            width: 76px;
            height: 76px;
        }

        .text-title {
            margin-top: 27px;
            font-size: 26px;
            font-weight: 600;
            color: rgba(66, 66, 66, 0.85);
            line-height: 37px;
        }
        .text-desc {
            display: inline-block;
            text-align: center;
            margin-top: 15px;
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #7D8699;
            line-height: 20px;
        }
        .btn-group {
            margin-top: 13%;

            .view-order {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 281px;
                height: 40px;
                background: #E02020;
                border-radius: 21px;
                margin-bottom: 14px;
                font-size: 14px;
                font-weight: 400;
                color: #FFFFFF;
                line-height: 20px;
            }
            .order-cancel {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 281px;
                height: 40px;
                background: #FFFFFF;
                border-radius: 21px;
                border: 1px solid #E02020;
                font-size: 14px;
                font-weight: 400;
                color: #E02020;
                line-height: 20px;
            }
        }
    }
</style>