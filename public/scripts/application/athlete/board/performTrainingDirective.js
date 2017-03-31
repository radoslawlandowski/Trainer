define(['AthleteModule'], function (AthleteModule) {
    AthleteModule.directive('performTrainingDirective', function () {
        return {
            restrict: 'E',
            scope: {
                'training': '='
            },
            templateUrl: 'scripts/application/athlete/board/performTrainingDirectiveTemplate.html',
            link: function (scope) {
                scope.exerciseIndex = 0;
                scope.currentExercise = scope.training.exercises[scope.exerciseIndex];

                scope.previous = function () {
                    if (scope.exerciseIndex === 0) {
                        return;
                    } else {
                        scope.exerciseIndex -= 1;
                        scope.currentExercise = scope.training.exercises[scope.exerciseIndex];
                    }
                }

                scope.next = function () {
                    if (scope.exerciseIndex === scope.training.exercises.length - 1) {
                        return;
                    } else {
                        scope.exerciseIndex += 1;
                        scope.currentExercise = scope.training.exercises[scope.exerciseIndex];
                    }
                }

                scope.finalizeTraining = function () {

                }

                scope.cancelTraining = function () {
                    
                }
            }
        };
    })
})