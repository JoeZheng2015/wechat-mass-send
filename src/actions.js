const request = require('request-promise')
const {appendQuery} = require('./utils/helper')
const querystring = require('querystring')
const {SHOW_URL, SHOW_OPTIONS} = require('./utils/config')

exports.fetchShows = function(url = SHOW_URL) {
    return request({
        url: appendQuery(url, querystring.stringify(Object.assign({}, SHOW_OPTIONS, {
            _t: Date.now(),
        }))),
        json: true,
    })
}