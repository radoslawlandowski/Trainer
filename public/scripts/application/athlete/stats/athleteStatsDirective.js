define(['AthleteModule', 'angular', 'athleteGeneralStatsInputsDirective', 'AthleteReportService', 'exerciseStatsDirective', 'athleteChartDirective', 'trainingStatsDirective', 'timingsStatsDirective'], function(AthleteModule, angular) {
    AthleteModule.directive('athleteStatsDirective', function(AthleteReportService) {
        return {
            restrict: 'E',
            controller: function($scope, AthleteReportService) {
                var vm = this;
                
                $scope.trainingTitle;
                $scope.dateFrom;
                $scope.dateTo;
                $scope.statsType;

                $scope.chartData = {};
                $scope.rawData;

                vm.getData = function (trainingTitle, dateFrom, dateTo) {
                    return AthleteReportService.get();
                }

                vm.generateStats = function(processor, processorSettings) {
                    vm.getData($scope.trainingTitle, $scope.dateFrom, $scope.dateTo).then(function(responseData) {
                        $scope.rawData = responseData;

                        $scope.chartData = processor.process($scope.rawData, processorSettings);
                    });
                }
            },
            controllerAs: "asc",
            templateUrl: 'scripts/application/athlete/stats/athleteStatsDirectiveTemplate.html'
        };
    })
})