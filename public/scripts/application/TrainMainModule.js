define(['angular', 'angular-ui-router'], function(angular) {
    var m = angular.module('TrainMainModule', ['ui.router']);

    m.init = function() {
        require(['TrainMainConfig'], function() {
            angular.bootstrap(document, ['TrainMainModule']);       
        });
    };

    return m;
})