<template>
    <view class="order-tabbar-pages">
        <u-tabs :list="tabsList" :current="current" @change="tabsChange" active-color="#E02020" inactive-color="#000000c9" :active-item-style="{color: '#000000'}"></u-tabs>
        <view class="order-content">
            <view v-for="(item, index) in list" :key="index">
                <order-item :orderData="item"></order-item>
            </view>
        </view>
    </view>
</template>

<script>
import OrderItem from './order-item'
export default {
    data() {
        return {
            // tab集合
            tabsList: [
                {
                    name: '全部订单'
                },
                {
                    name: '堂食'
                },
                {
                    name: '预约'
                },
                {
                    name: '外卖'
                },
                {
                    name: '上门'
                },
            ],
            current: 0,
            // 订单列表集合
            list: []
        }
    },
    components: {
       OrderItem, 
    },
    mounted() {
        this.mock()
    },
    methods: {
        // tab切换
        tabsChange(index) {
            this.current = index
            this.mock()
        },
    }

}
</script>

<style lang="scss" scoped>
    .order-tabbar-pages {
        width: 100%;

        .order-content {
            width: 100%;
            padding: 16px;
            background: #ffffff;
        }
    }
</style>