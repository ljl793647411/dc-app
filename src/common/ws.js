const socketTask = (tableId, userId) => {
    // 连接是否打开
    let isOpen = false;
    // 定时函数
    let timer = 0;

    let ws = uni.connectSocket({
        url: `wss://xcx.xiaozuiweng.com/websocket.ws/${tableId}/${userId}`,
        // url: `ws://47.111.184.105/websocket.ws/${tableId}/${userId}`,
        // url: `ws://baxz45.natappfree.cc/websocket.ws/${tableId}/${userId}`,
        success: () => {}
    })
    ws.onOpen(function () {
        isOpen = true;
        if (isOpen) {
            start()
        }
    })
    ws.onError(function () {
        clearTimeout(timer)
        console.log('WebSocket连接打开失败，请检查！', res);
    });

    function start () {
        clearTimeout(timer)
        timer = setTimeout(() => {
            ws.send({
                data: 'ping',
                success: res => {
                    console.log('连接中....');
                    start();
                },
                fail: err => {
                    console.log('连接失败重新连接....');
                    ws = socketTask();
                }
            })
        }, 10000);
    }

    ws.onClose(function () {
        isOpen = false;
        clearTimeout(timer)
        console.log('关闭连接....');
    })

    return ws;
};

export default socketTask;