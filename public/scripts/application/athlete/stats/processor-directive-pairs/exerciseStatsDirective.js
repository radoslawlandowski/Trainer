define(['AthleteModule', 'angular', 'athleteStatsDirective', 'exerciseStatsProcessor'], function(AthleteModule, angular) {
    AthleteModule.directive('exerciseStatsDirective', function() {
        return {
            restrict: 'E',
            require: '^athleteStatsDirective',
            scope: {

            },
            templateUrl: 'scripts/application/athlete/stats/processor-directive-pairs/exerciseStatsDirectiveTemplate.html',
            link: function(scope, element, attrs, asc) {
                
                processorSettings = {
                    option: scope.option
                }

                var processor = {
                    process: function() {
                        console.info("Exercise stats processor processed!");
                        return {};
                    }
                }

                scope.generateStats = function() {
                    asc.generateStats(processor, processorSettings);
                }
            }
        };
    })
})