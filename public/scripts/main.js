requirejs.config({
    baseUrl: 'scripts/',
    paths: {
        /* Modules and files */
        'TrainMainModule': 'application/TrainMainModule',
        'TrainMainConfig': 'application/TrainMainConfig',

        /* Libs */
        'angular': 'libs/angular.min',
        'angular-ui-router': 'libs/angular-ui-router.min'
    },
    shim: {
        'angular': {
            exports: 'angular'
        },
        'angular-ui-router': {
            deps: ['angular']
        }
    }
});

requirejs(['TrainMainModule'], function(TrainMainModule) {
    TrainMainModule.init();
});