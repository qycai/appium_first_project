class PreferenceScreen {
    get checkboxPreferenceButton() {
        const selector = 'new UiSelector().text("Checkbox preference").className("android.widget.TextView")'
        return $(`android=${selector}`)
    }

    get dialogBasedPreferenceButton() {
        const selector = 'new UiSelector().text("Edit text preference").className("android.widget.TextView")'
        return $(`android=${selector}`)
    }

    get animalInput() {
        const selector = 'new UiSelector().resourceId("android:id/edit").className("android.widget.EditText")'
        return $(`android=${selector}`)
    }

    get okButton() {
        const selector = 'new UiSelector().text("OK").className("android.widget.Button")'
        return $(`android=${selector}`)
    }

    get listPreferenceButton() {
        const selector = 'new UiSelector().text("List preference").className("android.widget.TextView")'
        return $(`android=${selector}`)
    }

    get cancelButton() {
        const selector = 'new UiSelector().text("CANCEL").className("android.widget.Button")'
        return $(`android=${selector}`)
    }

    get screenPreferenceButton() {
        const selector = 'new UiSelector().text("Screen preference").className("android.widget.TextView")'
        return $(`android=${selector}`)
    }

    get checkbox() {
        const selector = 'new UiSelector().className("android.widget.CheckBox")'
        return $(`android=${selector}`)
    }

    get intentPreference() {
        const selector = 'new UiSelector().text("Launches an Activity from an Intent").className("android.widget.TextView")'
        return $(`android=${selector}`)
    }

    get justOnceButton() {
        const selector = 'new UiSelector().text("JUST ONCE").className("android.widget.Button")'
        return $(`android=${selector}`)
    }

    setCheckboxPreferenceButton() {
        this.checkboxPreferenceButton.click();
    }

    setFavoriteAnimal() {
        this.dialogBasedPreferenceButton.click()
        this.animalInput.setValue("dog")
        this.okButton.click()
    }

    chooseOptionsByText(optionText) {
        this.listPreferenceButton.click();
        const selector = 'new UiSelector().text("' + optionText + '").className("android.widget.CheckedTextView")'
        $(`android=${selector}`).click()
    }

    setScreenPreference() {
        this.screenPreferenceButton.click()
        this.checkbox.click()
        driver.pressKeyCode(4)
    }

    setIntentPreference() {
        this.intentPreference.click()
        driver.pressKeyCode(4)
    }
}

module.exports = new PreferenceScreen()
