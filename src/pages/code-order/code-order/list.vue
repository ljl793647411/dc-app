<template>
    <view class="right-list-box">
        <view v-for="item in list" :key="item" class="right-item" @click="jumpDetail">
            <product-item :productData="item"></product-item>
        </view>
    </view>
</template>

<script>
    import ProductItem from '@/components/custom-product-item/custom-product-item';
	export default {
		data() {
			return {
                list: new Array(20)
                
			}
		},
		computed: {
			
		},
        components: {
            ProductItem
        },
		methods: {
            jumpDetail() {
                this.$u.route('/pages/code-order/detail/index')
            }
		}
	}
</script>

<style lang="scss" scoped>
	.right-list-box {
        width: 100%;

        .right-item {
            margin-bottom: 17px;
        }
    }
	
</style>
