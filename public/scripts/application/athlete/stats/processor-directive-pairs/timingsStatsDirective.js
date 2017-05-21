define(['AthleteModule', 'angular'], function(AthleteModule, angular) {
    AthleteModule.directive('timingsStatsDirective', function() {
        return {
            restrict: 'E',
            scope: {

            },
            templateUrl: 'scripts/application/athlete/stats/processor-directive-pairs/timingsStatsDirectiveTemplate.html',
            link: function(scope, element, attrs, athleteStatsController) {

            }
        };
    })
})