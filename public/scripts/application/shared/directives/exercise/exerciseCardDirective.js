define(['MainModule'], function(MainModule) {
    MainModule.directive('exerciseCardDirective', function() {
        return {
            restrict: 'E',
            scope: {
                'exercise': '=',
                'viewMode': '='
            },
            templateUrl: 'scripts/application/shared/directives/exercise/exerciseCardDirectiveTemplate.html'
        };
    })
})