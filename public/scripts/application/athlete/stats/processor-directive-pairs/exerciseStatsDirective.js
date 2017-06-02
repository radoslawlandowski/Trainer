define(['AthleteModule', 'angular', 'athleteStatsDirective', 'exerciseStatsProcessor'], function(AthleteModule, angular) {
    AthleteModule.directive('exerciseStatsDirective', function(exerciseStatsProcessor) {
        return {
            restrict: 'E',
            require: '^athleteStatsDirective',
            templateUrl: 'scripts/application/athlete/stats/processor-directive-pairs/exerciseStatsDirectiveTemplate.html',
            link: function(scope, element, attrs, asc) {

                scope.sets = exerciseStatsProcessor.sets; 
                scope.repsOrWeights = exerciseStatsProcessor.repsOrWeights;

                scope.generateStats = function() {

                    processorSettings = {
                        exerciseName: scope.exerciseName,
                        set: scope.selectedSet,
                        repsOrWeights: scope.selectedRepsOrWeights
                    }

                    asc.generateStats(exerciseStatsProcessor, processorSettings);
                }
            }
        };
    })
})