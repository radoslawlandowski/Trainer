define(['MainModule', 'ExerciseFactory', 'TrainingFactory', 'Exercises', 'Days'], function (MainModule) {
    MainModule.directive('trainingDirective', function (ExerciseFactory, TrainingFactory, Exercises, Days) {
        return {
            restrict: 'E',
            scope: {
                'training': '=?',
                'isEdited': "=?",
                'onSave': '&'
            },
            templateUrl: 'scripts/application/shared/directives/training/trainingDirectiveTemplate.html',
            link: function (scope, element, attrs) {
                scope.tempTraining = angular.copy(scope.training);
                scope.availableExercises = Exercises;
                scope.daysOfWeek = Days;

                scope.addExercise = function (exerciseName) {
                    scope.tempTraining.addExercise(ExerciseFactory.create(exerciseName));
                }

                scope.removeExercise = function (exercise) {
                    scope.tempTraining.removeExercise(exercise);
                }

                scope.edit = function () {
                    scope.isEdited = !scope.isEdited;
                }

                scope.discard = function () {
                    scope.tempTraining = angular.copy(scope.training);
                    scope.isEdited = false;
                }

                scope.save = function () {
                    scope.onSave({training: scope.tempTraining});
                    scope.isEdited = false;
                }
            }
        };
    });
});