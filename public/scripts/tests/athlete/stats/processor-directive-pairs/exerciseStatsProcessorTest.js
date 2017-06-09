define(['angular', 'angular-mocks', 'exerciseStatsProcessor', 'AthleteModule', 'MainModule', 'TrainingFactory'], function () {
    describe('exerciseStatsProcessor Tests', function () {

        beforeEach(module('AthleteModule'));
        beforeEach(module('MainModule'));

        var ExerciseStatsProcessor;

        var fakeReports = [];

        beforeEach(inject(function (_exerciseStatsProcessor_, _TrainingFactory_) {
            ExerciseStatsProcessor = _exerciseStatsProcessor_;
        
            var TrainingFactory = _TrainingFactory_;

            var generateTraining = function (name) {
                var EXERCISES_COUNT = 3;
                var SETS_COUNT = 3;

                var training = TrainingFactory.create({ 'name': name });

                for (var i = 0; i < EXERCISES_COUNT; i++) {
                    training.addExercise(`exercise-${i}`);
                }

                for (var i = 0; i < SETS_COUNT; i++) {
                    training.getExercises()[0].addSet({reps: i* 3, weight: i*10});
                }

                training.setDays([true, true, true, true, true, true, true]);

                return training.getData();
            }

            fakeReports = [generateTraining("haha"), generateTraining("haha"), generateTraining("haha"), generateTraining("haha"), generateTraining("haha")];
            
        }));

        describe('In processor:', function () {
            it("the 'process' function should be defined", function () {
                expect(typeof ExerciseStatsProcessor.process).toEqual('function');
            });

            it("the 'process' function should return defined data", function () {
                var processorSettings = {exerciseName: "exercise-0", set: "all", repsOrWeights: "reps and weights"};
                var data = ExerciseStatsProcessor.process(fakeReports, processorSettings);

                expect(data).toBeDefined();
            });

            it("When 'reps' as argument then the 'process' function should return only reps", function () {
                var processorSettings = {exerciseName: "exercise-0", set: "all", repsOrWeights: "reps"};
                var data = ExerciseStatsProcessor.process(fakeReports, processorSettings)

                expect(data.data.length).toEqual(5);

                var expectedDataStructure = { 'set 1': 0, 'set 2': 0, 'set 3': 3, 'set 4': 6 };
                expect(data.data[0]).toEqual(expectedDataStructure);
            });

            it("When 'weights' as argument then the 'process' function should return only weights", function () {
                var processorSettings = {exerciseName: "exercise-0", set: "all", repsOrWeights: "weights"};
                var data = ExerciseStatsProcessor.process(fakeReports, processorSettings)

                expect(data.data.length).toEqual(5);

                var expectedDataStructure = { 'set 1': 0, 'set 2': 0, 'set 3': 10, 'set 4': 20 };
                expect(data.data[0]).toEqual(expectedDataStructure);
            });

            it("When 'both' as argument then the 'process' function should return reps and weights", function () {
                var processorSettings = {exerciseName: "exercise-0", set: "all", repsOrWeights: "reps and weights"};
                var data = ExerciseStatsProcessor.process(fakeReports, processorSettings)

                var expectedData = [
                    { reps: 0, weight: 0 },
                    { reps: 0, weight: 0},
                    { reps: 3, weight: 10},
                    { reps: 6, weight: 20},                        
                ]

                expect(data.data.length).toEqual(5);
                expect(data.data[0]).toEqual(expectedData);
            });
        });
    });
}); 