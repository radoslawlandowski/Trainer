define(['MainModule', 'angular'], function(MainModule, angular) {
    MainModule.directive('exercisePlanDirective', function() {
        return {
            restrict: 'E',
            scope: {
                'exercise': '=',
                'onCancel': '&'
            },
            templateUrl: 'scripts/application/shared/directives/exercise/exercisePlanDirectiveTemplate.html',
            link: function(scope) {
                scope.exercise.sets.push({});

                scope.addSet = function() {
                    scope.exercise.addSet({});
                };

                scope.remove = function(index) {
                    scope.exercise.removeSet(index);
                };
            }
        };
    })
})