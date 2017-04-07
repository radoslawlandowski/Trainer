define(['AthleteModule', 'TrainingFactory', 'ExerciseFactory'], function (AthleteModule) {
    AthleteModule.service('AthleteTrainingService', function (TrainingFactory, ExerciseFactory, $http) {
        var self = this;

        self.get = function () {
            return $http({ method: 'GET', url: '/api/training' }).then(function (response) {
                return response.data;
            }, function (response) {
                console.error("Get all trainings failed");
            });
        }

        self.put = function (data) {
            return $http.post('/api/training', data).then(function (response) {
                return response.data;
            }, function(failure) {
                console.error('Posting training failed');
            });
        }
    })
})