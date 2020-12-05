<template>
    <view>
        <view class="home-title-public">
            <text class="title">{{title}}</text>
            <view class="line"></view>
        </view>
    </view>
</template>

<script>
export default {
    props: {
        title: {
            type: String
        }
    }
}
</script>

<style lang="scss" scoped>
    .home-title-public {
        .title {
            font-size: 18px;
            font-weight: 500;
            color: rgba(0, 0, 0, 0.85);
            line-height: 25px;
        }
        .line {
            width: 72px;
            height: 4px;
            background: #E02020;
            border-radius: 21px;
            margin-top: 5px;
            margin-bottom: 20px;
        }
    }
</style>