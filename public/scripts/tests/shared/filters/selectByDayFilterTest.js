define(['angular', 'angular-mocks', 'MainModule', 'selectByDayFilter'], function () {
    describe('ByDayFilter Tests', function () {

        beforeEach(module('MainModule'));

        var SUNDAY = 0;
        var MONDAY = 1;
        var TUESDAY = 2;

        var byDay;
        var TrainingFactory;
        var moment;

        var trainings = [];

        beforeEach(inject(function (_byDayFilter_, _TrainingFactory_) {
            byDay = _byDayFilter_;
            TrainingFactory = _TrainingFactory_;

            trainings[0] = TrainingFactory.create("t0");
            trainings[1] = TrainingFactory.create("t1");
            trainings[2] = TrainingFactory.create("t2");
        }));

        describe('When called with valid trainings and day', function () {
            it("it should return empty array", function () {
                expect(byDay(trainings, MONDAY).length).toEqual(0);
            });

            it("it should return array of 1 element", function () {
                trainings[0].getDays()[MONDAY] = true;

                expect(byDay(trainings, MONDAY).length).toEqual(1);
            });

            it("it should return array of 2 elements", function () {
                trainings[0].getDays()[MONDAY] = true;
                trainings[1].getDays()[MONDAY] = true;

                expect(byDay(trainings, MONDAY).length).toEqual(2);
            });
        });

        describe('When one training is done in two getDays()', function () {
            it("it should be present in two arrays", function () {
                trainings[0].getDays()[MONDAY] = true;
                trainings[0].getDays()[SUNDAY] = true;

                var mondayTrainings = byDay(trainings, MONDAY);
                var sundayTrainings = byDay(trainings, SUNDAY);

                expect(mondayTrainings).toContain(trainings[0])
                expect(sundayTrainings).toContain(trainings[0]);
            });
        });
    });
});