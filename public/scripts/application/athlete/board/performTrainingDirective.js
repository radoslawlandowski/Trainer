define(['AthleteModule', 'TrainingTimer'], function (AthleteModule) {
    AthleteModule.directive('performTrainingDirective', function (TrainingTimer) {
        return {
            restrict: 'E',
            scope: {
                'training': '=',
                'finish': '&'
            },
            templateUrl: 'scripts/application/athlete/board/performTrainingDirectiveTemplate.html',
            compile: function (tElem, tAttrs) {
                return {
                    pre: function (scope, iElem, iAttrs) {
                        scope.exerciseIndex = 0;
                        scope.currentExercise = scope.training.getExercises()[scope.exerciseIndex];
                        scope.timer = TrainingTimer.create(scope.training);
                        scope.timer.initialize();

                        scope.$watch('exerciseIndex', function (currentIndex, previousIndex) {
                            if (currentIndex !== previousIndex) { // prevent incorrect timer start at directive creation
                                scope.timer.stop(previousIndex);
                            }
                            scope.timer.start(currentIndex);
                        });

                        scope.previous = function () {
                            scope.exerciseIndex -= 1;
                            scope.currentExercise = scope.training.getExercises()[scope.exerciseIndex];
                        }

                        scope.next = function () {
                            scope.exerciseIndex += 1;
                            scope.currentExercise = scope.training.getExercises()[scope.exerciseIndex];
                        }

                        scope.finalizeTraining = function () {
                            scope.timer.stop(scope.exerciseIndex);
                            scope.timer.finish();
                            scope.finish({ training: scope.training, timings: scope.timer.generateReport() });
                        }

                        scope.cancelTraining = function () {
                            scope.finish({ training: scope.training, timings: scope.timer.generateReport() });
                        }
                    }
                }
            }
        };
    })
})

