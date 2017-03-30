define(['AthleteModule'], function(AthleteModule) {
    AthleteModule.service('AthleteTrainingService', function() {
        var self = this;

        var mockAthlete = {
            'email': 'mock@athlete.com',
            'password': 'password',
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