// 只允许通过相机扫码
export const saceCode = () => {
    return new Promise((resolve, rej) => {
        uni.scanCode({
            onlyFromCamera: true,
            scanType: ['qrCode'],
            success: function (res) {
                console.log('条码类型scanType：' + res.scanType);
                console.log('条码内容result：' + res.result);
                console.log('条码内容charSet：' + res.charSet);
                console.log('条码内容path：' + res.path);
                resolve(res)
            }
        });
    })
}