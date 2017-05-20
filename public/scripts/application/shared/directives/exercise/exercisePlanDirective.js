define(['MainModule', 'angular', 'ExerciseFactory'], function(MainModule, angular) {
    MainModule.directive('exercisePlanDirective', function(ExerciseFactory) {
        return {
            restrict: 'E',
            scope: {
                'exercise': '=',
                'readonly': '='
            },
            templateUrl: 'scripts/application/shared/directives/exercise/exercisePlanDirectiveTemplate.html',
            link: function(scope, element, attrs) {
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