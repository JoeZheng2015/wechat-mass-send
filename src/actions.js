const request = require('request-promise')
const {appendQuery} = require('./helper')
const querystring = require('querystring')
const {SHOW_URL} = require('./utils/constants')

exports.fetchShows = function(url = SHOW_URL) {
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