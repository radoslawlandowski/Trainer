define(['angular', 'AthleteModule', 'TrainingFactory', 'ExerciseFactory', 'exerciseCardDirective', 'exercisePlanDirective', 'searchBarDirective', 'searchByTagFilter', 'trainingDirective', 'Exercises'], function(angular, AthleteModule) {
    AthleteModule.controller('AthleteTrainingController', function(Exercises, TrainingFactory, ExerciseFactory) {
        var vm = this;

        vm.exercises = Exercises;
        vm.trainings = [];

        vm.newTraining = function() {
            vm.createNewTraining = true;
            vm.training = TrainingFactory.create("New Training");
        }

        vm.discardNewTraining = function() {
            vm.createNewTraining = false;
            vm.training = undefined;
        }

        vm.saveTraining = function(training) {
            vm.trainings.push(angular.copy(training));
            vm.createNewTraining = false;
        }
    })
})