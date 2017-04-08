const WechatApi = require('wechat-api')

const appid = 'wx900033d8b8083d6d'
const appsecret = '6ae69555c410768d44e7cafbdf188546'

const api = new WechatApi(appid, appsecret)

const content = '郑俊鑫好腻害'
const recervers = 0 // 默认 0 是未分组的 id
const callback = (err, result) => {
    if (err) {
        console.log('massSendText fail', err)
    }
    else {
        console.log('massSendText success', result)
    }
}

api.massSendText(content, recervers, callback)
