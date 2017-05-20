define(['angular', 'AthleteModule', 'TrainingFactory', 'exerciseCardDirective', 'exercisePlanDirective', 'searchBarDirective', 'searchByTagFilter', 'trainingDirective', 'Exercises', 'AthleteTrainingService'], function(angular, AthleteModule) {
    AthleteModule.controller('AthleteTrainingController', function(Exercises, TrainingFactory, AthleteTrainingService, $q) {
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
            vm.training = TrainingFactory.create({ 'name': 'New Training' });
        }

        vm.discardNewTraining = function() {
            vm.createNewTraining = false;
            vm.training = undefined;
        }

        vm.saveTraining = function(training, isNew) {
            return AthleteTrainingService.save(training.getData(), isNew).then(function(response) {
                vm.trainings.push(response);

                vm.createNewTraining = false;
            }, function(failure) {
                console.warn(failure.data.message);
                return $q.reject();
            });
            
        }
    })
})