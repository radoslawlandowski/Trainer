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
                    option: scope.optionOne
                }

                var processor = {
                    process: function(data, processorSettings) {
                        console.info("Exercise stats processor processed!");

                        var processedData = data.map((item) => {item.name = "PROCESSED NAME"});

                        return processedData;
                    }
                }

                scope.generateStats = function() {
                    asc.generateStats(processor, processorSettings);
                }
            }
        };
    })
})