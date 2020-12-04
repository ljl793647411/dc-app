<template>
    <view class="selected-board-box-class">
        <view class="message-content-box">
            <view class="desk-num-info">
                <text>桌号：</text>
                <text>1楼01号</text>
            </view>
            <view class="eat-people-num">
                <text>用餐人数：</text>
                <text>4人</text>
                <text class="select">请选择用餐人数</text>
            </view>
        </view>
        <view class="bottom-box">
            <view class="shopping-box">
                <view class="icon-box">
                    <u-badge count="7" :offset="[-8, -8]" bgColor="#E02020"></u-badge>
                    <image src="/static/img/list-icon.png"></image>
                </view>
                <view class="right-box">
                    <view class="price-box">
                        <text class="rmb">￥</text>
                        <text class="total">
                            216.00
                        </text>
                    </view>
                    <text class="desc">已选择8件菜品</text>
                </view>
            </view>
            <view class="btn-box" >立即下单</view>
        </view>
    </view>
</template>

<script>
	export default {
        props: {
           
        },
		data() {
			return {
			}
		},
		computed: {
			
		},
		methods: {
		}
	}
</script>

<style lang="scss" scoped>
	.selected-board-box-class {
        width: 100%;
        height: 120px;
        position: fixed;
        z-index: 9999;
        bottom: 0;
        left: 0;
        background: #fff;
        padding: 10px 20px;
        box-sizing: border-box;

        .message-content-box {
            width: 100%;
            margin-bottom: 12px;
            display: flex;

            .desk-num-info {
                display: flex;
                align-items: center;
                font-size: 14px;
                font-weight: 400;
                color: rgba(0, 0, 0, 0.85);
                line-height: 20px;
                padding-right: 30px;
            }

            .eat-people-num {
                display: flex;
                align-items: center;
                font-size: 14px;
                font-weight: 400;
                color: rgba(0, 0, 0, 0.85);
                line-height: 20px;

                .select {
                    color: #7D8699;
                }
            }
        }

        .bottom-box {
            display: flex;
            justify-content: space-between;
            align-items: center;

            .btn-box {
                width: 91px;
                height: 26px;
                display: flex;
                align-items: center;
                justify-content: center;
                background: #E02020;
                font-size: 12px;
                font-weight: 400;
                color: #FFFFFF;
                line-height: 17px;
                border-radius: 21px;
            }

            .shopping-box {
                display: flex;
                .icon-box {
                    width: 40px;
                    height: 40px;
                    position: relative;
                }

                .right-box {
                    padding-left: 11px;
                    font-weight: 400;
                    color: rgba(0, 0, 0, 0.85);
                    line-height: 17px;
                   
                   .price-box {
                        .rmb {
                            font-size: 12px;
                        }

                        .total {
                            font-size: 16px;
                        }
                   }
                   .desc {
                        font-size: 12px;
                   }
                }
            }
        }

    }

    
	
</style>
