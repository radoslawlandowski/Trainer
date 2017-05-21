requirejs.config({
    baseUrl: 'scripts/',
    paths: {
        /* Modules and files */
        'MainModule': 'application/main/MainModule',
        'MainConfig': 'application/main/MainConfig',

        'AthleteModule': 'application/athlete/AthleteModule',
        'AthleteConfig': 'application/athlete/AthleteConfig',
        'AthleteStates': 'application/athlete/shared/AthleteStates',
        'AthleteMainController': 'application/athlete/main/AthleteMainController',
        'AthleteTrainingController': 'application/athlete/training/AthleteTrainingController',
        'AthleteDataController': 'application/athlete/data/AthleteDataController',
        'AthleteDataService': 'application/athlete/data/AthleteDataService',
        'AthleteBoardController': 'application/athlete/board/AthleteBoardController',
        'AthleteReportService': 'application/athlete/board/AthleteReportService',
        'AthleteTrainingService': 'application/athlete/training/AthleteTrainingService',
        'performTrainingDirective': 'application/athlete/board/performTrainingDirective',
        'TrainingTimer': 'application/athlete/board/TrainingTimer',
        'TrainingReporter': 'application/athlete/board/TrainingReporter',

        'AthleteStatsController': 'application/athlete/stats/AthleteStatsController',

        'sidebarDirective': 'application/shared/directives/sidebar/sidebarDirective',
        'exerciseCardDirective': 'application/shared/directives/exercise/exerciseCardDirective',
        'exercisePlanDirective': 'application/shared/directives/exercise/exercisePlanDirective',
        'trainingDirective': 'application/shared/directives/training/trainingDirective',
        'searchBarDirective': 'application/shared/directives/searchbar/searchBarDirective',

        'ExerciseFactory': 'application/shared/factories/ExerciseFactory',
        'ExerciseDataFactory': 'application/shared/factories/ExerciseDataFactory',
        'TrainingFactory': 'application/shared/factories/TrainingFactory',
        'TrainingDataFactory': 'application/shared/factories/TrainingDataFactory',

        'searchByTagFilter': 'application/shared/filters/searchByTagFilter',
        'selectByDayFilter': 'application/shared/filters/selectByDayFilter',

        'Exercises': 'application/shared/constants/Exercises',
        'Muscles': 'application/shared/constants/Muscles',
        'Days': 'application/shared/constants/Days',

        'templates-athlete': 'application/athlete/templates/templates-athlete',
        'templates-main': 'application/main/templates/templates-main',
        'templates-shared': 'application/shared/templates/templates-shared',

        /* Libs */
        'angular': 'libs/angular.min',
        'angular-ui-router': 'libs/angular-ui-router.min',
        'angular-animate': 'libs/angular-animate.min',
        'ui-bootstrap-tpls': 'libs/ui-bootstrap-tpls.min',
        'moment': 'libs/moment.min',
        'angular-moment': 'libs/angular-moment.min',
        'angular-mocks': 'libs/angular-mocks',

        /* Fakes */
        'FakeModule': 'application/fakes/FakeModule',
        'FakeAthleteTrainingService': 'application/fakes/athlete/FakeAthleteTrainingService',
    },
    shim: {
        'angular': {
            exports: 'angular'
        },
        'angular-ui-router': {
            deps: ['angular']
        },
        'angular-animate': {
            deps: ['angular']
        },
        'ui-bootstrap-tpls': {
            deps: ['angular']
        },
        'angular-mocks': {
            deps: ['angular']
        },
    }
});

requirejs(['MainModule'], function(MainModule) {
    MainModule.init('development');
});