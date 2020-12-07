<template>
    <viwe>
        <view class="home-box">
            <view class="banner-home">
                <image src=""></image>
            </view>
            <view class="entrance-box">
                <view class="entrance-item" v-for="item in entranceModule" :key="item.id" @click="funcTrans(item.funcName)">
                    <view class="img">
                        <image :src="item.imgSrc"></image>
                    </view>
                    <view class="content">
                        <text class="title">{{item.title}}</text>
                        <text class="desc">{{item.desc}}</text>
                    </view>
                </view>
            </view>
            <home-title title="店铺精选"></home-title>
            <view class="home-product-list-box">
                <view v-for="(item, index) in productList" :key="index" :class="{'home-product-item': index === 0}">
                    <product-item-first :productDetail="item" v-if="index === 0" @saceCode="jumpCodeOrder"></product-item-first>
                    <product-item :productDetail="item" v-else @saceCode="jumpCodeOrder"></product-item>
                </view>
            </view>
            <home-title title="店铺动态"></home-title>
        </view>
    </viwe>
</template>

<script>
    import { HOME_FUNCTION_ENTRANCE } from '@common/config.js'
    import { saceCode } from '@common/utils.js'
    import HomeTitle from '@components/home-title/index'
    import ProductItem from './product-item'
    import ProductItemFirst from './product-item-first'

	export default {
		data() {
			return {
                entranceModule: HOME_FUNCTION_ENTRANCE,
                productList: new Array(9),
			}
        },
        mounted() {
                           
        },
		computed: {
        },
        components: {
            HomeTitle,
            ProductItem,
            ProductItemFirst,
        },
		methods: {
            // 跳转列表
            jumpCodeOrder() {
                const { result } = saceCode()
                this.$u.route('/pages/code-order/code-order/index')
            },
            // 方法转换
            funcTrans(name) {
                console.log('name', name)
                switch(name) {
                    case 'jumpCodeOrder':
                        this.jumpCodeOrder()
                        break
                }
            },
        }
	}
</script>

<style lang="scss" scoped>
    .home-box {
        padding: 14px;
        width: 100%;

        .banner-home {
            width: 100%;
            height: 153px;
            background: #cccccc;
        }

        .entrance-box {
            margin: 18px 0 35px;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;

            .entrance-item {
                width: 168px;
                height: 69px;
                background: #F3F4F7;
                border-radius: 10px;
                display: flex;
                align-items: center;
                padding: 14px;
                margin-bottom: 9px;

                .img {
                    width: 32px;
                    height: 28px;
                }

                .content {
                    padding-left: 17px;
                    display: flex;
                    flex-direction: column;
                    .title {
                        padding-bottom: 3px;
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
            }
        }
        .home-product-list-box {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;

            .home-product-item {
                width: 100%;
            }
        }
    }
</style>
