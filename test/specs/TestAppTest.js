const homePage = require('../screeenobjects/home.page')

describe('test TestApp', () => {
    it('should get correct answer from count sum function', function () {
        homePage.countSum(1, 2)
        expect(homePage.answer).toHaveText("3")
    });
})
