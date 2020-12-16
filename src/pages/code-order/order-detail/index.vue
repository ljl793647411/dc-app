<template>
    <view>
        <order-detail title="订单已完成" :orderDetail="orderDeatilData"></order-detail>
    </view>
</template>

<script>
import OrderDetail from '@/components/order-detail/index'
export default {
    data() {
        return {
            orderDeatilData: {},
            orderId: '', // 订单id
        }
    },
    components: {
        OrderDetail
    },
    onLoad(options) {
        this.orderId = options.orderId || 1
        this.getOrderDetail()
    },
    methods: {
        // 获取订单详情
        getOrderDetail() {
            const postData = {
                order_id: Number(this.orderId)
            }
            this.$u.api.getOrderDetail(postData).then(res => {
                this.orderDeatilData = res || {}
            })
        }
    }
}
</script>

<style lang="scss" scoped>

</style>