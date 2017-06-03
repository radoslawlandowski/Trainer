define(['angular', 'angular-mocks', 'MainModule', 'AthleteModule'], function () {
    describe('SidebarDirective Tests', function () {

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
            mockDirective('trainingStatsDirective', '<div id="tsd">trainingStatsDirective</div>');
            mockDirective('athleteChartDirective', '<div id="acd">athleteChartDirective</div>');

        }));

        beforeEach(inject(function($rootScope, $compile) {

            var element1 = angular.element('<athlete-general-stats-inputs-directive></athlete-general-stats-inputs-directive>');
            var element2 = angular.element('<exercise-stats-directive></exercise-stats-directive>');
            var element3 = angular.element('<timings-stats-directive></timings-stats-directive>');
            var element4 = angular.element('<training-stats-directive></training-stats-directive>');
            var element5 = angular.element('<athlete-chart-directive></athlete-chart-directive>');

            $compile(element1); $compile(element2); $compile(element3); $compile(element4); $compile(element5);

            element = angular.element('<athlete-stats-directive></athlete-stats-directive>');
            $rootScope.$digest();
            scope = $rootScope.$new();

            var a = $compile(element)(scope);

            console.log(element);

            scope.$digest();
        }));

        function getBySelector(selector) {
            return angular.element(element[0].querySelector(selector));
        }

        describe('When provided valid states attribute', function () {
            it("it should create corresponding count of buttons", function () {
                var el = getBySelector("#tsd");
 
                console.log(el);
            });
        });
    });
});

