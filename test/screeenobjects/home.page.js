class HomePage {
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

    countSum(integerA, integerB) {
        this.integerA.setValue(integerA);
        this.integerB.setValue(integerB);
        this.sunButton.click();
    }
}


module.exports = new HomePage()
