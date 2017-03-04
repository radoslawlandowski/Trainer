define(['MainModule', 'angular'], function(MainModule, angular) {
    MainModule.directive('exercisePlanDirective', function() {
        return {
            restrict: 'E',
            scope: {
                'exercise': '='
            },
            templateUrl: 'scripts/application/shared/directives/exercise/exercisePlanDirectiveTemplate.html',
            link: function(scope, element, attrs) {
                if(scope.exercise.sets.length === 0) {
                    scope.exercise.sets.push({});
                }

                scope.addSet = function() {
                    scope.exercise.addSet({});
                }

                scope.removeSet = function(index) {
                    scope.exercise.removeSet(index);
                }
            }
        };
    })
})