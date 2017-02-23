define(['AthleteModule', 'AthleteTrainingController'], function (AthleteModule) {
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

        var trainingState = {
            name: 'athlete.training',
            url: '/training',
            templateUrl: base + 'training/athlete-training.html',
            controller: 'AthleteTrainingController',
            controllerAs: 'atc'
        };

        $stateProvider
            .state(boardState)
            .state(dataState)
            .state(trainingState);
    })
})