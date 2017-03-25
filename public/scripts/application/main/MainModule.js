define(['angular', 'angular-ui-router', 'AthleteModule', 'ui-bootstrap-tpls', 'angular-animate'], function(angular) {
    var m = angular.module('MainModule', ['ui.router', 'AthleteModule', 'ui.bootstrap', 'ngAnimate']);

    m.init = function() {
        require(['MainConfig'], function() {
            angular.bootstrap(document, ['MainModule']);       
        });
    };

    return m;
})