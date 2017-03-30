define(['angular', 'AthleteModule', 'TrainingFactory', 'ExerciseFactory', 'exerciseCardDirective', 'exercisePlanDirective', 'searchBarDirective', 'searchByTagFilter', 'trainingDirective', 'Exercises', 'AthleteTrainingService'], function(angular, AthleteModule) {
    AthleteModule.controller('AthleteTrainingController', function(Exercises, TrainingFactory, AthleteTrainingService) {
        var vm = this;

        vm.exercises = Exercises;
        vm.trainings = [];

        function init() {
            vm.trainings = AthleteTrainingService.get();
        }

        init();

        vm.newTraining = function() {
            vm.createNewTraining = true;
            vm.training = TrainingFactory.create("New Training");
        }

        vm.discardNewTraining = function() {
            vm.createNewTraining = false;
            vm.training = undefined;
        }

        vm.saveTraining = function(training) {
            AthleteTrainingService.put(angular.copy(training));
            vm.createNewTraining = false;
        }
    })
})