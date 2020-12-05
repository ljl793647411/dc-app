<template>
    <view class="detail-box">
        <view class="head-box">
            <view class="title-box">
                <text class="title" v-text="title"></text>
            </view>
            <view class="order-info">
                <text class="name">醉徽湘</text>
                <view class="info">
                    <text>桌号：</text>
                    <text>一楼01号</text>
                </view>
                <view class="info">
                    <text>用餐人数：</text>
                    <text> 4人</text>
                </view>
                <view class="info">
                    <text>下单时间：</text>
                    <text>2020-12-02 12:12</text>
                </view>
            </view>
        </view>
        <view class="content-box">
            <view class="total-title">
                {{`共${dataList.length}件菜品`}}
            </view>
            <view v-for="(item, index) in dataList" 
                :key="index"
            >
                <view class="order-info-box" v-if="index < showListNum">
                    <view class="left-img">
                        <image :src="productData.img" class="img" />
                    </view>
                    <view class="right-content">
                        <view class="left-info">
                            <text class="name">秘制剁椒鱼头王</text>
                            <text class="desc">
                                本月销量90份
                            </text>
                        </view>
                        <view class="price-info">
                            <text class="price">￥49.00</text>
                            <text class="num">
                                ×1
                            </text>
                        </view>
                    </view>
                </view>
            </view>
        </view>
        <view class="more" v-show="dataList.length > 3">
            <text @click="changeMoreStatus">{{`${openMoreText}(共${dataList.length}件)`}}</text>
        </view>
        <text class="exrat-price">
            {{`餐具费：${4}元`}}
        </text>
        <view class="total-price-box">
            <text class="total-text">合计</text>
            <text class="total-num">￥233.40</text>
        </view>
    </view>
</template>

<script>
export default {
    props: {
        title: {
            type: String
        }
    },
    data() {
        return {
            dataList: new Array(9),
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
                this.showListNum = this.dataList.length
            }
        }
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

