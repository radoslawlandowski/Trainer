define(['AthleteModule', 'angular', 'athleteGeneralStatsInputsDirective', 'AthleteReportService', 'exerciseStatsDirective', 'athleteChartDirective', 'trainingStatsDirective', 'timingsStatsDirective'], function(AthleteModule, angular) {
    AthleteModule.directive('athleteStatsDirective', function(AthleteReportService) {
        return {
            restrict: 'E',
            controller: function($scope, AthleteReportService) {
                var vm = this;
                
                vm.trainingTitle;
                vm.dateFrom;
                vm.dateTo;
                vm.statsType;

                vm.chartData = {};
                vm.rawData;

                vm.getData = function (trainingTitle, dateFrom, dateTo) {
                    return AthleteReportService.get();
                }

                vm.generateStats = function(processor, processorSettings) {
                    vm.getData(vm.trainingTitle, vm.dateFrom, vm.dateTo).then(function(responseData) {
                        vm.rawData = responseData;

                        vm.chartData = processor.process(vm.rawData, processorSettings);
                    });
                }
            },
            controllerAs: "asc",
            templateUrl: 'scripts/application/athlete/stats/athleteStatsDirectiveTemplate.html'
        };
    })
})