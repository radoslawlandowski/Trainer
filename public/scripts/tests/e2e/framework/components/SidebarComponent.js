var BaseComponent = require('./BaseComponent');

function SidebarComponent() {
    this.sidebarId = 'sidebar-buttons';
    this.buttonIdPattern = 'button-{{value.displayedName}}';

    BaseComponent.call(this, this.sidebarId);
};

SidebarComponent.prototype = new BaseComponent();
SidebarComponent.prototype.constructor = SidebarComponent;

SidebarComponent.prototype.clickButton = function(name) {
    var buttonId = this.buttonIdPattern.replace('{{value.displayedName}}', name);

    this.getById(buttonId).click();
};

module.exports = SidebarComponent;