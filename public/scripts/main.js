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
        'angular-aria': 'libs/angular-aria.min.js',
        'angular-animate': 'lib/angular-animate.min.js',
        'angular-material': 'lib/angular-material.min.js'
    },
    shim: {
        'angular': {
            exports: 'angular'
        },
        'angular-ui-router': {
            deps: ['angular']
        },
        'angular-material': {
            deps: ['angular-aria', 'angular-animate']
        }
    }
});

requirejs(['MainModule'], function(MainModule) {
    MainModule.init();
});