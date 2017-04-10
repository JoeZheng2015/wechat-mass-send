const WechatApi = require('wechat-api')
const {APPID, APPSECRET} = require('./constants')

const api = new WechatApi(APPID, APPSECRET)

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