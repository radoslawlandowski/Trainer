define(['angular', 'angular-mocks', 'MainModule', 'AthleteModule', 'AthleteStates'], function () {
    describe('SidebarDirective Tests', function () {

        beforeEach(module('MainModule'));
        beforeEach(module('AthleteModule'));
        beforeEach(module('htmltemplates'));

        var element, AthleteStates, go;
        go = jasmine.createSpy('go');

        beforeEach(module(function($provide) {
            $provide.service('$state', function() {
                this.go = go;
            });
        }));

        beforeEach(inject(function($rootScope, $compile, _Exercises_, _AthleteStates_) {
            Exercises = _Exercises_;
            AthleteStates = _AthleteStates_;

            element = angular.element('<sidebar-directive states="athleteStates"></sidebar-directive>');
            
            scope = $rootScope.$new();
            scope.athleteStates = AthleteStates;

            $compile(element)(scope);
            scope.$digest();
        }));

        function getBySelector(selector) {
            return angular.element(element[0].querySelector(selector));
        }

        function toAngularElement(element) {
            return angular.element(element);
        }

        describe('When provided valid states attribute', function () {
            it("it should create corresponding count of buttons", function () {
                var buttons = getBySelector('#sidebarButtons').find('button');

                var statesCount = Object.keys(AthleteStates).length;

                expect(buttons.length).toEqual(statesCount);
            });
        });

        describe('When clicking a button', function () {
            it("it should call $state.go with an appropriate argument", function () {
                var trainingButton = getBySelector('#button-' + AthleteStates.TRAINING.displayedName);

                trainingButton.click();

                expect(go).toHaveBeenCalledWith(AthleteStates.TRAINING.state);
            });
        });
    });
});