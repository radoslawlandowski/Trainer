define(['angular', 'AthleteModule', 'ExerciseFactory', 'exerciseCardDirective', 'exercisePlanDirective', 'trainingDirective', 'Exercises'], function(angular, AthleteModule) {
    AthleteModule.controller('AthleteTrainingController', function(Exercises, ExerciseFactory) {
        var vm = this;

        vm.exercises = Exercises;
        vm.trainings = [];
        vm.training = [];

        vm.addToRoutine = function(exerciseName) {
            vm.training.push(ExerciseFactory.create(exerciseName));
        }

        vm.removeFromRoutine = function(index) {
            vm.training.splice(index, 1);
        }

        vm.newTraining = function() {
            vm.training = [];
            vm.createNewTraining = true;
        }

        vm.discardNewTraining = function() {
            vm.createNewTraining = false;
        }

        vm.panelCollapsed = function() {
            console.log("After collapse!");
        }

        vm.saveTraining = function(training) {
            var trainingData = {
                title: "Any title",
                exercises: training
            }
            vm.trainings.push(angular.copy(trainingData));
            vm.createNewTraining = false;
        }
    })
})