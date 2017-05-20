define(['AthleteModule', 'TrainingFactory', 'ExerciseFactory'], function (AthleteModule) {
    AthleteModule.service('AthleteTrainingService', function (TrainingFactory, ExerciseFactory, $http, $q) {
        var self = this;

        self.get = function () {
            return $http({ method: 'GET', url: '/api/training' }).then(function (response) {                
                return response.data.map((item) => { return TrainingFactory.create(item) });
            }, function (response) {
                console.error("Get all trainings failed");
            });
        }

        self.save = function (data, isNew) {
            return isNew ? create(data) : update(data);
        }

        function create(data) {
            return $http.post('/api/training', data).then(function (response) {
                return TrainingFactory.create(response.data);
            }, function (failure) {
                console.error(failure.data.message);
                return $q.reject(failure)
            });
        }

        function update(data) {
            return $http.put('/api/training', data).then(function (response) {
                return TrainingFactory.create(response.data);
            }, function (failure) {
                console.error('Posting training failed');
            });
        }
    })
}) 