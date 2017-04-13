define(['angular', 'AthleteModule', 'TrainingFactory',, 'exerciseCardDirective', 'exercisePlanDirective', 'searchBarDirective', 'searchByTagFilter', 'trainingDirective', 'Exercises', 'AthleteTrainingService'], function(angular, AthleteModule) {
    AthleteModule.controller('AthleteTrainingController', function(Exercises, TrainingFactory, AthleteTrainingService) {
        var vm = this;

        vm.exercises = Exercises;
        vm.trainings = [];

        function init() {
            AthleteTrainingService.get().then(function(response) {
                vm.trainings = response;
            });
        }

        init();

        vm.newTraining = function() {
            vm.createNewTraining = true;
            vm.training = TrainingFactory.create({ 'name': 'New Training'});
        }

        vm.discardNewTraining = function() {
            vm.createNewTraining = false;
            vm.training = undefined;
        }

        vm.saveTraining = function(training) {
            AthleteTrainingService.put(training.getData()).then(function(response) {
                vm.trainings.push(response);
            });
            
            vm.createNewTraining = false;
        }
    })
})