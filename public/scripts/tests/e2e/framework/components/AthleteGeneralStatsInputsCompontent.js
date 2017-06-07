var BaseComponent = require('./BaseComponent');

function AthleteGeneralStatsInputsCompontent(parentName) {
    this.id = `general-stats-inputs-container`;

    this.panelHeadingTextId = "panel-heading-text";
    this.trainingTitleInputId = "training-title";
    this.dateFromInputId = "date-from";
    this.dateToInputId = "date-to";

    this.statsButtonsIdPattern = "button-{{value.name}}"

    BaseComponent.call(this, this.id);
};

AthleteGeneralStatsInputsCompontent.prototype = new BaseComponent();
AthleteGeneralStatsInputsCompontent.prototype.constructor = AthleteGeneralStatsInputsCompontent;

AthleteGeneralStatsInputsCompontent.prototype.getPanelHeading = function() {
    return this.getById(this.panelHeadingTextId);
}

AthleteGeneralStatsInputsCompontent.prototype.getTrainingTitleInputText = function() {
    return this.getInputText(this.trainingTitleInputId).then(function(inputText) {
        return inputText;
    })
}

AthleteGeneralStatsInputsCompontent.prototype.getDateFromInput = function() {
    return this.getById(this.dateFromInputId);
}

AthleteGeneralStatsInputsCompontent.prototype.getDateToInput = function() {
    return this.getById(this.dateToInputId);
}

AthleteGeneralStatsInputsCompontent.prototype.clickStatsButton = function(statsName) {
    return this.findAndClick(this.statsButtonsIdPattern, "{{value.name}}", statsName);
}

AthleteGeneralStatsInputsCompontent.prototype.fillTrainingTitle = function(text) {
    return this.clearAndFillInput(this.trainingTitleInputId, text);
}

module.exports = AthleteGeneralStatsInputsCompontent;