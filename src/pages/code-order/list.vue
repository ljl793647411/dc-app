<template>
    <view>
        <view v-for="item in list" :key="item">
            <product-item :productData="item"></product-item>
            213123
        </view>
    </view>
</template>

<script>
    import ProductItem from '@components/custom-product-item/custom-product-item';
	export default {
		data() {
			return {
                list: [1,2,3],
                
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
	
	
</style>
