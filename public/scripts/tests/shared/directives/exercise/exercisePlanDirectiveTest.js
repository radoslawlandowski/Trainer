define(['angular', 'angular-mocks', 'MainModule', 'Exercises', 'ExerciseFactory'], function () {
    describe('ExercisePlanDirective Tests', function () {

        beforeEach(module('MainModule'));
        beforeEach(module('htmltemplates'));

        var element, Exercises;
        var ExerciseFactory;
        var exercise;

        beforeEach(inject(function($rootScope, $compile, _Exercises_, _ExerciseFactory_) {
            Exercises = _Exercises_;
            ExerciseFactory = _ExerciseFactory_;
            
            element = angular.element('<exercise-plan-directive exercise="exercise"></exercise-plan-directive>');
            
            scope = $rootScope.$new();
            exercise = ExerciseFactory.create("testExcercise");
            scope.exercise = exercise;

            $compile(element)(scope);
            scope.$digest();
        }));

        function getBySelector(selector) {
            return angular.element(element[0].querySelector(selector));
        }

        describe('When provided valid exercise attribute', function () {
            it("it should propagate exercise name properly", function () {
                var exerciseName = getBySelector('#exerciseName');
                expect(exerciseName.text()).toEqual('testExcercise');
            });

            it("it should create first empty reps and weight inputs", function () {
                var repsInput = getBySelector('#repsInput-0');
                expect(repsInput.text()).toEqual('');

                var weightInput = getBySelector('#weightInput-0');
                expect(weightInput.text()).toEqual('');
            });

            it("it should have button for adding new set", function () {
                var addSetButton = getBySelector('#addSetButton-0');
                expect(addSetButton).toBeDefined();
            });  
        });

        describe('When clicking addSetButton', function () {
            it("it should add new row of reps and weight inputs", function () {
                var repsInput = getBySelector('#repsInput-1');
                expect(repsInput.length).toEqual(0);

                var addSetButton = getBySelector('#addSetButton-0');
                addSetButton.click();

                var repsInput = getBySelector('#repsInput-1');
                expect(repsInput.length).toEqual(1);
            });
        });

        describe('When having more than one set', function () {
            it("it should have removeSetButton for each row", function () {
                var addSetButton = getBySelector('#addSetButton-0');
                addSetButton.click();

                var removeSetButton = getBySelector('#removeSetButton-0');
                expect(removeSetButton.length).toEqual(1);

                var removeSetButton1 = getBySelector('#removeSetButton-1');
                expect(removeSetButton1.length).toEqual(1);

                var removeSetButton2 = getBySelector('#removeSetButton-2');
                expect(removeSetButton2.length).toEqual(0);
            });

            it("and clicking removeSetButton it should remove one row", function () {
                var addSetButton = getBySelector('#addSetButton-0');
                addSetButton.click();

                var removeSetButton1 = getBySelector('#removeSetButton-1');
                expect(removeSetButton1.length).toEqual(1);

                var weightInput = getBySelector('#weightInput-1');
                expect(weightInput.length).toEqual(1);

                removeSetButton1.click();

                var weightInput = getBySelector('#weightInput-1');
                expect(weightInput.length).toEqual(0);
            });
        });
    });
});