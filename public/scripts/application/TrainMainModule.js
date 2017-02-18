define(['angular'], function(angular) {
    var m = angular.module('TrainMainModule', []);

    m.init = function() {
        angular.bootstrap(document, ['TrainMainModule']);
    };

    return m;
})