const {fetchShows} = require('./actions')
const {getNewShows} = require('./utils/helper')
const {massSendText} = require('./utils/weApi')

const HOUR = 1000 * 60 * 60

let preShows = undefined
setInterval(() => {
    fetchShows()
        .then(res => {
            const shows = res.list

            if (preShows === undefined) {
                preShows = shows
            }
            return shows
        })
        .then(shows => {
            const newShows = getNewShows(preShows, shows)
            if (newShows.length) {
                const urls = newShows.map(show => `http://mqq.show.wepiao.com/detail/${show.id}?static_api=false`)
                massSendText(`有${newShows.length}个新的演出：${urls.join(' ')}`)
            }
            else if (new Date().getHours() === 18) {
                massSendText('今天没有新演出了')
            }
        })
}, HOUR)
