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

        'sidebarDirective': 'application/shared/directives/sidebar/sidebarDirective',
        'exerciseCardDirective': 'application/shared/directives/exercise/exerciseCardDirective',
        'exercisePlanDirective': 'application/shared/directives/exercise/exercisePlanDirective',
        
        'Exercises': 'application/shared/constants/Exercises',
        'Muscles': 'application/shared/constants/Muscles',

        /* Libs */
        'angular': 'libs/angular.min',
        'angular-ui-router': 'libs/angular-ui-router.min',
        'angular-aria': 'libs/angular-aria.min',
        'angular-animate': 'libs/angular-animate.min',
        'angular-material': 'libs/angular-material.min'
    },
    shim: {
        'angular': {
            exports: 'angular'
        },
        'angular-ui-router': {
            deps: ['angular']
        },
        'angular-material': {
            deps: ['angular', 'angular-aria', 'angular-animate']
        },
        'angular-aria': {
            deps: ['angular']
        },
        'angular-animate': {
            deps: ['angular']
        }
    }
});

requirejs(['MainModule'], function(MainModule) {
    MainModule.init();
});