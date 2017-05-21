define(['moment', 'angular', 'angular-mocks', 'MainModule', 'TrainingFactory'], function (moment) {
    describe('TrainingFactory', function () {

        beforeEach(module('MainModule'));

        var TrainingFactory;

        var trainingName;

        beforeAll(function() {
            trainingName = "myTraining";
        })

        beforeEach(inject(function (_TrainingFactory_) {
            TrainingFactory = _TrainingFactory_;
        })); 

        describe('When calling create function', function () {
            it("it should return an object with valid name", function () {
                var training = TrainingFactory.create({ 'name': trainingName });
                
                expect(training.getName()).toEqual(trainingName);
            });

            it("it should return an object with addExercise function", function () { 
                var training = TrainingFactory.create({ 'name': trainingName });
                
                expect(training.addExercise).toBeDefined();
            });

            it("it should return an object with removeExercise function", function () {
                var training = TrainingFactory.create({ 'name': trainingName });
                
                expect(training.removeExercise).toBeDefined();
            });

            it("it should assign today's date", function () {
                var training = TrainingFactory.create({ 'name': trainingName });

                var today = moment().format("MMM Do YY");
                
                expect(training.getDate()).toEqual(today);
            });
        });

        describe('When calling add function', function () {
            it("it should add an entry into exercise array", function () {
                var exercise = {
                    'name': 'exerciseName'
                }

                var training = TrainingFactory.create({ 'name': trainingName });

                training.addExercise(exercise);

                expect(training.getExercises()[0].getName()).toEqual(exercise);
            });  
        });

        describe('When calling removeSet function', function () {
            it("it should remove an entry from sets array", function () {
                var exercise = {
                    'name': 'exerciseName'
                }

                var training = TrainingFactory.create({ 'name': trainingName });

                training.addExercise(exercise.name);
                training.removeExercise(exercise.name);

                expect(training.getExercises()[0]).toBeUndefined();
            });
        });

        describe('When calling getData function', function () {
            it("it should return object of three keys", function () {
                var exercise = {
                    'name': 'exerciseName'
                }

                var training = TrainingFactory.create({ 'name': trainingName });

                training.addExercise(exercise);
                training.removeExercise(exercise.name);

                expect(training.getData().name).toBeDefined();
                expect(training.getData().exercises).toBeDefined();
                expect(training.getData().days).toBeDefined();
            });
        });
    });
}); 