var BaseComponent = require('./BaseComponent');
var ExerciseCardComponent = require('./ExerciseCardComponent');
var ExercisePlanComponent = require('./ExercisePlanComponent');

function TrainingDirectiveComponent(parentId) {
    this.id = 'training';
    this.trainingTitleId = 'training-title';
    this.editButtonId = 'edit-button';

    this.exerciseCardIdPattern = 'exercise-card-{{exercise.name}}';
    this.exercisePlanIdPattern = 'exercise-plan-{{exercise.name}}';

    this.addExerciseButtonIdPattern = 'add-exercise-button-{{exercise.name}}';
    this.removeExerciseButtonIdPattern = 'remove-exercise-button-{{exercise.name}}';

    this.allExerciseCardsCssPattern = '[id^=exercise-card-]';
    this.allExercisePlansCssPattern = '[id^=exercise-plan-]';

    BaseComponent.call(this, this.id, parentId);
}

TrainingDirectiveComponent.prototype = new BaseComponent();
TrainingDirectiveComponent.prototype.constructor = TrainingDirectiveComponent;

TrainingDirectiveComponent.prototype.clickAddExerciseButton = function (name) {
    this.findAndClick(this.addExerciseButtonIdPattern, '{{exercise.name}}', name);
}

TrainingDirectiveComponent.prototype.clickRemoveExerciseButton = function (name) {
    this.findAndClick(this.removeExerciseButtonIdPattern, '{{exercise.name}}', name);
}

TrainingDirectiveComponent.prototype.getAllExercisePlans = function () {
    return this.getAllByCss(this.allExercisePlansCssPattern);
}

TrainingDirectiveComponent.prototype.getExerciseCard = function (name) {
    return new ExerciseCardComponent(name);
}

TrainingDirectiveComponent.prototype.getExercisePlan = function (name) {
    return new ExercisePlanComponent(name);
}

module.exports = TrainingDirectiveComponent;
