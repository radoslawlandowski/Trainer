var BaseComponent = require('./BaseComponent');

function SearchBarComponent(parentName) {
    this.id = `exercise-card`;
    this.parentId = `exercise-card-${parentName}`

    this.exerciseNameId = 'exercise-name';
    this.exerciseDescriptionId = 'exercise-description';
    this.allMusclesInvolvedCssPattern = '[id^=muscle-involved-]';

    BaseComponent.call(this, this.id, this.parentId);
};

SearchBarComponent.prototype = new BaseComponent();
SearchBarComponent.prototype.constructor = SearchBarComponent;

SearchBarComponent.prototype.getExerciseName = function() {
    return this.getById(this.exerciseNameId).getText();
};

SearchBarComponent.prototype.getExerciseDescription = function() {
    return this.getById(this.exerciseDescriptionId).getText();
};

SearchBarComponent.prototype.getMusclesInvolved = function() {
    return this.getAllByCss(this.allMusclesInvolvedCssPattern);
};

module.exports = SearchBarComponent;