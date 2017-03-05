define(['angular', 'templates-athlete'], function(angular) {
    var m = angular.module('AthleteModule', ['ui.router', 'templates-athlete']);
    
    require(['AthleteConfig'], function() {});

    return m;
})