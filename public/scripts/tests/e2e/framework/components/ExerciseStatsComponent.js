var BaseComponent = require('./BaseComponent');

function ExerciseStatsComponent(parentName) {
    this.id = `exercise-stats-directive`;

    this.exerciseNameDropdownId = "exercise-name-dropdown";
    this.setsDropdownId = "sets-dropdown";
    this.repsOrWeightsDropdownId = "reps-or-weights-dropdown";
    this.generateStatsButtonId = "button-generate-stats";

    this.exerciseNameOptionsIdPattern = "exercise-name-dropdown-{{exerciseName}}";
    this.setsOptionsIdPattern = "sets-dropdown-{{exerciseName}}";
    this.repsOrWeightsOptionsIdPattern = "reps-or-weights-dropdown-{{exerciseName}}";

    BaseComponent.call(this, this.id);
};

ExerciseStatsComponent.prototype = new BaseComponent();
ExerciseStatsComponent.prototype.constructor = ExerciseStatsComponent;

ExerciseStatsComponent.prototype.checkExerciseName = function(name) {
    return this.click(this.exerciseNameDropdownId);
}

module.exports = ExerciseStatsComponent;