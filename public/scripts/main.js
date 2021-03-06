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

        'athleteChartDirective': 'application/athlete/stats/athleteChartDirective',

        'AthleteStatsController': 'application/athlete/stats/AthleteStatsController',

        'athleteStatsDirective': 'application/athlete/stats/athleteStatsDirective',
        'athleteGeneralStatsInputsDirective': 'application/athlete/stats/athleteGeneralStatsInputsDirective',
        'AthleteStatsTypes': 'application/athlete/stats/AthleteStatsTypes',

        'exerciseStatsDirective': 'application/athlete/stats/processor-directive-pairs/exerciseStatsDirective',
        'timingsStatsDirective': 'application/athlete/stats/processor-directive-pairs/timingsStatsDirective',
        'trainingStatsDirective': 'application/athlete/stats/processor-directive-pairs/trainingStatsDirective',

        'exerciseStatsProcessor': 'application/athlete/stats/processor-directive-pairs/exerciseStatsProcessor',
        'timingsStatsProcessor': 'application/athlete/stats/processor-directive-pairs/timingsStatsProcessor',
        'trainingStatsProcessor': 'application/athlete/stats/processor-directive-pairs/trainingStatsProcessor',

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
        'angular-chart': 'libs/angular-chart.min',
        'c3': 'libs/c3.min',
        'd3': 'libs/d3.min',

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
        'angular-chart': {
          deps: ['angular', 'd3', 'c3']        
        }
    }
});

requirejs(['MainModule'], function(MainModule) {
    MainModule.init('development');
});