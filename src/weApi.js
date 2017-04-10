const WechatApi = require('wechat-api')

const appid = 'wxb71708e8fc08e734'
const appsecret = '1aba9b29319934a277ecafc7b5d338e2'

const api = new WechatApi(appid, appsecret)

const defaultCallback = (err, result) => {
    if (err) {
        console.log('massSendText fail', err)
    }
    else {
        console.log('massSendText success', result)
    }
}

exports.massSendText = function(content, recervers = 0, callback = defaultCallback) {
    // api.massSendText(content, recervers, callback)
    console.log(content, recervers)
}