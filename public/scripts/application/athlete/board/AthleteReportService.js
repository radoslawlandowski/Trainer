define(['AthleteModule'], function (AthleteModule) {
    AthleteModule.service('AthleteReportService', function ($http, $q) {
        var self = this;

        self.get = function (trainingName, dateFrom, dateTo) {
            return $http.get('/api/reports', {params: {trainingName: trainingName, dateFrom: dateFrom, dateTo: dateTo} }).then(function (response) {                
                return response.data;
            }, function (response) {
                console.error("Get all trainings failed");
            });
        }

        self.save = function (data) {
            return $http.post('/api/reports', data).then(function (response) {
                return response.data;
            }, function (failure) {
                console.error(failure.data.message);
            });
        }
    })
}) 