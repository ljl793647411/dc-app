
<script>
	export default {
        onLaunch: function() {
            console.log('App Launch')
            uni.authorize({
                scope: 'scope.userInfo',
                success() {
                    uni.getLocation()
                }
            })
		},
		onShow: function() {
            console.log('App Show')
		},
		onHide: function() {
            console.log('App Hide')
		}
	}
</script>
<style lang="scss">
    /*每个页面公共css */
    @import "uview-ui/index.scss";

    image {
        width: 100%;
        height: 100%; 
    }

    .global-mask {
        width: 100vw;
        height: 100vh;
        background: rgba(0, 0, 0, 0.65);
        position: absolute;
        top: 0;
        left: 0;
        z-index: 100;
    }

    // 预留购物面板的距离
    .shopping-show-active {
        padding-bottom: 120px;
    }
</style>
