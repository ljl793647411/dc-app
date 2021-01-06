<template>
    <view class="order-detail-select-list">
        <view class="content-box">
            <view class="total-title">
                {{`共${orderSelectList.length || 0}件菜品`}}
            </view>
            <view v-for="(item, index) in orderSelectList" 
                :key="index"
            >
                <view class="order-info-box" v-if="index < showListNum">
                    <view class="left-img">
                        <image :src="item.img_src" class="img" />
                    </view>
                    <view class="right-content">
                        <view class="left-info">
                            <view class="name">{{item.name || ''}}</view>
                            <view class="desc">
                                {{`本月销量${item.sales || 0}份`}}
                            </view>
                        </view>
                        <view class="price-info">
                            <view class="price">{{`￥${item.product_price || 0}`}}</view>
                            <view class="num">
                                {{`x${item.product_num || 0}`}}
                            </view>
                        </view>
                    </view>
                </view>
            </view>
        </view>
        <view class="more" v-show="orderSelectList.length > 3">
            <text @click="changeMoreStatus" v-text="`${openMoreText}(共${orderSelectList.length || 0}件)`"></text>
        </view>
    </view>
</template>
<script>
export default {
    props: {
        orderSelectList: {
            type: Array,
            default: []
        }
    },
    data() {
        return {
            showListNum: 3, // 展示几条
        }
    },
    computed: {
        openMoreText() {
            return this.showListNum > 3 ? '收起' : '展开'
        }
    },
    methods: {
        // 展开收起
        changeMoreStatus() {
            if (this.showListNum > 3) {
                this.showListNum = 3
            } else {
                this.showListNum = this.orderSelectList.length
            }
        }
    }
}
</script>
<style scoped lang="scss">
    .order-detail-select-list {
        .content-box {
            margin: 0 29px;
            width: calc(100% - 54px);
            border-top: 2px dashed #D9D9D9;
            border-bottom: 2px dashed #D9D9D9;
            .total-title {
                font-size: 16px;
                font-weight: 600;
                color: rgba(0, 0, 0, 0.85);
                line-height: 22px;
                padding: 12px 0;
            }
            .order-info-box {
                width: 100%;
                height: 66px;
                display: flex;
                margin-bottom: 14px;
                .left-img {
                    width: 66px;
                    height: 66px;
                    background: #ccc;
                }
                .right-content {
                    width: 100%;
                    padding: 13px 16px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    flex-wrap: wrap;

                    .left-info {
                        .name {
                            font-size: 16px;
                            font-weight: 500;
                            color: rgba(0, 0, 0, 0.85);
                            line-height: 22px;
                        }
                        .desc {
                            font-size: 12px;
                            font-weight: 400;
                            color: rgba(0, 0, 0, 0.85);
                            line-height: 17px;
                        }
                    }
                    .price-info {
                        .price {
                            font-size: 14px;
                            font-weight: 600;
                            color: rgba(0, 0, 0, 0.85);
                            line-height: 20px;
                        }
                        .num {
                            font-size: 12px;
                            font-weight: 400;
                            color: rgba(0, 0, 0, 0.85);
                            line-height: 17px;
                        }
                    }
                }
            }
        }
        .more {
            padding-top: 12px;
            font-size: 14px;
            font-weight: 400;
            color: rgba(0, 0, 0, 0.85);
            line-height: 20px;
            text-align: center;
            width: calc(100% - 54px);
            margin: 0 29px;
        }
    }
</style>