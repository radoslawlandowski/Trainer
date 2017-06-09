var BaseComponent = require('./BaseComponent');

function TrainingStatsComponent(parentName) {
    this.id = `training-stats-directive`;

    this.tonnageDropdownId = "tonnage-dropdown";

    this.tonnageOptionsIdPattern = "tonnage-dropdown-{{tonnage}}";

    BaseComponent.call(this, this.id);
};

TrainingStatsComponent.prototype = new BaseComponent();
TrainingStatsComponent.prototype.constructor = TrainingStatsComponent;

TrainingStatsComponent.prototype.getPanelHeading = function() {
    return this.getByCss(".panel-heading").getText();
}

module.exports = TrainingStatsComponent;