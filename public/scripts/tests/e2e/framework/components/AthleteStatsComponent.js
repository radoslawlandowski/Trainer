var BaseComponent = require('./BaseComponent');
var AthleteGeneralStatsInputsCompontent = require('./AthleteGeneralStatsInputsCompontent');

function AthleteStatsComponent(parentName) {
    this.id = `athlete-stats-directive`;

    this.athleteGeneralStatsInputsCompontent = new AthleteGeneralStatsInputsCompontent();
    this.exerciseStatsComponent;
    this.timingsStatsComponent;
    this.trainingStatsComponent;
    this.athleteChartComponent;

    BaseComponent.call(this, this.id);
};

AthleteStatsComponent.prototype = new BaseComponent();
AthleteStatsComponent.prototype.constructor = AthleteStatsComponent;

module.exports = AthleteStatsComponent;