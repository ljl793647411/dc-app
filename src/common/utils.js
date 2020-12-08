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

// 调wx登录接口
const getWxLogin = () => {
    return new Promise((res, rej) => {
        uni.login({
            provider: 'weixin',
            success: function (loginRes) {
              res(loginRes)
            }
          });
    })
}

/**
 * @description 登录方法
 * @param {object} t 因为存放在utils里，所有需要把vm，也就是this传进来
 */
export const loginFunc = (t) => {
    return new Promise(async resolve => {
        try {
            // 调用uni.login
            const wxRes = await getWxLogin();
            const postData = {
                code: wxRes.code || ''
            }
            const res = await t.$u.api.login(postData)

            t.$store.commit('setSessionKey', res.session_key)
            resolve(true)
        } catch (err) {
            uni.showToast({
                icon: 'none',
                title: '网络超时1',
                duration: 2000
            })
        }
    })
}