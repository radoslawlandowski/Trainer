define(['MainModule', 'angular'], function(MainModule, angular) {
    MainModule.directive('exercisePlanDirective', function($filter) {
        return {
            restrict: 'E',
            scope: {
                'exerciseName': '=',
                'onCancel': '&'
            },
            templateUrl: 'scripts/application/shared/directives/exercise/exercisePlanDirectiveTemplate.html',
            link: function(scope) {
                scope.exercise = {
                    name: scope.exerciseName,
                    sets: []
                }

                scope.exercise.sets.push({})

                scope.addSet = function() {
                    scope.exercise.sets.push({});
                }

                scope.remove = function(index) {
                    scope.exercise.sets.splice(index, 1); 
                }
            }
        };
    })
})