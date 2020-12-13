const socketTask = (tableId, userId) => {
    // 连接是否打开
    let isOpen = false;
    // 定时函数
    let timer = 0;

    let ws = uni.connectSocket({
        url: `ws://zimx52.natappfree.cc/websocket.ws/${tableId}/${userId}`,
        success: () => {}
    })
    ws.onOpen(function () {
        isOpen = true;
        if (isOpen) {
            start()
        }
    })
    ws.onError(function () {
        console.log('WebSocket连接打开失败，请检查！', res);
    });

    function start () {
        timer = setTimeout(() => {
            ws.send({
                data: 'ping',
                success: res => {
                    console.log('连接中....');
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
    })

    return ws();
};

export default socketTask;