exports.config = {
    framework: 'jasmine2',    
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./**/*-spec.js'],
    onPrepare: function() {
    var jasmineReporters = require('jasmine-reporters');
    jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
        consolidateAll: true,
        savePath: 'testresults',
        filePrefix: 'xmloutput'
    }));
}
};