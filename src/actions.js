const request = require('request-promise')
const {encodeQuery} = require('./helper')

exports.fetchShows = function () {
    const SHOWS_URL = 'http://b2cqq.show.wepiao.com/items'
    const data = {
        city_name: '%E6%B7%B1%E5%9C%B3',
        page: 1,
        per_page: 5000,
        type_pid: 'ff8080814a7ad6f1014a7adb6b540002',
    }
    const url = encodeQuery(SHOWS_URL, data)

    return request({
        url,
        json: true,
    })
}