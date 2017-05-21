define(['AthleteModule', 'AthleteTrainingController', 'AthleteDataController', 'AthleteBoardController', 'AthleteStatsController'], function (AthleteModule) {
    AthleteModule.config(function ($stateProvider, $qProvider) {
        var base = 'scripts/application/athlete/';

        var boardState = {
            name: 'athlete.board',
            url: '/board',
            templateUrl: base + 'board/athlete-board.html',
            controller: 'AthleteBoardController',
            controllerAs: 'abc'
        };

        var dataState = {
            name: 'athlete.data',
            url: '/data',
            templateUrl: base + 'data/athlete-data.html',
            controller: 'AthleteDataController',
            controllerAs: 'adc'
        };

        var trainingState = {
            name: 'athlete.training',
            url: '/training',
            templateUrl: base + 'training/athlete-training.html',
            controller: 'AthleteTrainingController',
            controllerAs: 'atc'
        };

        var statsState = {
            name: 'athlete.stats',
            url: '/stats',
            templateUrl: base + 'stats/athlete-stats.html',
            controller: 'AthleteStatsController',
            controllerAs: 'asc'
        };

        $stateProvider
            .state(boardState)
            .state(dataState)
            .state(trainingState)
            .state(statsState);

        $qProvider.errorOnUnhandledRejections(false);
    })
})