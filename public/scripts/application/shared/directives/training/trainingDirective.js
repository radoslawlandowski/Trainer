define(['MainModule', 'TrainingFactory', 'Exercises', 'Days'], function (MainModule) {
    MainModule.directive('trainingDirective', function (TrainingFactory, Exercises, Days) {
        return {
            restrict: 'E',
            scope: {
                'training': '<?',
                'isEdited': "=?",
                'onSave': '&'
            },
            templateUrl: 'scripts/application/shared/directives/training/trainingDirectiveTemplate.html',
            link: function (scope, element, attrs) {
                scope.tempTraining = angular.copy(scope.training);
                scope.availableExercises = Exercises;
                scope.daysOfWeek = Days;

                scope.addExercise = function (exerciseName) {
                    scope.tempTraining.addExercise(exerciseName);
                }

                scope.removeExercise = function (exerciseName) {
                    scope.tempTraining.removeExercise(exerciseName);
                }

                scope.edit = function () {
                    scope.isEdited = !scope.isEdited;
                }

                scope.discard = function () {
                    scope.tempTraining = angular.copy(scope.training);
                    scope.isEdited = false;
                }

                scope.save = function () {
                    scope.onSave({ training: scope.tempTraining }).then(function() {
                        scope.isEdited = false;
                    }, function(failure) {
                        console.info("I reached the directive")
                    });
                }
            }
        };
    });
});