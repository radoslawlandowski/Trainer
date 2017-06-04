define(['angular', 'angular-mocks', 'MainModule', 'AthleteModule', 'athleteStatsDirective'], function () {
    describe('AthleteStatsDirective Tests', function () {

        beforeEach(module('MainModule'));
        beforeEach(module('AthleteModule'));
        beforeEach(module('htmltemplates'));

        var element;

        beforeEach(module('AthleteModule', function($compileProvider) {

            function mockDirective(name, template) {
                $compileProvider.directive(name, function () {
                    var def = {
                        priority: 9999,
                        terminal: true,
                        restrict: 'EAC',
                        template: template,
                    };
                    return def;
                });
            }

            mockDirective('athleteGeneralStatsInputsDirective', '<div id="agsid">athleteGeneralStatsInputsDirective</div>');
            mockDirective('exerciseStatsDirective', '<div id="esd">exerciseStatsDirective</div>');
            mockDirective('timingsStatsDirective', '<div id="tsd">timingsStatsDirective</div>');
            mockDirective('trainingStatsDirective', '<div id="trsd">trainingStatsDirective</div>');
            mockDirective('athleteChartDirective', '<div id="acd">athleteChartDirective</div>');

        }));

        var $httpBackend;
        var $rootScope;
        beforeEach(inject(function(_$rootScope_, $compile, _$httpBackend_) {
            $httpBackend = _$httpBackend_;
            $rootScope = _$rootScope_

            $rootScope.$digest();

            element = angular.element('<athlete-stats-directive></athlete-stats-directive>');
            
            scope = $rootScope.$new();
            $compile(element)(scope);
            scope.$digest();
        }));

        function getBySelector(selector) {
            return angular.element(element[0].querySelector(selector));
        }

        describe('When directive is compiled', function () {
            it("it should have nested directives compiled", function () {
                var timingsDir = getBySelector("#tsd");
                var exerciseDir = getBySelector("#esd");
                var trainingsDir = getBySelector("#trsd");

                expect(timingsDir).toBeDefined();
                expect(exerciseDir).toBeDefined();
                expect(trainingsDir).toBeDefined();
             });
        });  
    });
});
 
