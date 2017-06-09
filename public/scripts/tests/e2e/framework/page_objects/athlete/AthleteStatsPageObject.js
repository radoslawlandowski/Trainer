var BasePageObject = require('../BasePageObject');;
var AthleteStatsComponent = require('../../components/AthleteStatsComponent');

function AthleteStatsPageObject() {
    this.url = 'http://localhost:3000/#!/athlete/stats';

    this.athleteStatsComponent = new AthleteStatsComponent();

    BasePageObject.call(this, this.url);
}

AthleteStatsPageObject.prototype = new BasePageObject();


module.exports = AthleteStatsPageObject;