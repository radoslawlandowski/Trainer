define(['AthleteModule', 'angular', 'athleteGeneralStatsInputsDirective'], function(AthleteModule, angular) {
    AthleteModule.directive('athleteStatsDirective', function() {
        return {
            restrict: 'E',
            controller: function($scope) {
                var vm = this;
                
                vm.trainingTitle;
                vm.dateFrom;
                vm.dateTo;
                vm.statsType;
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