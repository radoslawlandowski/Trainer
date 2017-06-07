function BaseComponent(id, parentId) {
    if (arguments.length == 0) return;

    this.id = id;
    
    if(parentId !== null && parentId !== undefined && parentId !== '') {
        this.element = element(by.id(parentId)).element(by.id(id));
    } else {
        this.element = element(by.id(id));
    }
}

BaseComponent.prototype.getById = function(id) {
    return this.element.element(by.id(id));
};

BaseComponent.prototype.getAllByCss = function(css) {
    return this.element.all(by.css(css));
};

BaseComponent.prototype.getByCss = function(css) {
    return this.element.element(by.css(css));
}

BaseComponent.prototype.getInputText = function (id) {
    return this.element.element(by.id(id)).getAttribute("value").then(function(value) {
      return value;
    });
};

BaseComponent.prototype.fillInput = function(id, text) {
    return this.element.element(by.id(id)).sendKeys(text);
};

BaseComponent.prototype.clearAndFillInput = function(id, text) {
    return this.element.element(by.id(id)).clear().sendKeys(text);
};

BaseComponent.prototype.clickMyself = function () {
    this.element.click();
};

BaseComponent.prototype.click = function (id) {
    this.element.element(by.id(id)).click();
};

BaseComponent.prototype.findAndClick = function(idPattern, placeholder, name) {
    var buttonId = idPattern.replace(placeholder, name);

    this.getById(buttonId).click();
};

BaseComponent.prototype.amIDisplayed = function () {
    return this.element.isDisplayed();
};

module.exports = BaseComponent;