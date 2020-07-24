class HomeScreen {
    get integerA() {
        return $('~IntegerA')
    }

    get integerB() {
        return $('~IntegerB')
    }

    get sunButton() {
        return $('~ComputeSumButton')
    }

    get answer() {
        return $('~Answer')
    }

    get showAlertButton() {
        const selector = `type == 'XCUIElementTypeButton' && name CONTAINS 'show alert'`;
        return $(`-ios predicate string:${selector}`)
    }

    get alertMessage() {
        const selector = `type=='XCUIElementTypeStaticText' && name CONTAINS 'this alert is so cool.'`;
        return $(`-ios predicate string:${selector}`)
    }

    get cancelButton() {
        return $('~Cancel')
    }


    get slider() {
        const selector = `type=='XCUIElementTypeSlider' && name CONTAINS 'AppElem'`;
        return $(`-ios predicate string:${selector}`)
    }

    get disabledButton() {
        return $('~DisabledButton')
    }

    get checkCalendarButton() {
        const selector = `type=='XCUIElementTypeButton' && name CONTAINS 'Check calendar authorized'`;
        return $(`-ios predicate string:${selector}`)
    }

    get calendarMessage() {
        return $('~not authorized')
    }

    get testGestureButton() {
        const selector = `type=='XCUIElementTypeButton' && name CONTAINS 'Test Gesture'`;
        return $(`-ios predicate string:${selector}`)
    }

    countSum(integerA, integerB) {
        this.integerA.setValue(integerA);
        this.integerB.setValue(integerB);
        this.sunButton.click();
    }

    setSlider(sliderPercent) {
        this.slider.setValue(sliderPercent)
    }

    showAlert() {
        this.showAlertButton.click()
    }

    closeAlert() {
        this.cancelButton.click()
    }

    checkCalendar() {
        this.checkCalendarButton.click()
    }

    testGesture() {
        this.testGestureButton.click()
    }

}


module.exports = new HomeScreen()
