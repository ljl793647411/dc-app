<template>
    <view class="change-door-page-box">
        <door-item></door-item>
    </view>
</template>
<script>
import DoorItem from './door-item.vue';
export default {
    data() {
        return {

        }
    },
    components: {
        DoorItem,
    }
    
}
</script>
<style lang="scss" scoped>
    .change-door-page-box {
        width: 100%;
        height: 100%;
        padding: 16px 19px;
    }
</style>