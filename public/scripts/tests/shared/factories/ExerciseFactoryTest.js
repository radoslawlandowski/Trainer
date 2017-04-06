define(['angular', 'angular-mocks', 'MainModule', 'ExerciseFactory'], function () {
    describe('ExerciseFactory', function () {

        beforeEach(module('MainModule'));

        var ExerciseFactory;

        beforeEach(inject(function (_ExerciseFactory_) {
            ExerciseFactory = _ExerciseFactory_;
        }));

        describe('When calling create function', function () {
            it("it should return an object with valid name", function () {
                var exerciseName = "MyExercise";

                var exercise = ExerciseFactory.create(exerciseName);
                expect(exercise.name).toEqual(exerciseName);
            });

            it("it should return an object with addSet function", function () {
                var exerciseName = "MyExercise";

                var exercise = ExerciseFactory.create(exerciseName);
                
                expect(exercise.addSet).toBeDefined();
            });

            it("it should return an object with removeSet function", function () {
                var exerciseName = "MyExercise";

                var exercise = ExerciseFactory.create(exerciseName);
                
                expect(exercise.removeSet).toBeDefined();
            });
        });

        describe('When calling addSet function', function () {
            it("it should add an entry into sets array", function () {
                var exerciseName = "MyExercise";

                var exercise = ExerciseFactory.create(exerciseName);

                exercise.addSet("mySet");
                expect(exercise.sets[0]).toEqual("mySet");
            });
        });

        describe('When calling removeSet function', function () {
            it("it should remove an entry from sets array", function () {
                var exerciseName = "MyExercise";

                var exercise = ExerciseFactory.create(exerciseName);

                exercise.addSet("mySet");
                exercise.removeSet(0);
                expect(exercise.sets[0]).toBeUndefined();
            });
        });
    });
}); 