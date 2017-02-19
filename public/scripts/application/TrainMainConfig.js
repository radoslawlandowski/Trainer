define(['angular', 'TrainMainModule'], function (angular, TrainMainModule) {
    TrainMainModule.config(function ($stateProvider, $urlRouterProvider) {

        var mainState = {
            name: 'main',
            url: '/main',
            template: '<h3>Hello from ui router!</h3>'
        }

        var aboutState = {
            name: 'about',
            url: '/about',
            template: '<h3>Its the UI-Router hello world app!</h3>'
        }

        $stateProvider.state(mainState);
        $stateProvider.state(aboutState);

        $urlRouterProvider.otherwise("/main")
    });
})