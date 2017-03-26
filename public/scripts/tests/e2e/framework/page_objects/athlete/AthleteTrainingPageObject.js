var BasePageObject = require('../BasePageObject');
var SidebarComponent = require('../../components/SidebarComponent');
var TrainingDirectiveComponent = require('../../components/TrainingDirectiveComponent');

function AthleteTrainingPageObject() {
    this.url = 'http://localhost:3000/#!/athlete/training';

    BasePageObject.call(this, this.url);

    this.newTrainingButtonId = 'new-training-button';
    this.saveTrainingButtonId = 'save-training-button';
    this.discardTrainingButtonId = 'discard-training-button';

    this.noTrainingsTextId = 'no-trainings-text';
    this.trainingsIdPattern = 'saved-trainings-{{$index}}';
    this.allTrainingsCssPattern = '[id^=saved-trainings-]';

    this.NewTrainingComponent = new TrainingDirectiveComponent()
}

AthleteTrainingPageObject.prototype = new BasePageObject();

AthleteTrainingPageObject.prototype.clickNewTrainingButton = function() {
    element(by.id(this.newTrainingButtonId)).click();
}

AthleteTrainingPageObject.prototype.clickSaveTrainingButton = function() {
    element(by.id(this.saveTrainingButtonId)).click();
}

AthleteTrainingPageObject.prototype.clickDiscardTrainingButton = function() {
    element(by.id(this.discardTrainingButtonId)).click();
}

AthleteTrainingPageObject.prototype.getNoTrainingText = function() {
    return element(by.id(this.noTrainingsTextId));
}

AthleteTrainingPageObject.prototype.getTrainings = function() {
    return element.all(by.css(this.allTrainingsCssPattern));
}


module.exports = AthleteTrainingPageObject;