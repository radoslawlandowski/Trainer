define(['AthleteModule'], function(AthleteModule) {
    AthleteModule.service('AthleteDataService', function() {
        var self = this;

        var mockAthlete = {
            'firstName': 'mock',
            'lastName': 'athlete',
            'weight': '70',
            'height': '180',
            'age': '25',
            'gender': 'male',
        }

        self.get = function() {
            return mockAthlete;
        }

        self.put = function(data) {
            mockAthlete = data;
        }
    })
})