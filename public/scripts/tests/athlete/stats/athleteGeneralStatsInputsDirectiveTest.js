define(['angular', 'angular-mocks', 'MainModule', 'AthleteModule', 'athleteGeneralStatsInputsDirective'], function () {
    describe('AthleteGeneralStatsInputsDirective Tests', function () {

        beforeEach(module('MainModule'));
        beforeEach(module('AthleteModule'));
        beforeEach(module('htmltemplates'));

        var element;

        var $rootScope;
        beforeEach(inject(function(_$rootScope_, $compile) {
            $rootScope = _$rootScope_

            element = angular.element('<athlete-general-stats-inputs-directive></athlete-general-stats-inputs-directive>');
            
            scope = $rootScope.$new();
            $compile(element)(scope);
            scope.$digest();
        }));

        function getBySelector(selector) {
            return angular.element(element[0].querySelector(selector));
        }

        describe('When directive is compiled', function () {
            it("it should inputs defined", function () {
                console.log(element.html());
             });
        });  
    });
});
 
