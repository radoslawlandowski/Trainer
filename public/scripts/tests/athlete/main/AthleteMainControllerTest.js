define(['angular', 'angular-mocks', 'AthleteMainController', 'AthleteModule'], function () {
    describe('AthleteMainController Tests', function () {

        beforeEach(module('AthleteModule'));

        var $controller;
        var AthleteMainController;

        beforeEach(inject(function (_$controller_) {
            $controller = _$controller_;

            AthleteMainController = $controller('AthleteMainController', {
                states: testStates
            });
        }));

        var testStates = { 'first': 'firstState', 'second': 'secondState', 'third': 'thirdState' };

        describe('When creating AthleteMainController:', function () {
            it("the resolved data should be properly assigned", function () {
                expect(AthleteMainController.states).toEqual(testStates);
            });
        });
    });
});