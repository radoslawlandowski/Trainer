define(['MainModule', 'ExerciseFactory', 'TrainingFactory'], function (MainModule) {
    MainModule.directive('trainingDirective', function (ExerciseFactory, TrainingFactory) {
        return {
            restrict: 'E',
            scope: {
                'availableExercises': "=",
                'training': '=?',
                'isEdited': "=?"
            },
            templateUrl: 'scripts/application/shared/directives/training/trainingDirectiveTemplate.html',
            link: function (scope, element, attrs) {
                scope.addExercise = function(exerciseName) {
                    scope.training.addExercise(ExerciseFactory.create(exerciseName));
                }

                scope.removeExercise = function(exercise) {
                    scope.training.removeExercise(exercise);
                }

                scope.edit = function() {
                    scope.isEdited = !scope.isEdited;
                    scope.tempTraining = angular.copy(scope.training);
                }
            }
        };
    });
});