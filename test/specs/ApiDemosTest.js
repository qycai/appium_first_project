const homeScreen = require("../screeenobjects/apiDemosScreen/home.screen")
const preferenceScreen = require("../screeenobjects/apiDemosScreen/preference.screen")
describe('test ApiDemos', () => {
    it('should set preference successfully', function () {
        homeScreen.setPreferenceFromXml()
        preferenceScreen.setCheckboxPreferenceButton()
        preferenceScreen.setFavoriteAnimal()
        preferenceScreen.chooseOptionsByText("Alpha Option 01")
        preferenceScreen.setScreenPreference()
        preferenceScreen.setIntentPreference()
    });
})
