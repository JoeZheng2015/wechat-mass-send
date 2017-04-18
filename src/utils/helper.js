exports.appendQuery = function(url, query) {
    if (!query) {
        return url
    }

    const result = url.indexOf('?') === -1 ? `${url}?` : `${url}&`

    return `${result}${query}`
}

exports.getNewShows = function(preShows, shows) {
    return shows.filter(show => preShows.findIndex(s => s.id === show.id) === -1)
}
