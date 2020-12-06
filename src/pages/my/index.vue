<template>
    <view>
        <view class="my-pages-box">
            <view class="head-box">
                <view class="profile-photo">
                    <image src=""></image>
                </view>
                <view class="my-info">
                    <text class="name">微信名</text>
                    <view class="phone-box">
                        <text class="phone">手机号</text>
                        <view class="update-phone-btn">修改</view>
                    </view>
                </view>
                <view class="my-info-card">
                    <view class="title-box">
                        <view class="icon">
                            <image src=""></image>
                        </view>
                        <text class="text">钱包</text>
                    </view>
                    <view class="content">
                        <view class="content-item border-line">
                            <view class="content-icon">
                                <image src="/static/img/balance.png"></image>
                            </view>
                            <view class="info-box">
                                <view class="name">
                                    余额
                                </view>
                                <view class="value">
                                    ￥4444.0
                                </view>
                            </view>
                        </view>
                        <view class="content-item">
                            <view class="content-icon">
                                <image src="/static/img/coupons.png"></image>
                            </view>
                            <view class="info-box">
                                <view class="name">
                                    优惠券
                                </view>
                                <view class="value">
                                    <text>4</text>
                                    <text class="font-color">个未使用</text>
                                </view>
                            </view>
                        </view>
                    </view>
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
    .my-pages-box {
        width: 100%;
        .head-box {
            width: 100%;
            height: 173px;
            background: #E02020;
            padding-bottom: 45px;
            padding-left: 46px;
            display: flex;
            align-items: center;
            position: relative;

            .profile-photo {
                width: 71px;
                height: 71px;
                border-radius: 50%;
                background: #ccc;
            }

            .my-info {
                padding: 12px 0;
                margin-left: 16px;
                font-weight: 400;
                color: #FFFFFF;
                line-height: 24px;

                .name {
                    font-size: 16px;
                }
                
                .phone-box {
                    display: flex;
                    align-items: center;

                    .phone {
                        font-size: 12px;
                    }

                    .update-phone-btn {
                        font-size: 10px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        background: #FFFFFF;
                        border-radius: 8px;
                        opacity: 0.79;
                        width: 43px;
                        height: 15px;
                        font-size: 10px;
                        font-weight: 400;
                        color: #E02020;
                        margin-left: 2px;
                    }
                }
            }

            .my-info-card {
                width: calc(100% - 30px);
                height: 123px;
                background: #FFFFFF;
                box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.25);
                border-radius: 7px;
                position: absolute;
                bottom: -78px;
                left: 15px;
                z-index: 2;
                padding: 13px 0;

                .content {
                    margin-top: 21px;
                    display: flex;
                    align-items: flex-start;

                    .content-item {
                        display: flex;
                        width: calc(50% - 2px);
                        height: 48px;
                        align-items: center;
                        padding-left: 19px;
                    }

                    .border-line {
                        border-right: 2px solid #979797;
                    }

                    .content-icon {
                        width: 31px;
                        height: 34px;
                        margin-right: 17px;
                    }
                    .info-box {
                        .name {
                            font-size: 13px;
                            font-weight: 400;
                            color: rgba(0, 0, 0, 0.85);
                            line-height: 24px;
                        }
                        .value {
                            font-size: 16px;
                            font-weight: 600;
                            color: #E02020;
                            line-height: 24px;
                            .font-color {
                                font-size: 14px;
                                font-weight: 400;
                                color: #000000;
                                line-height: 24px;
                            }
                        }
                    }
                }

                .title-box {
                    display: flex;
                    padding-left: 18px;

                    .icon {
                        width: 19px;
                        height: 17px;
                        margin-right: 3px;
                    }

                    .text {
                        font-size: 16px;
                        font-weight: 600;
                        color: rgba(0, 0, 0, 0.85);
                        line-height: 24px;
                    }
                }
            }
        }
    }
</style>