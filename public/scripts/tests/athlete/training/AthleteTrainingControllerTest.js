define(['angular', 'angular-mocks', 'AthleteModule', 'AthleteTrainingController'], function () {
    describe('AthleteTrainingController Tests', function () {

        beforeEach(module('AthleteModule'));

        var $controller, $q;
        var AthleteTrainingController;
        var testStates;
        var fakeCreateFunction;
        var FakeTrainingFactory;
        var FakeAthleteTrainingService;

        beforeEach(inject(function (_$controller_, _$q_) {
            $controller = _$controller_;
            $q = _$q_;

            fakeCreateFunction = jasmine.createSpy('create');
            FakeTrainingFactory = {
                create: fakeCreateFunction
            }

            FakeAthleteTrainingService = {
                get: {},
                save: {}
            }

            spyOn(FakeAthleteTrainingService, 'save').and.callFake(function() {
                var deferred = $q.defer();
                deferred.resolve({});
                return deferred.promise;
            });

            spyOn(FakeAthleteTrainingService, 'get').and.callFake(function() {
                var deferred = $q.defer();
                deferred.resolve({});
                return deferred.promise;
            });

            testExercises = { 'first': 'firstExc', 'second': 'secondExc', 'third': 'thirdExc' };
            
            AthleteTrainingController = $controller('AthleteTrainingController', {
                Exercises: testExercises,
                TrainingFactory: FakeTrainingFactory,
                AthleteTrainingService: FakeAthleteTrainingService
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
                expect(fakeCreateFunction).toHaveBeenCalledWith({ name: 'New Training'});
                expect(fakeCreateFunction.calls.count()).toEqual(1);
            });
        });

        describe('When calling saveTraining function', function () {
            it("the flag variable should be set false", function () {
                AthleteTrainingController.newTraining();
                expect(AthleteTrainingController.createNewTraining).toEqual(true);
            });

            it("the passed object should be pushed to trainings array", function () {

                var fakeTraining = {
                    getData: jasmine.createSpy('getData')
                }

                AthleteTrainingController.saveTraining(fakeTraining);
                expect(FakeAthleteTrainingService.save).toHaveBeenCalled();
            });
        });
    });
}); 