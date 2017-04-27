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
            console.log(`在${new Date().getHours()}时，有${shows.length}个项目`)
            const newShows = getNewShows(preShows, shows)

            newShows.forEach(show => {
                massSendText(`${show.item_title_cn}：http://mqq.show.wepiao.com/detail/${show.id}?static_api=false`)
            })
        })
}, HOUR)

console.log('项目已启动')