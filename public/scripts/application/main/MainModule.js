define(['angular', 'angular-ui-router', 'AthleteModule'], function(angular) {
    var m = angular.module('MainModule', ['ui.router', 'AthleteModule']);

    m.init = function() {
        require(['MainConfig'], function() {
            angular.bootstrap(document, ['MainModule']);       
        });
    };

    return m;
})