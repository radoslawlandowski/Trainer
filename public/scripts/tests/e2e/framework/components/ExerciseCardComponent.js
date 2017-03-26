var BaseComponent = require('./BaseComponent');

function ExerciseCardComponent(parentName) {
    this.id = `exercise-card`;
    this.parentId = `exercise-card-${parentName}`

    this.exerciseNameId = 'exercise-name';
    this.exerciseDescriptionId = 'exercise-description';
    this.allMusclesInvolvedCssPattern = '[id^=muscle-involved-]';

    BaseComponent.call(this, this.id, this.parentId);
};

ExerciseCardComponent.prototype = new BaseComponent();
ExerciseCardComponent.prototype.constructor = ExerciseCardComponent;

ExerciseCardComponent.prototype.getExerciseName = function() {
    return this.getById(this.exerciseNameId).getText();
};

ExerciseCardComponent.prototype.getExerciseDescription = function() {
    return this.getById(this.exerciseDescriptionId).getText();
};

ExerciseCardComponent.prototype.getMusclesInvolved = function() {
    return this.getAllByCss(this.allMusclesInvolvedCssPattern);
};

module.exports = ExerciseCardComponent;