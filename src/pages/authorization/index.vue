<template>
    <view>
        <view class="authorization-page-box">
            <view class="logo-img">
                <image src="/static/img/logo.png"></image>
            </view>
            <text class="desc">{{title}}</text>
            <button v-if="type === 'default'" class="auth-btn" open-type="getUserInfo" @getuserinfo="getuserinfoHandle">微信授权</button>
            <button v-if="type === 'cellphone'" class="auth-btn" open-type="getPhoneNumber" @getphonenumber="getCellphoneHandle">微信授权</button>
        </view>
    </view>
</template>
<script>
import { getuserinfoConfig, getCellphoneHandle } from '@/common/utils'
export default {
    data() {
        return {
            title: '申请获得您的公开信息（昵称、头像等）',
            type: 'default'
        }
    },
    onLoad(options) {
        const { getType } = options;
        if (getType === 'cellphone') {
            this.type = 'cellphone'
            this.title = '申请获得您的手机号'
        }
    },
    methods: {
        getuserinfoHandle(e) {
            getuserinfoConfig(this, e)
        },
        getCellphoneHandle(e) {
            getCellphoneHandle(this, e)
        },
    }
}
</script>
<style scoped lang="scss">
    .authorization-page-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100vw;
        height: 100vh;
        .logo-img {
            margin: 170px 0 70px;
            width: 143px;
            height: 156px;
        }
        .desc {
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: rgba(0, 0, 0, 0.85);
            line-height: 20px;
        }
        .auth-btn {
            margin-top: 40px;
            width: 165px;
            height: 40px;
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
    }
</style>