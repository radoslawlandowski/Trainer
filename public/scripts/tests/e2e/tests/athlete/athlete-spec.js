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
        athletePage.go();
    });

    it('When entering the page static data should be correct', function () {
        expect(athletePage.getUrl()).toEqual('http://localhost:3000/#!/athlete');
    });

    describe('Training state', function() {

        var trainingState;

        beforeEach(function () {
            athletePage.sidebar.clickButton('training');
            trainingState = athletePage.Training;
        })

        it('When clicking \'Training\' state URL should change', function () {
            expect(athletePage.getUrl()).toEqual('http://localhost:3000/#!/athlete/training');
        });


        it('When new training is added information should disappear and training appear', function () {
            trainingState.getTrainings().count().then(function(count) {

                trainingState.clickNewTrainingButton();
                trainingState.NewTrainingComponent.clickSaveButton();

                expect(trainingState.getTrainings().count()).toEqual(++count);
                expect(trainingState.getNoTrainingText().isDisplayed()).toBe(false);
            });
        });

        it('When adding new training exercise cards should be visible', function () {
            trainingState.clickNewTrainingButton();
            expect(trainingState.NewTrainingComponent.getAllExerciseCards().count()).toBeGreaterThan(0);
        });

        it('When adding new exercise it should become visible with proper name', function () {
            trainingState.clickNewTrainingButton();
            var newTraining = trainingState.NewTrainingComponent;
            
            newTraining.clickAddExerciseButton('Rows'); 
            expect(newTraining.getAllExercisePlans().count()).toBeGreaterThan(0); 

            expect(newTraining.getExercisePlan('Rows').getExerciseName()).toEqual('Rows');
        }); 
    });
});