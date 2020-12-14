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
            orderDeatilData: {}
        }
    },
    components: {
        OrderDetail
    },
    onLoad() {
        this.getOrderDetail()
    },
    methods: {
        // 获取订单详情
        getOrderDetail() {
            const postData = {
                order_id: 1
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