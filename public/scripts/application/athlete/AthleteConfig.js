define(['AthleteModule', 'AthleteStates'], function (AthleteModule, AthleteStates) {
    AthleteModule.config(function ($stateProvider, $urlRouterProvider, AthleteStates) {
        var basePath = 'scripts/application/athlete/';

        var athleteBoardState = {
            name: AthleteStates.BOARD.state,
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