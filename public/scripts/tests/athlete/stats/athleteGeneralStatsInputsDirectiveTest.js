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
 
        describe('When setting inputs', function () {
            it("the title should be visible on scope", function () {
                var trainingTitleInput = getBySelector("#training-title");

                sendKeys(trainingTitleInput, "test");

                expect(trainingTitleInput.scope().trainingTitle).toEqual("test");
             });

            it("the dateFrom should be visible on scope", function () {
                var dateFromInput = getBySelector("#date-from");

                sendKeys(dateFromInput, "test");

                expect(dateFromInput.scope().dateFrom).toEqual("test");
             });

            it("the dateTo should be visible on scope", function () {
                var input = getBySelector("#date-to");

                sendKeys(input, "test");

                expect(input.scope().dateTo).toEqual("test");
             });

             function sendKeys(element, text) {
                element.val(text).triggerHandler('input');
             }
        }); 

        describe('When directive is compiled', function () {
            it("it should have buttons already rendered", function () {
                var statsButtons = getBySelector("#stats-buttons");
                var exerciseButton = statsButtons.find("button")[0];
                var timingButton = statsButtons.find("button")[1];
                var trainingButton = statsButtons.find("button")[2];

                expect(angular.element(exerciseButton).html()).toEqual("Exercise");
                expect(angular.element(trainingButton).html()).toEqual("Training");
                expect(angular.element(timingButton).html()).toEqual("Timings");
             });
        });   

        describe('When a button is clicked', function () {
            it("Proper value in scope is set", function () {
                var statsButtons = getBySelector("#stats-buttons");

                var exerciseButton = statsButtons.find("button")[0];
                var timingButton = statsButtons.find("button")[1];
                var trainingButton = statsButtons.find("button")[2];
                
                clickButtonAndVerifyScope(trainingButton, "Training");
                clickButtonAndVerifyScope(timingButton, "Timings");
                clickButtonAndVerifyScope(exerciseButton, "Exercise");
             });

             function clickButtonAndVerifyScope(button, expectedValue) {
                angular.element(button).click();

                expect(element.scope().statsType).toEqual(expectedValue);
             }
        });  
    });
}); 
 
