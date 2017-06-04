define(['AthleteModule', 'angular', 'athleteStatsDirective', 'exerciseStatsProcessor'], function(AthleteModule, angular) {
    AthleteModule.directive('exerciseStatsDirective', function(exerciseStatsProcessor) {
        return {
            restrict: 'E',
            require: '^athleteStatsDirective',
            templateUrl: 'scripts/application/athlete/stats/processor-directive-pairs/exerciseStatsDirectiveTemplate.html',
            link: function(scope, element, attrs, asc) {

                scope.options = exerciseStatsProcessor.options;

                asc.getData(1, 2, 3).then(function(response) {
                    scope.exerciseNames = exerciseStatsProcessor.getExercisesNames(response);
                });

                scope.selectedSet = scope.options.sets[0];
                scope.selectedRepsOrWeights = scope.options.repsOrWeights[0];

                scope.generateStats = function() {

                    processorSettings = {
                        exerciseName: scope.selectedExerciseName,
                        set: scope.selectedSet,
                        repsOrWeights: scope.selectedRepsOrWeights
                    }

                    asc.generateStats(exerciseStatsProcessor, processorSettings);
                }
            }
        }; 
    }) 
})