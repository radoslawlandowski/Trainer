requirejs.config({
    baseUrl: 'scripts/',
    paths: {
        /* Modules and files */
        'MainModule': 'application/main/MainModule',
        'MainConfig': 'application/main/MainConfig',
        'AthleteModule': 'application/athlete/AthleteModule',
        'AthleteConfig': 'application/athlete/AthleteConfig',

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
        }
    }
});

requirejs(['MainModule'], function(MainModule) {
    MainModule.init();
});