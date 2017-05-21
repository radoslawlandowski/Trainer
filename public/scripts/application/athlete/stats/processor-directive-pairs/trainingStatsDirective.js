define(['AthleteModule', 'angular'], function(AthleteModule, angular) {
    AthleteModule.directive('trainingStatsDirective', function() {
        return {
            restrict: 'E',
            scope: {

            },
            templateUrl: 'scripts/application/athlete/stats/processor-directive-pairs/trainingStatsDirectiveTemplate.html',
            link: function(scope, element, attrs, athleteStatsController) {

            }
        };
    })
})