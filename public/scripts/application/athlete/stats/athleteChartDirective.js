define(['AthleteModule', 'angular'], function(AthleteModule, angular) {
    AthleteModule.directive('athleteChartDirective', function() {
        return {
            restrict: 'E',
            require: '^athleteStatsDirective',
            templateUrl: 'scripts/application/athlete/stats/athleteChartDirectiveTemplate.html',
            link: {
                pre: function(scope, elem, attrs, asc) {

                    scope.$watch('chartData', function(data) {
                        scope.options = {
                            data: data,
                            dimensions: __createChartDimensions(data)
                        }
                    })
                    
                    scope.instance = null;

                    function __createChartDimensions(data) {
                        if(angular.isUndefined(data[0])) return {};
                        
                        var keys = Object.keys(data[0]);
                        var dimensions = {};

                        keys.map((item) => {
                            dimensions[item] = {
                                axis: 'y'
                            }
                        })

                        return dimensions;
                    }
                }
            } 
        };
    })
})