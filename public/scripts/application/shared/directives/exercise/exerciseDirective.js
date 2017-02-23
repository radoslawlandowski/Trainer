define(['MainModule'], function(MainModule) {
    MainModule.directive('exerciseDirective', function() {
        return {
            restrict: 'E',
            scope: {
                'exercise': '=',
                'viewMode': '='
            },
            templateUrl: 'scripts/application/shared/directives/exercise/exerciseDirectiveTemplate.html',
            link: function (scope) {
                scope.onClick = function(state) {
                    $state.go(state);
                };
            }
        };
    })
})