var MainPageObject = require('../../framework/page_objects/MainPageObject');

beforeAll(function () {
    browser.driver.manage().window().maximize();
})

describe('Main tests', function () {

    var mainPage;

    beforeEach(function () {
        mainPage = new MainPageObject();
        mainPage.go();
    });

    it('static data should be correct', function () {
        expect(mainPage.getUrl()).toEqual('http://localhost:3000/#!/main');
        expect(browser.getTitle()).toEqual('Trainer!');
    });

    it('athlete sref should work properly', function () {
        mainPage.clickAthleteSref();
        expect(mainPage.getUrl()).toEqual('http://localhost:3000/#!/athlete');
    });
    
});








