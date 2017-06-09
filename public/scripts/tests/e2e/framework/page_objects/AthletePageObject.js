var BasePageObject = require('./BasePageObject');
var AthleteTrainingPageObject = require('./athlete/AthleteTrainingPageObject');
var AthleteStatsPageObject = require('./athlete/AthleteStatsPageObject');

var SidebarComponent = require('../components/SidebarComponent');

function AthletePageObject() {
    this.url = 'http://localhost:3000/#!/athlete';

    BasePageObject.call(this, this.url);

    this.sidebar = new SidebarComponent();

    this.Training = new AthleteTrainingPageObject();
    this.Stats = new AthleteStatsPageObject();
}

AthletePageObject.prototype = new BasePageObject();

module.exports = AthletePageObject;