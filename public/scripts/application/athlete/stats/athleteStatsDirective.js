define(['AthleteModule', 'angular'], function(AthleteModule, angular) {
    AthleteModule.directive('athleteStatsDirective', function() {
        return {
            restrict: 'E',
            scope: {

            },
            templateUrl: 'scripts/application/athlete/stats/athleteStatsDirectiveTemplate.html',
            link: function(scope, element, attrs) {

            }
        };
    })
})