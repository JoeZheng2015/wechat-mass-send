let preShows = undefined
exports.hasNewShow = function(shows) {
    const result = preShows !== undefined && shows.length > preShows.length
    preShows = shows

    return result
}

exports.appendQuery = function(url, query) {
    if (!query) {
        return url
    }

    const result = url.indexOf('?') === -1 ? `${url}?` : `${url}&`

    return `${result}${query}`
}
