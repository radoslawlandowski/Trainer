define(['AthleteModule'], function (AthleteModule) {
    AthleteModule.config(function ($stateProvider) {
        var base = 'scripts/application/athlete/';

        var boardState = {
            name: 'athlete.board',
            url: '/board',
            templateUrl: base + 'board/athlete-board.html'
        };

        var dataState = {
            name: 'athlete.data',
            url: '/data',
            templateUrl: base + 'data/athlete-data.html'
        };

        $stateProvider
            .state(boardState)
            .state(dataState);
    })
})