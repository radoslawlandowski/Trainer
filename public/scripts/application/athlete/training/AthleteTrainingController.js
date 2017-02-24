define(['AthleteModule', 'ExerciseFactory', 'exerciseCardDirective', 'exercisePlanDirective', 'Exercises'], function(AthleteModule) {
    AthleteModule.controller('AthleteTrainingController', function(Exercises, ExerciseFactory) {
        var vm = this;

        vm.exercises = Exercises;
        vm.training = [];

        vm.addToRoutine = function(exerciseName) {
            vm.training.push(ExerciseFactory.create(exerciseName));
        }

        vm.removeFromRoutine = function(index) {
            vm.training.splice(index, 1);
        }
    })
})