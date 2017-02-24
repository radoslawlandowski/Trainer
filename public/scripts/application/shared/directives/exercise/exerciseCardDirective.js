define(['MainModule'], function(MainModule) {
    MainModule.directive('exerciseCardDirective', function() {
        return {
            restrict: 'E',
            scope: {
                'exercise': '='
            },
            templateUrl: 'scripts/application/shared/directives/exercise/exerciseCardDirectiveTemplate.html'
        };
    })
})