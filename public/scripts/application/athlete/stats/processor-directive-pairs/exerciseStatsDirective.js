define(['AthleteModule', 'angular', 'athleteStatsDirective', 'exerciseStatsProcessor'], function(AthleteModule, angular) {
    AthleteModule.directive('exerciseStatsDirective', function(exerciseStatsProcessor) {
        return {
            restrict: 'E',
            require: '^athleteStatsDirective',
            templateUrl: 'scripts/application/athlete/stats/processor-directive-pairs/exerciseStatsDirectiveTemplate.html',
            link: function(scope, element, attrs, asc) {
                
                processorSettings = {
                    option: scope.optionOne
                }

                scope.generateStats = function() {
                    asc.generateStats(exerciseStatsProcessor, processorSettings);
                }
            }
        };
    })
})