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

BaseComponent.prototype.getInputText = function (element) {
    return this.element.getAttribute("value").then(function(value) {
      return value;
    });
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

module.exports = BaseComponent;