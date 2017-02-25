define(['angular', 'angular-ui-router', 'AthleteModule', 'ui-bootstrap-tpls'], function(angular) {
    var m = angular.module('MainModule', ['ui.router', 'AthleteModule', 'ui.bootstrap']);

    m.init = function() {
        require(['MainConfig'], function() {
            angular.bootstrap(document, ['MainModule']);       
        });
    };

    return m;
})