define(['AthleteModule', 'angular'], function(AthleteModule, angular) {
    AthleteModule.directive('athleteChartDirective', function() {
        return {
            restrict: 'E',
            require: '^athleteStatsDirective',
            templateUrl: 'scripts/application/athlete/stats/athleteChartDirectiveTemplate.html',
            link: {
                pre: function(scope, elem, attrs, asc) {

                    scope.$watch('asc.chartData', function(newVal) {
                        scope.options.data = newVal;
                    })

                    scope.options = {
                        data: asc.chartData,
                        dimensions: {
                            set1: {
                                axis: 'y2'
                            },
                            set2: {
                                axis: 'y2'
                            },
                            set3: {
                                axis: 'y2'
                            }
                        }
                    };

                    scope.instance = null;
                }
            } 
        };
    })
})