var BaseComponent = require('../../framework/components/BaseComponent');
var MainPageObject = require('../../framework/page_objects/MainPageObject');
var AthletePageObject = require('../../framework/page_objects/AthletePageObject');

beforeAll(function () {
    browser.driver.manage().window().maximize();
})

describe('Athlete spec', function () {

    var athletePage;

    beforeEach(function () {
        athletePage = new AthletePageObject();
    });

    describe('Stats state', function() {
        beforeEach(function () {
            athletePage = new AthletePageObject();
            athletePage.Stats.go();
        })

        it('When clicking \'Stats\' state URL should change', function () {
     //       expect(athletePage.getUrl()).toEqual('http://localhost:3000/#!/athlete/stats');
        });

        describe('GeneralInputsDirective', function() {

            var inputsComponent;

            beforeEach(function () {
                inputsComponent = athletePage.Stats.athleteStatsComponent.athleteGeneralStatsInputsCompontent;
            })

            it('When entering the page default value are put in inputs', function () {
      //          expect(inputsComponent.getTrainingTitleInputText()).toEqual("First");
            });

            it('When entering the page the correct buttons are available', function () {
       //         inputsComponent.clickStatsButton("Exercise");
       //         inputsComponent.clickStatsButton("Timings");
        //        inputsComponent.clickStatsButton("Training");
            });

            it('When trying to input text the value of input box changes', function () {
                inputsComponent.fillTrainingTitle("Test").then(function(value) {
                    expect(inputsComponent.getTrainingTitleInputText()).toEqual("Test");
                })
            });
        })
    });
}); 