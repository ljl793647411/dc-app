<template>
    <view>
        <view class="door-item-box">
            <view class="door-img">
                <image src=""></image>
            </view>
            <view class="info-box">
                <view class="left-box">
                    <view class="name">
                        <text>醉徽湘(盛泰路店)</text>
                    </view>
                    <view class="date">
                        <text>9:30-24:00营业</text>
                    </view>
                    <view class="address">
                        <text>山东省东营市东营区盛泰路131号</text>
                    </view>
                </view>
                <view class="right-icon">
                    <view class="icon">
                        <image src=""></image>
                    </view>
                    <view class="line"></view>
                    <view class="icon">
                        <image src=""></image>
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
    .door-item-box {
        width: 100%;
        height: 236px;
        box-shadow: 0px 0px 30px 0px rgba(141, 151, 158, 0.2);
        border-radius: 12px;

        .door-img {
            width: 100%;
            height: 131px;
            background: #cccccc;
            border-radius: 12px 12px 0px 0px;
        }
        .info-box {
            width: 100%;
            padding: 16px;
            display: flex;
            justify-content: space-between;
            align-items: center;

            .left-box {
                flex: 1;
                .name {
                    font-size: 18px;
                    font-weight: 400;
                    color: #1D1E2C;
                    line-height: 24px;
                    padding-bottom: 12px;
                }
                .date {
                    font-size: 12px;
                    font-weight: 400;
                    color: #1D1E2C;
                    line-height: 17px;
                    padding-bottom: 6px;
                }
                .address {
                    font-size: 12px;
                    font-weight: 400;
                    color: #7D8699;
                    line-height: 17px;
                }
            }
            .right-icon {
                width: 77px;
                display: flex;
                align-items: center;
                .icon {
                    width: 19px;
                    height: 19px;
                    background: #7D8699;
                }
                .line {
                    width: 1px;
                    height: 19px;
                    background: #7D8699;
                }
            }
            
        }
    }
</style>