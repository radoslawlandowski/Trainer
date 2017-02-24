define(['angular', 'angular-ui-router', 'AthleteModule', 'angular-material', 'ui-bootstrap-tpls'], function(angular) {
    var m = angular.module('MainModule', ['ui.router', 'AthleteModule', 'ngMaterial', 'ui.bootstrap']);

    m.init = function() {
        require(['MainConfig'], function() {
            angular.bootstrap(document, ['MainModule']);       
        });
    };

    return m;
})