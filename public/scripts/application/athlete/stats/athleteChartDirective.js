define(['AthleteModule', 'angular'], function(AthleteModule, angular) {
    AthleteModule.directive('athleteChartDirective', function() {
        return {
            restrict: 'E',
            require: '^athleteStatsDirective',
            templateUrl: 'scripts/application/athlete/stats/athleteChartDirectiveTemplate.html',
            link: {
                pre: function(scope, elem, attrs, asc) {

                    scope.$watch('chartData', function(chartData) {
                        scope.options = chartData
                    })
                    
                    scope.instance = null;
                }
            } 
        };
    })
})