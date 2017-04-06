define(['angular', 'angular-mocks', 'MainModule', 'TrainingFactory'], function () {
    describe('TrainingFactory', function () {

        beforeEach(module('MainModule'));

        var TrainingFactory;

        beforeEach(inject(function (_TrainingFactory_) {
            TrainingFactory = _TrainingFactory_;
        }));

        describe('When calling create function', function () {
            it("it should return an object with valid title", function () {
                var trainingName = "MyTraining";

                var training = TrainingFactory.create(trainingName);
                
                expect(training.title).toEqual(trainingName);
            });

            it("it should return an object with addExercise function", function () {
                var trainingName = "MyTraining";

                var training = TrainingFactory.create(trainingName);
                
                expect(training.addExercise).toBeDefined();
            });

            it("it should return an object with removeExercise function", function () {
                var trainingName = "MyTraining";

                var training = TrainingFactory.create(trainingName);
                
                expect(training.removeExercise).toBeDefined();
            });
        });

        describe('When calling addSet function', function () {
            it("it should add an entry into sets array", function () {
                var trainingName = "MyTraining";
                var exercise = {
                    'name': 'exerciseName'
                }

                var training = TrainingFactory.create(trainingName);

                training.addExercise(exercise);

                expect(training.exercises[0]).toEqual(exercise);
            });
        });

        describe('When calling removeSet function', function () {
            it("it should remove an entry from sets array", function () {
                var trainingName = "MyTraining";
                var exercise = {
                    'name': 'exerciseName'
                }

                var training = TrainingFactory.create(trainingName);

                training.addExercise(exercise);
                training.removeExercise(exercise.name);

                expect(training.exercises[0]).toBeUndefined();
            });
        });
    });
}); 