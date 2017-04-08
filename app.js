const WechatApi = require('wechat-api')

const appid = 'wxb71708e8fc08e734'
const appsecret = '1aba9b29319934a277ecafc7b5d338e2'

const api = new WechatApi(appid, appsecret)

const content = '郑俊鑫好腻害'
const recervers = 0 // 默认 0 是未分组的 id
const callback = (err, result) => {
    if (!err) {
        console.log('massSendText success result is:', result)
    }
}

api.massSendText(content, recervers, callback)
