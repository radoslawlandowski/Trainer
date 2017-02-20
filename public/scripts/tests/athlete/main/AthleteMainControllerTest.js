define(['angular', 'AthleteMainController', 'angular-mocks', 'AthleteModule'], function (angular) {
    describe('AthleteMainController Tests', function () {
        beforeEach(module('AthleteModule'));

        var $controller;
        var AthleteMainController;

        beforeEach(inject(function (_$controller_) {
            $controller = _$controller_;

            AthleteMainController = $controller('AthleteMainController', {
                states: states
            });
        }));

        var states = { 'first': 'firstState', 'second': 'secondState', 'third': 'thirdState' };

        describe('When creating AthleteMainController:', function () {
            it("the resolved data should be properly assigned", function () {
                expect(AthleteMainController.states).toEqual(states);
            });
        });
    });
});