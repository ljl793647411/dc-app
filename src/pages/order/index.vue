<template>
    <view class="order-tabbar-pages">
        <u-tabs :list="tabsList" :current="current" @change="tabsChange" active-color="#E02020" inactive-color="#000000c9" :active-item-style="{color: '#000000'}"></u-tabs>
        <view class="order-content">
            <view v-for="(item, index) in list" :key="index">
                <order-item :data="item"></order-item>
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
            list: [],
            item: {
                title: '醉徽湘（盛泰路店）',
                date: '2020-12-01 07:21',
                desc: '共计 8 件菜品',
                type: 1,
                status: 1
            },
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
        aa() {
            return Math.abs(Math.floor(Math.random() * 10))
        },
        mock() {
            const length = this.aa()
            const enums = [1, 2]
            let _list = []
            for(let i = 0; i <= length;i++) {
                let _item = {...this.item}
                _item.type = this.aa() % 2 === 1 ? 1 : 2
                _item.status = this.aa() % 2 === 1 ? 1 : 2
                _list.push(_item)
            }
            this.list = _list
        }
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