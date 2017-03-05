define(['angular', 'angular-ui-router', 'AthleteModule', 'ui-bootstrap-tpls', 'angular-animate', 'templates-main', 'templates-shared'], function(angular) {
    var m = angular.module('MainModule', ['ui.router', 'AthleteModule', 'ui.bootstrap', 'ngAnimate', 'templates-main', 'templates-shared']);

    m.init = function() {
        require(['MainConfig'], function() {
            angular.bootstrap(document, ['MainModule']);       
        });
    };

    return m;
})