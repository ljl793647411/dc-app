<template>
    <view class="right-list-box">
        <view v-for="item in list" :key="item" class="right-item">
            <product-item :productData="item"></product-item>
        </view>
    </view>
</template>

<script>
    import ProductItem from '@components/custom-product-item/custom-product-item';
	export default {
		data() {
			return {
                list: [1,2,3]
                
			}
		},
		computed: {
			
		},
        components: {
            ProductItem
        },
		methods: {
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
