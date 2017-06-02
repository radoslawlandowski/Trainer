define(['AthleteModule', 'angular', 'athleteGeneralStatsInputsDirective', 'exerciseStatsDirective', 'trainingStatsDirective', 'timingsStatsDirective'], function(AthleteModule, angular) {
    AthleteModule.directive('athleteStatsDirective', function() {
        return {
            restrict: 'E',
            controller: function($scope) {
                var vm = this;
                
                vm.trainingTitle;
                vm.dateFrom;
                vm.dateTo;
                vm.statsType;

                vm.chartData = {};

                function getData(trainingTitle, dateFrom, dateTo) {
                    return {};
                }

                vm.generateStats = function(processor, processorSettings) {
                    var data = getData(vm.trainingTitle, vm.dateFrom, vm.dateTo);

                    vm.chartData = processor.process(data, processorSettings);

                    console.info("Stats generated!");
                }
            },
            controllerAs: "asc",
            scope: {
            
            },
            templateUrl: 'scripts/application/athlete/stats/athleteStatsDirectiveTemplate.html',
            link: function(scope, element, attrs) {
                
            }
        };
    })
})