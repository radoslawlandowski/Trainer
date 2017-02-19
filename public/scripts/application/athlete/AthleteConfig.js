define(['AthleteModule'], function (AthleteModule) {
    AthleteModule.config(function ($stateProvider, $urlRouterProvider) {
        var basePath = 'scripts/application/athlete/';

        var athleteBoardState = {
            name: 'athlete.board',
            url: '/board',
            templateUrl: basePath + 'board/athlete-board.html'
        };

        var athleteDataState = {
            name: 'athlete.data',
            url: '/data',
            templateUrl: basePath + 'data/athlete-data.html'
        };

        $stateProvider.state(athleteBoardState);
        $stateProvider.state(athleteDataState);
    });
})