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

    setCheckboxPreferenceButton() {
        this.checkboxPreferenceButton.click();
    }

    setFavoriteAnimal() {
        this.dialogBasedPreferenceButton.click()
        this.animalInput.setValue("dog")
        this.okButton.click()
    }
}

module.exports = new PreferenceScreen()
