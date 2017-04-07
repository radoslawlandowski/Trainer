define(['angular', 'angular-ui-router', 'AthleteModule', 'ui-bootstrap-tpls', 'angular-animate', 'angular-moment'], function(angular) {
    var m = angular.module('MainModule', ['ui.router', 'AthleteModule', 'ui.bootstrap', 'ngAnimate', 'angularMoment']);

    m.init = function() {
        require(['MainConfig', 'FakeModule'], function() {
            angular.bootstrap(document, ['MainModule']);       
        });
    };

    return m;
})