requirejs.config({
    baseUrl: 'scripts/',
    paths: {
        /* Modules and files */
        'TrainMainModule': 'application/TrainMainModule',

        /* Libs */
        'angular': 'libs/angular.min'
    },
    shim: {
        'angular': {
            exports: 'angular'
        }
    }
});

requirejs(['TrainMainModule'], function(TrainMainModule) {
    TrainMainModule.init();
});