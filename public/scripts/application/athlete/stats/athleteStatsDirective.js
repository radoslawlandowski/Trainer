define(['AthleteModule', 'angular', 'athleteGeneralStatsInputsDirective', 'AthleteReportService', 'exerciseStatsDirective', 'trainingStatsDirective', 'timingsStatsDirective'], function(AthleteModule, angular) {
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

                function getData(trainingTitle, dateFrom, dateTo) {
                    return AthleteReportService.get();
                }

                vm.generateStats = function(processor, processorSettings) {
                    getData(vm.trainingTitle, vm.dateFrom, vm.dateTo).then(function(responseData) {
                        var data = responseData;


                        vm.chartData = processor.process(data, processorSettings);

                        console.log(vm.chartData);
                        console.info("Stats generated!");
                    });
                }
            },
            controllerAs: "asc",
            templateUrl: 'scripts/application/athlete/stats/athleteStatsDirectiveTemplate.html'
        };
    })
})