var BaseComponent = require('./BaseComponent');

function ExerciseCardComponent(name) {
    this.id = `exercise-card-${name}`;

    this.musclesInvolvedIdPattern = 'muscle-involved-{{muscle}}';
    this.exerciseNameId = 'exercise-name';
    this.exerciseDescriptionId = 'exercise-description';

    BaseComponent.call(this, this.id);
};

ExerciseCardComponent.prototype = new BaseComponent();
ExerciseCardComponent.prototype.constructor = ExerciseCardComponent;

ExerciseCardComponent.prototype.getExerciseName = function() {
    return this.getById(this.exerciseNameId).getText();
};

ExerciseCardComponent.prototype.getExerciseDescription = function() {
    return this.getById(this.exerciseDescriptionId).getText();
};

module.exports = ExerciseCardComponent;