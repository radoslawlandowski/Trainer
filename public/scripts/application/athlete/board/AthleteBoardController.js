define(['AthleteModule', 'AthleteTrainingService', 'Exercises', 'performTrainingDirective'], function(AthleteModule) {
    AthleteModule.controller('AthleteBoardController', function(AthleteTrainingService, Exercises) {
        var vm = this;

        vm.train = train;
        vm.init = init;
        vm.backToList = backToList;
        vm.startTraning = startTraning;

        vm.init();

        function init() {
            vm.currentTraining = {};    
            vm.trainings = AthleteTrainingService.get();
            vm.trainingChosen = false;
            vm.exercises = Exercises;
        }

        function train(training) {
            vm.currentTraining = training;
            vm.trainingChosen = true;
        }

        function backToList() {
            vm.trainingChosen = false;
        }

        function startTraning(training) {
            vm.trainingStarted = true;
        }
    })
})