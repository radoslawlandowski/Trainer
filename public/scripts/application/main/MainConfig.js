define(['angular', 'MainModule'], function (angular, MainModule) {
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
            templateUrl: basePath + 'athlete/main/athlete-main.html'
        };

        $stateProvider.state(mainState);
        $stateProvider.state(athleteState);

        $urlRouterProvider.otherwise("/main")
    });
})