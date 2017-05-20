define(['AthleteModule', 'AthleteTrainingService', 'Exercises', 'performTrainingDirective', 'TrainingFactory', 'ExerciseFactory', 'selectByDayFilter'], function (AthleteModule) {
    AthleteModule.controller('AthleteBoardController', function (AthleteTrainingService, Exercises, TrainingFactory, ExerciseFactory, moment, $filter) {
        var vm = this;

        vm.init = init;
        vm.train = train;
        vm.backToList = backToList;
        vm.startTraning = startTraning;
        vm.onTrainingFinish = onTrainingFinish;

        vm.init();

        function init() {
            vm.exercises = Exercises;
            vm.currentTraining = {};

            AthleteTrainingService.get().then(function(response) {
                vm.trainings = $filter('byDay')(response, moment().day());
            }, function(failure) {
                console.error(`Obtaining trainings failed: ${failure}`);
            });

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