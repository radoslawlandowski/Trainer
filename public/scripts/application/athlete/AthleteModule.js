define(['angular'], function(angular) {
    var m = angular.module('AthleteModule', ['ui.router']);
    
    require(['AthleteConfig'], function() {});

    return m;
})