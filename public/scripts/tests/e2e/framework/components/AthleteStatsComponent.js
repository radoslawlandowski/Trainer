var BaseComponent = require('./BaseComponent');
var AthleteGeneralStatsInputsCompontent = require('./AthleteGeneralStatsInputsCompontent');
var ExerciseStatsComponent = require('./ExerciseStatsComponent'); 
var TrainingStatsComponent = require('./TrainingStatsComponent');

function AthleteStatsComponent(parentName) {
    this.id = `athlete-stats-directive`;

    this.athleteGeneralStatsInputsCompontent = new AthleteGeneralStatsInputsCompontent();
    this.exerciseStatsComponent = new ExerciseStatsComponent();
    this.timingsStatsComponent;
    this.trainingStatsComponent = new TrainingStatsComponent();
    this.athleteChartComponent;

    this.switcherSelector = "[ng-switch-when]";

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

AthleteStatsComponent.prototype.getChosenComponentHeading = function() {
    return this.getByCss(this.switcherSelector).element(by.css(".panel-heading")).getText();
}

module.exports = AthleteStatsComponent;