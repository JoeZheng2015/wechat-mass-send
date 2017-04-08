const WechatApi = require('wechat-api')
const {fetchShows} = require('./actions')
const {hasNewShow} = require('./helper')

const HOUR = 1000 * 60 * 60

const appid = 'wxb71708e8fc08e734'
const appsecret = '1aba9b29319934a277ecafc7b5d338e2'

const api = new WechatApi(appid, appsecret)

setInterval(() => {
    fetchShows()
        .then(res => {
            if (hasNewShow(res.list)) {
                const content = '有新的演出啦，http://mqq.show.wepiao.com/category/ff8080814a7ad6f1014a7adb6b540002'
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
            }
        })
}, HOUR)
