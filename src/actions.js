const request = require('request-promise')
const {appendQuery} = require('./utils/helper')
const querystring = require('querystring')
const {SHOW_URL, SHOW_OPTIONS} = require('./utils/constants')

exports.fetchShows = function(url = SHOW_URL) {
    return request({
        url: appendQuery(url, querystring.stringify(SHOW_OPTIONS)),
        json: true,
    })
}