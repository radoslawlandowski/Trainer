function BasePageObject(url) {    
    this.url = url;
}

BasePageObject.prototype.go = function() {
    return browser.get(this.url);
}

BasePageObject.prototype.getUrl = function() {
    return browser.getCurrentUrl();
}

module.exports = BasePageObject;