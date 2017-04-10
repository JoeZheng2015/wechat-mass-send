const {fetchShows} = require('./actions')
const {hasNewShow} = require('./utils/helper')
const {massSendText} = require('./weApi')

const HOUR = 1000 * 60 * 60

setInterval(() => {
    fetchShows()
        .then(res => {
            if (hasNewShow(res.list)) {
                massSendText('有新的演出啦，http://mqq.show.wepiao.com/category/ff8080814a7ad6f1014a7adb6b540002')
            }
        })
}, HOUR)
