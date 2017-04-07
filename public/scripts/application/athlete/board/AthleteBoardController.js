define(['AthleteModule', 'AthleteTrainingService', 'Exercises', 'performTrainingDirective', 'TrainingFactory', 'ExerciseFactory', 'selectByDayFilter'], function (AthleteModule) {
    AthleteModule.controller('AthleteBoardController', function (AthleteTrainingService, Exercises, TrainingFactory, ExerciseFactory, moment, $filter) {
        var vm = this;

        vm.train = train;
        vm.init = init;
        vm.backToList = backToList;
        vm.startTraning = startTraning;
        vm.onTrainingFinish = onTrainingFinish;

        vm.init();

        function init() {
            vm.exercises = Exercises;
            vm.currentTraining = {};

            vm.trainings = $filter('byDay')(AthleteTrainingService.get(), moment().day());
            vm.trainingChosen = false;
        }

        function train(training) {
            vm.currentTraining = training;
            vm.trainingChosen = true;
        }

        function backToList() {
            vm.trainingChosen = false;
        }

        function startTraning() {
            vm.trainingStarted = true;
        }

        function onTrainingFinish(training, timings) {
            vm.trainingStarted = false;
            vm.trainingChosen = false;
            vm.currentTraining = {};
        }
    })
})