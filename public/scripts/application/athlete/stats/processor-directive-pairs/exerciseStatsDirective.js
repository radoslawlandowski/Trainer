define(['AthleteModule', 'angular'], function(AthleteModule, angular) {
    AthleteModule.directive('exerciseStatsDirective', function() {
        return {
            restrict: 'E',
            scope: {

            },
            templateUrl: 'scripts/application/athlete/stats/processor-directive-pairs/exerciseStatsDirectiveTemplate.html',
            link: function(scope, element, attrs, athleteStatsController) {

            }
        };
    })
})