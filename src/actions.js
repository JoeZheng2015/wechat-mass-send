const request = require('request-promise')
const {appendQuery} = require('./helper')
const querystring = require('querystring')

exports.fetchShows = function(url = 'http://b2cqq.show.wepiao.com/items') {
    const data = {
        city_name: '深圳',
        page: 1,
        per_page: 5000,
        type_pid: 'ff8080814a7ad6f1014a7adb6b540002',
    }

    return request({
        url: appendQuery(url, querystring.stringify(data)),
        json: true,
    })
}