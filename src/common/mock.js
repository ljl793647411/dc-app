//首页热门商品
const hotProduct = {
    "hotProduct": [
        {
            "product_id": 1, // 商品id
            "img_src": "", // 商品图片
            "name": "秘制剁椒鱼头王", // 商品名称
            "sales": 30, // 今日销量
            "old_price": 69.00, // 原价
            "new_price": 49.00, // 现价
        }
    ]
}
// 订单管理列表
const orderList = [
    {
        order_id: 1, // 订单id
        order_type: 1, // 订单类型
        order_status: 1, // 订单状态
        start_time: '2020-12-12 12:12:12', // 开始时间
        pay_time: '2020-12-12 12:12:12', // 支付时间
        end_time: '2020-12-12 12:12:12', // 结束时间
        order_goods_num: 11, // 下单菜品数量
        shop_name: '醉徽湘(盛泰路店)', // 门店名称，看看这个字段是否要拆成两个，，另一个是地址
    }
]
// 商品列表
const productList = {
    category_list: [
        {
            name: '凉菜', // 类别名称
            child_key: 1, // 对应的商品列表key
            product_list: [
                {
                    parent_key: 1, // 对应的类别key
                    "product_id": 1, // 商品id
                    "img_src": "", // 商品图片
                    "name": "秘制剁椒鱼头王", // 商品名称
                    "sales": 30, // 今日销量
                    "old_price": 69.00, // 原价
                    "new_price": 49.00, // 现价
                    selecteed_num: 1, // 已选择的菜品数量
                }
            ]
        }
    ],
}
// 模糊搜索商品列表
const fuzzySearchGoodsList = [
    {
        "product_id": 1, // 商品id
        "img_src": "", // 商品图片
        "name": "秘制剁椒鱼头王", // 商品名称
        "sales": 30, // 今日销量
        "old_price": 69.00, // 原价
        "new_price": 49.00, // 现价
        selecteed_num: 1, // 已选择的菜品数量
    }
]
// 购物车数据
// 购物车数据应该是以桌号为维度
const shopCartList = {
     desk_id: 1, // 桌号id
     desk_name: '一楼01号', // 桌号名称
     eat_numb: 4, // 用餐人数
     selected_num_total: 8, // 购物车总共菜品数量
     total_price: 233.40, // 总价
     extra_price: 4, // 餐具费
     selelted_goods_list: [
         {
            "product_id": 1, // 商品id
            "img_src": "", // 商品图片
            "name": "秘制剁椒鱼头王", // 商品名称
            "new_price": 49.00, // 现价
            selecteed_num: 1, // 已选择的菜品数量
         }
     ]
}
// 商品详情
const productDetai = {
    "product_id": 1, // 商品id
    "img_src": "", // 商品图片
    "name": "秘制剁椒鱼头王", // 商品名称
    "sales": 30, // 今日销量
    "old_price": 69.00, // 原价
    "new_price": 49.00, // 现价
    selecteed_num: 1, // 已选择的菜品数量
    product_desc: 'balabalbalabla', // 商品简介
}
// 订单详情
const orderDetail = {
    order_type: 1, // 订单类型
    order_status: 1, // 订单状态
    order_detail_id: 1, // 订单详情id
    order_id: 1, // 订单id   这两个id不一样么
    shop_name: '醉徽湘(盛泰路店)', // 门店名称，看看这个字段是否要拆成两个，，另一个是地址
    desk_id: 1, // 桌号id
    desk_name: '一楼01号', // 桌号名称
    eat_numb: 4, // 用餐人数
    start_time: '2020-12-12 12:12:12', // 下单时间。开始时间
    total_price: 233.40, // 总价
    extra_price: 4, // 餐具费
    discount_price: 23.0, // 优惠价格
    product_list: [ // 购买的商品列表
        {
            product_id: 1, // 商品id
            product_price: 44.0, // 商品购买价格
            product_num: 2, // 商品购买数量
        }
    ]
}