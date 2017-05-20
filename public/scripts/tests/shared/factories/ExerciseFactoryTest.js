define(['angular', 'angular-mocks', 'MainModule', 'ExerciseFactory'], function () {
    describe('ExerciseFactory', function () {

        beforeEach(module('MainModule'));

        var ExerciseFactory;

        var exerciseData, exerciseName;

        beforeEach(inject(function (_ExerciseFactory_) {
            ExerciseFactory = _ExerciseFactory_;

            exerciseName = 'MyExercise';
            exerciseData = {
                'name': exerciseName
            }
        }));

        describe('When calling create function', function () {
            it("it should return an object with valid name", function () {
                var exercise = ExerciseFactory.create(exerciseData);

                expect(exercise.getName()).toEqual(exerciseName);
            });

            it("it should return an object with addSet function", function () {
                var exercise = ExerciseFactory.create(exerciseData);
                  
                expect(exercise.addSet).toBeDefined();
            });

            it("it should return an object with removeSet function", function () {
                var exercise = ExerciseFactory.create(exerciseData);
                
                expect(exercise.removeSet).toBeDefined();
            });

            it("it should have one element in sets array by default", function () {
                var exercise = ExerciseFactory.create(exerciseData);
                
                expect(exercise.getSets().length).toEqual(1);
            });
        });

        describe('When calling addSet function', function () {
            it("it should add an entry into sets array", function () {
                var exercise = ExerciseFactory.create(exerciseData);

                exercise.addSet("mySet");
                expect(exercise.getSets()[1]).toEqual("mySet");
            });
        });

        describe('When calling removeSet function', function () {
            it("it should remove an entry from sets array", function () {
                var exercise = ExerciseFactory.create(exerciseData);

                exercise.addSet("mySet");
                exercise.removeSet(1);
                expect(exercise.getSets()[1]).toBeUndefined();
            });
        });
    });
}); 