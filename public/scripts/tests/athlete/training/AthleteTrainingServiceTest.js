define(['angular', 'angular-mocks', 'AthleteModule', 'AthleteTrainingService'], function () {
    describe('AthleteTrainingService', function () {

        beforeEach(module('AthleteModule'));

        beforeEach(function () {
            var FakeTrainingFactory = {
                create: jasmine.createSpy('create')
            }

            var FakeExerciseFactory = {

            }

            module(function ($provide) {
                $provide.value('TrainingFactory', FakeTrainingFactory);
                $provide.value('ExerciseFactory', FakeExerciseFactory);
            });
        });

        var AthleteTrainingService;
        var $httpBackend;

        beforeEach(inject(function (_AthleteTrainingService_, _$httpBackend_) {
            AthleteTrainingService = _AthleteTrainingService_;

            $httpBackend = _$httpBackend_;
        }));

        afterEach(function () {
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        });

        describe('When calling save function', function () {
            it("and isNew flag is 'true' it should do POST call", function () {

                $httpBackend.expectPOST('/api/training').respond(function () {
                    return [200, {}];
                });

                AthleteTrainingService.save({ training: "someTraining" }, true);

                $httpBackend.flush();
            });

            it("and isNew flag is 'false' it should do PUT call", function () {
                $httpBackend.expectPUT('/api/training').respond(function () {
                    return [200, {}];
                });;

                AthleteTrainingService.save({ training: "someTraining" }, false);

                $httpBackend.flush();
            });
        });
    });
}); 