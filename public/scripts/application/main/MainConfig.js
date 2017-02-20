define(['angular', 'MainModule', 'AthleteMainController', 'AthleteStates'], function (angular, MainModule, AthleteMainController, AthleteStates) {
    MainModule.config(function ($stateProvider, $urlRouterProvider) {
        var basePath = 'scripts/application/';

        var mainState = {
            name: 'main',
            url: '/main',
            templateUrl: basePath + 'main/main/main.html'
        };

        var athleteState = {
            name: 'athlete',
            url: '/athlete',
            templateUrl: basePath + 'athlete/main/athlete-main.html',
            controller: 'AthleteMainController',
            controllerAs: 'amc',
            resolve: {
                states: (AthleteStates) => { return AthleteStates; }
            }
        };

        $stateProvider
            .state(mainState)
            .state(athleteState);

        $urlRouterProvider.otherwise("/main");
    })
})