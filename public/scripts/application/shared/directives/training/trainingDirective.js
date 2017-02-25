define(['MainModule'], function (MainModule) {
    MainModule.directive('trainingDirective', function ($state) {
        return {
            restrict: 'E',
            scope: {
                'states': '='
            },
            templateUrl: 'scripts/application/shared/directives/training/trainingDirectiveTemplate.html',
            link: function (scope) {
                scope.onClick = function(state) {
                    $state.go(state);
                };
            }
        };
    });
});