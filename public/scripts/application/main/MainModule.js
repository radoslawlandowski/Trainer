define(['angular', 'angular-ui-router', 'AthleteModule', 'ui-bootstrap-tpls', 'angular-animate', 'angular-moment'], function(angular) {
    var m = angular.module('MainModule', ['ui.router', 'AthleteModule', 'ui.bootstrap', 'ngAnimate', 'angularMoment']);

    m.init = function(mode) {
        require(['MainConfig'], function() {
            if(mode == 'production') {
                angular.bootstrap(document, ['MainModule']);       
            } else if (mode == 'development') {
                require(['FakeModule'], function() {
                    angular.bootstrap(document, ['FakeModule']);       
                })
            } else {
                console.error('Incorrect application mode chosen!')
            }
        });
    };

    return m;
})