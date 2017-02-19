define(['MainModule'], function (MainModule) {
    MainModule.directive('sidebarDirective', function ($state) {
        return {
            restrict: 'E',
            scope: {
                'states': '='
            },
            templateUrl: 'scripts/application/shared/directives/sidebar/sidebarDirectiveTemplate.html',
            link: function (scope) {
                scope.onClick = function(state) {
                    $state.go(state);
                };
            }
        };
    })
})