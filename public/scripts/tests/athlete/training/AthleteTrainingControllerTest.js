define(['angular', 'angular-mocks', 'AthleteTrainingController', 'AthleteModule'], function () {
    describe('AthleteTrainingController Tests', function () {

        beforeEach(module('AthleteModule'));

        var $controller;
        var AthleteTrainingController;
        var testStates;
        var fakeCreateFunction;
        var FakeTrainingFactory;

        beforeEach(inject(function (_$controller_) {
            $controller = _$controller_;

            fakeCreateFunction = jasmine.createSpy('create');
            FakeTrainingFactory = {
                create: fakeCreateFunction
            }

            testExercises = { 'first': 'firstExc', 'second': 'secondExc', 'third': 'thirdExc' };
            
            AthleteTrainingController = $controller('AthleteTrainingController', {
                Exercises: testExercises,
                TrainingFactory: FakeTrainingFactory
            });
        }));

        describe('When creating AthleteTrainingController', function () {
            it("the injected data should be properly assigned", function () {
                expect(AthleteTrainingController.exercises).toEqual(testExercises);
            });
        });

        describe('When calling newTraining function', function () {
            it("the flag variable should be set true", function () {
                AthleteTrainingController.newTraining();
                expect(AthleteTrainingController.createNewTraining).toEqual(true);
            });

            it("the TrainingFactory create method should be called once with the default name", function () {
                AthleteTrainingController.newTraining();
                expect(fakeCreateFunction).toHaveBeenCalledWith("New Training");
                expect(fakeCreateFunction.calls.count()).toEqual(1);
            });
        });

        describe('When calling saveTraining function', function () {
            it("the flag variable should be set false", function () {
                AthleteTrainingController.newTraining();
                expect(AthleteTrainingController.createNewTraining).toEqual(true);
            });

            it("the passed object should be pushed to trainings array", function () {
                AthleteTrainingController.saveTraining({'dummy': 'object'});
                expect(AthleteTrainingController.trainings.length).toEqual(1);
            });
        });
    });
}); 