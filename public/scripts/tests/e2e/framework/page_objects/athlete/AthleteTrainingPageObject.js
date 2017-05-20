var BasePageObject = require('../BasePageObject');
var SidebarComponent = require('../../components/SidebarComponent');
var TrainingDirectiveComponent = require('../../components/TrainingDirectiveComponent');

function AthleteTrainingPageObject() {
    this.url = 'http://localhost:3000/#!/athlete/training';

    BasePageObject.call(this, this.url);

    this.newTrainingButtonId = 'new-training-button';
    this.discardTrainingButtonId = 'discard-training-button';

    this.noTrainingsTextId = 'no-trainings-text';
    this.trainingsIdPattern = 'saved-trainings-{{$index}}';
    this.allTrainingsCssPattern = '[id^=saved-trainings-]';

    this.NewTrainingComponent = new TrainingDirectiveComponent("new-training")
}

AthleteTrainingPageObject.prototype = new BasePageObject();

AthleteTrainingPageObject.prototype.clickNewTrainingButton = function() {
    element(by.id(this.newTrainingButtonId)).click();
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

AthleteTrainingPageObject.prototype.getTraining = function(index) {
    var elementId = this.trainingsIdPattern.replace('{{$index}}', index);

    return element(by.id(elementId)).isPresent().then(function(isPresent) {
        if(isPresent === false) {
            throw `The Training if id \'${elementId}\' is not present`
        } else {
            return new TrainingDirectiveComponent(elementId);
        }
    });
}

AthleteTrainingPageObject.prototype.getTrainingByName = function(name) {
    var elementId = this.trainingsIdPattern.replace('{{$index}}', index);

    return element(by.id(elementId));
}


module.exports = AthleteTrainingPageObject;