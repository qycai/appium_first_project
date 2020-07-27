class MapScreen {
    get map() {
        const selector = `type=='XCUIElementTypeMap'`;
        return $(`-ios predicate string:${selector}`)
        return
    }

    get hongKongLabel() {
        return $('~Hong Kong')
    }

}

module.exports = new MapScreen()
