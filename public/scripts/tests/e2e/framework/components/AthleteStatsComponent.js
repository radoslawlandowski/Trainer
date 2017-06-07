var BaseComponent = require('./BaseComponent');
var AthleteGeneralStatsInputsCompontent = require('./AthleteGeneralStatsInputsCompontent');
var ExerciseStatsComponent = require('./ExerciseStatsComponent');

function AthleteStatsComponent(parentName) {
    this.id = `athlete-stats-directive`;

    this.athleteGeneralStatsInputsCompontent = new AthleteGeneralStatsInputsCompontent();
    this.exerciseStatsComponent = new ExerciseStatsComponent();
    this.timingsStatsComponent;
    this.trainingStatsComponent;
    this.athleteChartComponent;

    this.components = {
        "GeneralInputs": this.athleteGeneralStatsInputsCompontent,
        "Exercise": this.exerciseStatsComponent,
        "Timings": this.timingsStatsComponent,
        "Training": this.trainingStatsComponent,
        "Chart": this.athleteChartComponent
    };

    BaseComponent.call(this, this.id);
};

AthleteStatsComponent.prototype = new BaseComponent();
AthleteStatsComponent.prototype.constructor = AthleteStatsComponent;

AthleteStatsComponent.prototype.isComponentDisplayed = function(name) {
    return this.components[name].amIDisplayed()
}

module.exports = AthleteStatsComponent;