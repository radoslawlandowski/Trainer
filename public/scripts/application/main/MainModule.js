define(['angular', 'angular-ui-router', 'AthleteModule', 'angular-material'], function(angular) {
    var m = angular.module('MainModule', ['ui.router', 'AthleteModule', 'ngMaterial']);

    m.init = function() {
        require(['MainConfig'], function() {
            angular.bootstrap(document, ['MainModule']);       
        });
    };

    return m;
})