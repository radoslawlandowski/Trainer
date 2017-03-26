var BasePageObject = require('./BasePageObject');

function MainPageObject() {
    this.url = 'http://localhost:3000/#!/main';

    BasePageObject.call(this, this.url);

    this.athleteStateSrefId = 'athlete-sref';
}

MainPageObject.prototype = new BasePageObject();

MainPageObject.prototype.clickAthleteSref = function() {
    element(by.id(this.athleteStateSrefId)).click();
}

module.exports = MainPageObject;