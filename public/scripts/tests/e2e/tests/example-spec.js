var BaseComponent = require('../framework/components/BaseComponent');
var MainPageObject = require('../framework/page_objects/MainPageObject');
var AthletePageObject = require('../framework/page_objects/AthletePageObject');

describe('Example spec', function() {
  it('should find something', function() {
    var mainPage = new MainPageObject();

    mainPage.go();

    expect(mainPage.getUrl()).toEqual(mainPage.url);

    mainPage.clickAthleteSref();

    expect(mainPage.getUrl()).toEqual('http://localhost:3000/#!/athlete');
    expect(browser.getTitle()).toEqual('Trainer!');

    var athletePage = new AthletePageObject();

    athletePage.sidebar.clickButton('Training');

    expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/#!/athlete/training');

    athletePage.Training.clickNewTrainingButton();

    var ex = athletePage.Training.NewTrainingComponent.getExerciseCard('Rows');

    expect(ex.getExerciseName()).toEqual("Rows");
  });
});