define(['AthleteModule', 'AthleteStates'], function (AthleteModule, AthleteStates) {
    AthleteModule.config(function ($stateProvider, AthleteStates) {
        var basePath = 'scripts/application/athlete/';

        var boardState = {
            name: AthleteStates.BOARD.state,
            url: AthleteStates.BOARD.path,
            templateUrl: basePath + 'board/athlete-board.html'
        };

        var dataState = {
            name: AthleteStates.DATA.state,
            url: AthleteStates.DATA.path,
            templateUrl: basePath + 'data/athlete-data.html'
        };

        $stateProvider.state(boardState);
        $stateProvider.state(dataState);
    });
})