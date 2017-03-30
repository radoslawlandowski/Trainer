define(['AthleteModule', 'AthleteTrainingController', 'AthleteDataController', 'AthleteBoardController'], function (AthleteModule) {
    AthleteModule.config(function ($stateProvider) {
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

        $stateProvider
            .state(boardState)
            .state(dataState)
            .state(trainingState);
    })
})