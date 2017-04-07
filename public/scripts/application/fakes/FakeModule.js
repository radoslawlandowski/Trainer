define(['angular', 'angular-mocks', 'MainModule'], function(angular) {
    var m = angular.module('FakeModule', ['MainModule', 'ngMockE2E']);

    require(['FakeAthleteTrainingService'], function() {});

    return m;
})