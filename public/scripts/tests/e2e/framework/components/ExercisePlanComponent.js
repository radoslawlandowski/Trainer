var BaseComponent = require('./BaseComponent');

function ExercisePlanComponent(name) {
    this.id = `exercise-plan-${name}`;

    this.addSetButtonIdPattern = 'add-set-button-{{$index}}';
    this.removeSetButtonIdPattern = 'remove-set-button-{{$index}}';
    this.repsInputIdPattern = 'reps-input-{{$index}}';
    this.weightInputIdPattern = 'weight-input-{{$index}}';
    this.setsIdPattern = 'set-{{$index}}';
    this.allSetsCssPattern = '[id^=set-]';

    this.exerciseNameId = 'exercise-name';

    BaseComponent.call(this, this.id);
};

ExercisePlanComponent.prototype = new BaseComponent();
ExercisePlanComponent.prototype.constructor = ExercisePlanComponent;

ExercisePlanComponent.prototype.getExerciseName = function() {
    return this.getById(this.exerciseNameId).getText();
};

ExercisePlanComponent.prototype.clickAddSetButton = function(setNumber) {
    return this.findAndClick(this.addSetButtonIdPattern, '{{$index}}', setNumber);
};

ExercisePlanComponent.prototype.clickRemoveSetButton = function(setNumber) {
    return this.findAndClick(this.removeSetButtonIdPattern, '{{$index}}', setNumber);
};

ExercisePlanComponent.prototype.getAllSets = function() {
    return this.getAllByCss(this.allSetsCssPattern);
};

ExercisePlanComponent.prototype.fillRepsInput = function(index, text) {
    var repsInputId = this.repsInputIdPattern.replace('{{$index}}', index);

    return this.fillInput(repsInputId, text);
};

ExercisePlanComponent.prototype.fillWeightInput = function(index, text) {
    var weightInputId = this.weightInputIdPattern.replace('{{$index}}', index);

    return this.fillInput(weightInputId, text);
};

module.exports = ExercisePlanComponent;