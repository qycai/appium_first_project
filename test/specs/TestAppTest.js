const homeScreen = require('../screeenobjects/testAppScreen/home.screen')
const mapScreen = require('../screeenobjects/testAppScreen/map.screen')


describe('test TestApp', () => {
    it('should TestApp works correctly', function () {
        //check count sum
        homeScreen.countSum(1, 2);
        expect(homeScreen.answer).toHaveText("3");

        //check show alert
        homeScreen.showAlert();
        expect(homeScreen.alertMessage).toHaveText("this alert is so cool.");
        homeScreen.closeAlert();

        //operate slider
        homeScreen.setSlider(0.8);
        driver.hideKeyboard();

        //check disable button
        expect(homeScreen.disabledButton).toBeDisabled()

        //check calendar alert
        homeScreen.checkCalendar();
        expect(homeScreen.calendarMessage).toHaveText("not authorized")
        homeScreen.closeAlert();

        //test gesture
        homeScreen.testGesture()
        driver.execute('mobile: doubleTap', {element: mapScreen.map});
        expect(mapScreen.hongKongLabel).toHaveText('Hong Kong')
    });
})
