define(['AthleteModule', 'angular', 'athleteGeneralStatsInputsDirective', 'AthleteReportService', 'exerciseStatsDirective', 'athleteChartDirective', 'trainingStatsDirective', 'timingsStatsDirective'], function(AthleteModule, angular) {
    AthleteModule.directive('athleteStatsDirective', function(AthleteReportService, moment) {
        return {
            restrict: 'E',
            controller: function($scope, AthleteReportService) {
                var vm = this;
                
                $scope.trainingTitle = "First";
                $scope.dateFrom = '02-01-2017';
                $scope.dateTo = '30-01-2017';
                $scope.statsType;

                $scope.chartData = {};
                $scope.rawData;

                vm.getData = function (trainingTitle, dateFrom, dateTo) {
                    return AthleteReportService.get(trainingTitle, dateFrom, dateTo);
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