<template>
    <viwe>
        这是首页
        <u-button type="primary" shape="circle" @click="jumpCodeOrder">跳转点餐</u-button>
    </viwe>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		computed: {
			
		},
		methods: {
            jumpCodeOrder() {
                this.$u.route('/pages/code-order/code-order/index')
            },
        }
	}
</script>

<style lang="scss" scoped>
</style>
