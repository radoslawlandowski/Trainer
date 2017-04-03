define(['AthleteModule'], function(AthleteModule) {
    AthleteModule.service('AthleteTrainingService', function() {
        var self = this;

        self.trainings = [];

        self.get = function() {
            return self.trainings;
        }

        self.put = function(data) {
            self.trainings.push(data);
        }
    })
})