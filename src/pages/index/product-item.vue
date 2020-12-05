<template>
    <view>
        <view class="home-product-item-box">
            <view class="img">
                <image src=""></image>
            </view>
            <view class="title">
                <text>秘制剁椒鱼头王</text>
            </view>
            <view class="bottom-content">
                <view class="desc-box">
                    <view class="desc">
                        <text>
                            {{`本月销量 90份`}}
                        </text>
                    </view>
                    <view class="price-box">
                        <view class="price">
                            ￥49.00
                        </view>
                        <view class="del-price">
                            ￥69.00
                        </view>
                    </view>
                </view>
                <view class="add-btn">
                    +
                </view>
            </view>
        </view>
    </view>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .home-product-item-box {
        width: 167px;
        height: 210px;
        background: #FFFFFF;
        box-shadow: 0px 0px 30px 0px rgba(141, 151, 158, 0.2);
        border-radius: 12px;
        margin-bottom: 13px;
        padding: 8px;

        .img {
            width: 151px;
            height: 108px;
            background: #ccc;
        }

        .title {
            font-size: 16px;
            font-weight: 500;
            color: rgba(0, 0, 0, 0.85);
            line-height: 22px;
            margin-top: 15px;
        }

        .bottom-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 2px;
            .desc-box {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                .desc {
                    font-size: 12px;
                    font-weight: 400;
                    color: rgba(0, 0, 0, 0.85);
                    line-height: 17px;
                    padding-bottom: 6px;
                    min-height: 20px;
                }

                .price-box {
                    display: flex;
                    align-items: center;

                    .price {
                        font-size: 14px;
                        font-weight: 600;
                        color: #E02020;
                        line-height: 20px; 
                        padding-right: 10px;
                    }
                    .del-price {
                        font-size: 12px;
                        font-weight: 400;
                        color: rgba(0, 0, 0, 0.5);
                        line-height: 17px;
                        text-decoration:line-through;
                    }
                }
            }
            .add-btn {
                width: 25px;
                height: 25px;
                background: #E02020;
                border-radius: 50%;
                font-size: 10px;
                color: #fff;
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
    }
</style>