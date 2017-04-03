define(['AthleteModule', 'AthleteTrainingService', 'Exercises', 'performTrainingDirective', 'TrainingFactory', 'ExerciseFactory', 'TrainingReporter'], function(AthleteModule) {
    AthleteModule.controller('AthleteBoardController', function(AthleteTrainingService, Exercises, TrainingFactory, ExerciseFactory, TrainingReporter) {
        var vm = this;

        vm.train = train;
        vm.init = init;
        vm.backToList = backToList;
        vm.startTraning = startTraning;
        vm.onTrainingFinish = onTrainingFinish;

        vm.init();

        function init() {
            vm.currentTraining = {};    

            // For the sake...
            var training1 = TrainingFactory.create("First");
            var training2 = TrainingFactory.create("Second");

            training1.addExercise(ExerciseFactory.create("ex1"));
            training1.addExercise(ExerciseFactory.create("ex2"));
            training1.addExercise(ExerciseFactory.create("ex3"));

            training2.addExercise(ExerciseFactory.create("ex1"));
            training2.addExercise(ExerciseFactory.create("ex2"));
            training2.addExercise(ExerciseFactory.create("ex3"));

            AthleteTrainingService.put(training1);
            AthleteTrainingService.put(training2);
            // ... of testing!


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

        function startTraning() {
            vm.trainingStarted = true;
        }

        function onTrainingFinish(training, timings) {
            console.info("onTrainingFinish");
            vm.trainingStarted = false;
            vm.trainingChosen = false;
            vm.currentTraining = {};

            var reporter = TrainingReporter.create("My report", training, timings);

            console.log(reporter.generateReport());

        }
    })
})