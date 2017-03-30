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

        'sidebarDirective': 'application/shared/directives/sidebar/sidebarDirective',
        'exerciseCardDirective': 'application/shared/directives/exercise/exerciseCardDirective',
        'exercisePlanDirective': 'application/shared/directives/exercise/exercisePlanDirective',
        'trainingDirective': 'application/shared/directives/training/trainingDirective',
        'searchBarDirective': 'application/shared/directives/searchbar/searchBarDirective',

        'ExerciseFactory': 'application/shared/factories/ExerciseFactory',
        'TrainingFactory': 'application/shared/factories/TrainingFactory',

        'searchByTagFilter': 'application/shared/filters/searchByTagFilter',
     
        'Exercises': 'application/shared/constants/Exercises',
        'Muscles': 'application/shared/constants/Muscles',

        'templates-athlete': 'application/athlete/templates/templates-athlete',
        'templates-main': 'application/main/templates/templates-main',
        'templates-shared': 'application/shared/templates/templates-shared',

        /* Libs */
        'angular': 'libs/angular.min',
        'angular-ui-router': 'libs/angular-ui-router.min',
        'angular-animate': 'libs/angular-animate.min',
        'ui-bootstrap-tpls': 'libs/ui-bootstrap-tpls.min'
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
        }
    }
});

requirejs(['MainModule'], function(MainModule) {
    MainModule.init();
});