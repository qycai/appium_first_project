class HomeScreen {
    get preferenceButton() {
        return $('~Preference')
    }

    get preferenceFromXmlButton() {
        const selector = 'new UiSelector().text("1. Preferences from XML").className("android.widget.TextView")'
        return $(`android=${selector}`)
    }

    setPreferenceFromXml() {
        this.preferenceButton.click();
        this.preferenceFromXmlButton.click();
    }
}

module.exports = new HomeScreen()
