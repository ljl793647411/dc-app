<template>
    <view class="order-pay-page-box">
        <order-detail title="订单进行中" :orderDetail="orderDetailData"></order-detail>
        <view class="operation-btn-box">
            <button class="add-btn" @click="jumpProductList">加菜</button>
            <button class="jump-btn" @click="jumpDetail">完成订单</button>
        </view>
    </view>
</template>

<script>
import OrderDetail from '@/components/order-detail/index'
import { mapState } from 'vuex';
export default {
    data() {
        return {
            orderDetailData: {},
            orderId: '',
        }
    },
    components: {
        OrderDetail
    },
    onLoad(options) {
        this.orderId = options.orderId;
        this.getOrderDetail();
    }, 
    computed: {
        ...mapState({
            vuex_store_id: 'vuex_store_id',
            vuex_table_id: 'vuex_table_id'
        }),
    },
    methods: {
        // 跳转选择商品页
        jumpProductList() {
            this.$u.route('/pages/code-order/code-order/index', {
                tableId: this.orderDetailData.table_id || this.vuex_table_id,
                storeId: this.orderDetailData.store_id || this.vuex_store_id,
            })
        },
        // 完成订单跳转订单详情
        jumpDetail() {
            this.$u.route('/pages/code-order/order-detail/index', {
                orderId: this.orderId || ''
            })
        },
        getOrderDetail() {
            const postData = {
                order_id: Number(this.orderId)
            }
            this.$u.api.getOrderDetail(postData).then(res => {
                this.orderDetailData = res || {}
            })
        }
    }
}
</script>

<style lang="scss" scoped>
    .order-pay-page-box {
        width: 100%;

        .operation-btn-box {
            margin: 0 auto;
            margin-top: 33px;
            width: calc(100% - 54px);
            display: flex;
            justify-content: space-between;

            .add-btn {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 145px;
                height: 36px;
                background: #FFFFFF;
                border-radius: 21px;
                border: 1px solid #E02020;
                font-size: 14px;
                font-weight: 400;
                color: #E02020;
                line-height: 20px;
            }

            .jump-btn {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 145px;
                height: 36px;
                background: #E02020;
                border-radius: 21px;
                font-size: 14px;
                font-weight: 400;
                color: #FFFFFF;
                line-height: 20px;
            }
        }
    }
</style>