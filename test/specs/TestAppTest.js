const homePage = require('../screeenobjects/home.page')
const mapPage = require('../screeenobjects/map.page')


describe('test TestApp', () => {
    it('should get correct answer from count sum function', function () {
        //check count sum
        homePage.countSum(1, 2);
        expect(homePage.answer).toHaveText("3");

        //check show alert
        homePage.showAlert();
        expect(homePage.alertMessage).toHaveText("this alert is so cool.");
        homePage.closeAlert();

        //operate slider
        homePage.setSlider(0.8);
        driver.hideKeyboard();

        //check disable button
        expect(homePage.disabledButton).toBeDisabled()

        //check calendar alert
        homePage.checkCalendar();
        expect(homePage.calendarMessage).toHaveText("not authorized")
        homePage.closeAlert();

        //test gesture
        homePage.testGesture()
        driver.execute('mobile: doubleTap', {element: mapPage.map});
        expect(mapPage.hongKongLabel).toHaveText('Hong Kong')
    });
})
