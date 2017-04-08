exports.encodeQuery = function (url, data = {}) {
    if (!data || !Object.keys(data).length) {
        return url
    }

    const result = url.indexOf('?') === -1 ? `${url}?` : `${url}&`
    const query = Object.keys(data).map(key => `${key}=${data[key]}`).join('&')

    return `${result}${query}`
}

let preShows = undefined
exports.hasNewShow = function(shows) {
    const result = preShows !== undefined && shows.length > preShows.length
    preShows = shows

    return result
}
