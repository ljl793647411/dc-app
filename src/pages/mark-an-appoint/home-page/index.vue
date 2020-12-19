<template>
    <view class="home-page">
        <view class="home-container">
            <view class="head-img">
                <image></image>
            </view>
            <view class="location-info-box">
                <view class="store-info">
                    <view class="store-name">醉徽湘（盛泰路店）</view>
                    <view class="store-start-time">9:30-24:00营业</view>
                </view>
                <view class="location-tip-box">
                    <text class="text">当前离您最近的餐馆</text>
                    <text class="change-store">更换餐馆</text>
                </view>
                <view class="store-loaction-position">
                    <text class="text">山东省东营市东营区盛泰路131号</text>
                    <view class="right-icon">
                        <view class="icon">
                            <image src=""></image>
                        </view>
                        <viewv class="line"></viewv>
                        <view class="icon">
                            <image src=""></image>
                        </view>
                    </view>
                </view>
            </view>
            <view class="mark-an-appoint-form">
                <view class="title">预约点餐</view>
                <view class="form-item">
                    <view class="label">选择用餐时间</view>
                    <view class="form-time" @click="openTimePicker">{{time}}</view>
                </view>
                <view class="form-item">
                    <view class="label">用餐人数</view>
                    <view class="form">
                            <u-input
                                type="number"
                                placeholder="请输入"
                                v-model="eatNum"
                                :height="17"
                                placeholder-style="color: #0000007d;font-size: 14px;lineHeight: 17px;textAlign: right;"
                                :custom-style="{
                                    background: transparent,
                                    border: none,
                                    fontSize: '14px',
                                    height: '17px',
                                    lineHeight: '17px',
                                    width: '200px',
                                    textAlign: 'right',
                                }"
                            >
                            </u-input>
                    </view>
                </view>
                <view class="form-item">
                    <view class="label">手机号</view>
                    <view class="form-time">
                        {{cellphone}}
                    </view>
                </view>
                <view class="form-item-desk">
                    <view class="label">选择桌号</view>
                    <view class="desk-box">
                        <view v-for="(item, index) in deskList" :key="index" :class="['desk-item', {'desk-selected': item.selected}, {'desk-active': activeDesk === index}]" @click="selectDeskHandle(index)">
                            <view>{{item.deskName}}</view>
                            <view>
                                <text>座位数：</text>
                                <text>{{item.num}}人</text>
                            </view>
                        </view>
                    </view>
                    <view class="desk-lagend">
                        <view class="desk-lagend-item lagend-margin">
                            <view class="desk-lagend-pic red"></view>
                            <text class="desk-lagend-text">已预约</text>
                        </view>
                        <view class="desk-lagend-item">
                            <view class="desk-lagend-pic"></view>
                            <text class="desk-lagend-text">未预约</text>
                        </view>
                    </view>
                </view>
            </view>
            <view class="submit-btn-box">
                <view class="submit-btn" @click="submit">
                    立即预约
                </view>
                <view class="tip">到店即可立即享用，无需等待</view>
            </view>

        </view>
        <u-picker 
            mode="time" 
            v-model="showTime"
            title="选择时间"
            safe-area-inset-bottom
            @confirm="bindTimeChange"
            :default-time="defaultTime"
            :params="{
                year: true,
                month: true,
                day: true,
                hour: true,
                minute: true,
                second: false
            }"
        ></u-picker>
    </view>
</template>
<script>
import { mapState } from 'vuex';
export default {
    data() {
        return {
            time: '请选择用餐时间', // 用餐时间
            eatNum: '', // 用餐人数
            cellphone: vuex_cellphone, // 手机号
            deskNum: '', // 桌号
            showTime: false,
            defaultTime: this.moment().format('YYYY-MM-DD HH:mm'), // 默认用餐时间
            activeDesk: undefined, // 选择的桌子
            deskList: [
                {
                    deskName: '1号桌',
                    num: 4,
                    selected: false,
                },
                {
                    deskName: '2号桌',
                    num: 4,
                    selected: true,
                },
                {
                    deskName: '3号桌',
                    num: 4,
                    selected: false,
                },
                {
                    deskName: '4号桌',
                    num: 4,
                    selected: false,
                },
                {
                    deskName: '5号桌',
                    num: 4,
                    selected: false,
                },
                {
                    deskName: '6号桌',
                    num: 4,
                    selected: false,
                },
                {
                    deskName: '7号桌',
                    num: 4,
                    selected: false,
                },
                {
                    deskName: '8号桌',
                    num: 4,
                    selected: false,
                },
                {
                    deskName: '9号桌',
                    num: 4,
                    selected: false,
                },
            ]
        }
    },
    computed: {
        ...mapState({
            vuex_cellphone: 'vuex_cellphone',
        }),
    },
    methods: {
        bindTimeChange: function(e) {
            this.time = this.moment(e.timestamp).format('YYYY-MM-DD HH:mm');
        },
        // 打开时间选择器
        openTimePicker() {
            this.showTime = true;
        },
        // 选择桌号
        selectDeskHandle(index) {
            this.activeDesk = index
            this.deskNum = index
        },
        // 提交预约
        submit() {
            const postData = {
                time: this.time,
                eatNum:  this.eatNum,
                cellphone: this.cellphone,
                deskNum: this.deskNum
            }
            console.log('postData', postData)
            this.$u.route('/pages/mark-an-appoint/code-order/index')
        }
    }
}
</script>
<style scoped lang="scss">
    .home-page {
        width: 100%;

        .home-container {
            width: calc(100% - 32px);
            height: auto;
            background: #FFFFFF;
            box-shadow: 0px 0px 30px 0px rgba(141, 151, 158, 0.2);
            border-radius: 12px;
            margin: 16px auto;

            .head-img {
                width: 100%;
                height: 131px;
                border-radius: 12px 12px 0px 0px;
                background: #cccccc; 
            }
            .location-info-box {
                    padding: 20px 16px;
                    .store-info {
                        display: flex;
                        align-items: flex-end;

                        .store-name {
                            font-size: 18px;
                            font-weight: 400;
                            color: #1D1E2C;
                            line-height: 24px;
                        }
                        .store-start-time {
                            font-size: 12px;
                            font-weight: 400;
                            color: #1D1E2C;
                            line-height: 17px;
                            margin-left: 12px;
                        }
                    }

                    .location-tip-box {
                        margin: 5px 0;
                        display: flex;
                        align-items: center;
                        font-size: 14px;
                        font-weight: 400;
                        line-height: 20px;

                        .text {
                            color: #7D8699;
                        }
                        .change-store {
                            color: #E02020;
                            padding-left: 12px;
                        }
                    }

                    .store-loaction-position {
                        display: flex;
                        align-items: center;
                        font-size: 14px;
                        font-weight: 400;
                        line-height: 20px;
                        justify-content: space-between;

                        .text {
                            color: #7D8699;
                        }
                        .right-icon {
                            width: 77px;
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
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
            .mark-an-appoint-form {
                padding: 0 16px;
                .title {
                    font-size: 18px;
                    font-weight: 600;
                    color: #1D1E2C;
                    line-height: 24px;
                    padding-bottom: 20px;
                }
                .form-item {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding-bottom: 20px;

                    .label {
                        font-size: 14px;
                        font-weight: 400;
                        color: #323233;
                        line-height: 18px;
                    }

                    .form {
                        width: 200px;
                    }
                    .form-time {
                        text-align: right;
                        width: 150px;
                    }
                }

                .form-item-desk {
                    padding-bottom: 20px;
                    
                    .label {
                        font-size: 14px;
                        font-weight: 400;
                        color: #323233;
                        line-height: 18px;
                    }

                    .desk-box {
                        width: 100%;
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: space-between;
                        margin-top: 12px;

                        .desk-item {
                            width: 96px;
                            height: 54px;
                            background: #FFFFFF;
                            border-radius: 6px;
                            border: 1px solid #7D8699;
                            padding: 10px 12px;
                            font-size: 12px;
                            font-weight: 400;
                            color: #323233;
                            line-height: 18px;
                            margin-bottom: 7px;
                        }
                        .desk-active {
                            color: #ffffff;
                            background: #E02020;
                            border: 1px solid #E02020;
                        }

                        .desk-selected {
                            border: 1px solid #E02020;
                        }
                    }

                    .desk-lagend {
                        margin-top: 12px;
                        display: flex;
                        justify-content: center;
                        align-items: center;

                        .desk-lagend-item {
                            display: flex;
                            align-items: center;
                            .desk-lagend-pic {
                                width: 20px;
                                height: 14px;
                                background: #FFFFFF;
                                border-radius: 6px;
                                border: 1px solid #8D979E;
                            }
                            .red {
                                border: 1px solid #E02020;
                            }
                            .desk-lagend-text {
                                padding-left: 2px;
                                font-size: 12px;
                                font-weight: 400;
                                color: #323233;
                                line-height: 18px;
                            }
                        }

                        .lagend-margin {
                            margin-right: 16px;
                        }
                    }
                }

            }
            .submit-btn-box {
                width: 100%;
                padding-top: 20px;
                padding-bottom: 16px;
                display: flex;
                flex-direction: column;
                align-items: center;
                .submit-btn {
                    width: 237px;
                    height: 36px;
                    background: #E02020;
                    border-radius: 21px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 14px;
                    font-weight: 400;
                    color: #FFFFFF;
                    line-height: 20px;
                }
                .tip {
                    margin-top: 14px;
                    font-size: 12px;
                    font-weight: 400;
                    color: #FA6400;
                    line-height: 18px;
                }
            }
        }
    }
</style>