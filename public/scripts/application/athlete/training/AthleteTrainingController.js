define(['AthleteModule', 'exerciseCardDirective', 'exercisePlanDirective', 'Exercises'], function(AthleteModule) {
    AthleteModule.controller('AthleteTrainingController', function(Exercises) {
        var vm = this;

        vm.exercises = Exercises;
        vm.trainingSessions = {};
        vm.training = [];

        vm.addToRoutine = function(exercise) {
            vm.training.push(exercise);
        }

        vm.removeFromRoutine = function(index) {
            vm.training.splice(index, 1);
        }
    })
})