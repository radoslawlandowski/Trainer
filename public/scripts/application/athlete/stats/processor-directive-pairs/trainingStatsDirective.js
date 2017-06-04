define(['AthleteModule', 'angular', 'trainingStatsProcessor'], function(AthleteModule, angular) {
    AthleteModule.directive('trainingStatsDirective', function(trainingStatsProcessor) {
        return {
            restrict: 'E',
            require: '^athleteStatsDirective',
            templateUrl: 'scripts/application/athlete/stats/processor-directive-pairs/trainingStatsDirectiveTemplate.html',
            link: function(scope, element, attrs, asc) {
                scope.options = trainingStatsProcessor.options;
                scope.selectedTonnage = scope.options.tonnages[0];

                scope.generateStats = function() {

                    processorSettings = {
                        tonnage: scope.selectedTonnage
                    }

                    asc.generateStats(trainingStatsProcessor, processorSettings);
                }
            }
        };
    })
})