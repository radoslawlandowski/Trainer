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
            exercise = ExerciseFactory.create({ 'name': 'testExcercise' });
            scope.exercise = exercise;

            $compile(element)(scope);
            scope.$digest();
        }));

        function getBySelector(selector) {
            return angular.element(element[0].querySelector(selector));
        }

        describe('When provided valid exercise attribute', function () {
            it("it should propagate exercise name properly", function () {
                var exerciseName = getBySelector('#exercise-name');
                expect(exerciseName.text()).toEqual('testExcercise');
            });

            it("it should create first empty reps and weight inputs", function () {
                var repsInput = getBySelector('#reps-input-0');
                expect(repsInput.text()).toEqual('');

                var weightInput = getBySelector('#weight-input-0');
                expect(weightInput.text()).toEqual('');
            });

            it("it should have button for adding new set", function () {
                var addSetButton = getBySelector('#add-set-button-0');
                expect(addSetButton).toBeDefined();
            });  
        });

        describe('When clicking addSetButton', function () {
            it("it should add new row of reps and weight inputs", function () {
                var repsInput = getBySelector('#reps-input-1');
                expect(repsInput.length).toEqual(0);

                var addSetButton = getBySelector('#add-set-button-0');
                addSetButton.click();

                var repsInput = getBySelector('#reps-input-1');
                expect(repsInput.length).toEqual(1);
            });
        });

        describe('When having more than one set', function () {
            it("it should have removeSetButton for each row", function () {
                var addSetButton = getBySelector('#add-set-button-0');
                addSetButton.click();

                var removeSetButton = getBySelector('#remove-set-button-0');
                expect(removeSetButton.length).toEqual(1);

                var removeSetButton1 = getBySelector('#remove-set-button-1');
                expect(removeSetButton1.length).toEqual(1);

                var removeSetButton2 = getBySelector('#remove-set-button-2');
                expect(removeSetButton2.length).toEqual(0);
            });

            it("and clicking removeSetButton it should remove one row", function () {
                var addSetButton = getBySelector('#add-set-button-0');
                addSetButton.click();

                var removeSetButton1 = getBySelector('#remove-set-button-1');
                expect(removeSetButton1.length).toEqual(1);

                var weightInput = getBySelector('#weight-input-1');
                expect(weightInput.length).toEqual(1);

                removeSetButton1.click();

                var weightInput = getBySelector('#weight-input-1');
                expect(weightInput.length).toEqual(0);
            });
        });
    });
});