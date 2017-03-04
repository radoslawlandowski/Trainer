define(['MainModule', 'ExerciseFactory', 'TrainingFactory'], function (MainModule) {
    MainModule.directive('trainingDirective', function ($state, ExerciseFactory, TrainingFactory) {
        return {
            restrict: 'E',
            scope: {
                'availableExercises': "=",
                'training': '=?',
                'edit': "=?"
            },
            templateUrl: 'scripts/application/shared/directives/training/trainingDirectiveTemplate.html',
            link: function (scope, element, attrs) {
                scope.addExercise = function(exerciseName) {
                    scope.training.addExercise(ExerciseFactory.create(exerciseName));
                }

                scope.removeExercise = function(exercise) {
                    scope.training.removeExercise(exercise);
                }
            }
        };
    });
});