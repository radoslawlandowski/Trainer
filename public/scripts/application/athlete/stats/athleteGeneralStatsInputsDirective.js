define(['AthleteModule', 'angular'], function(AthleteModule, angular) {
    AthleteModule.directive('athleteGeneralStatsInputsDirective', function() {
        return {
            restrict: 'E',
            scope: {

            },
            templateUrl: 'scripts/application/athlete/stats/athleteGeneralStatsInputsDirectiveTemplate.html',
            link: function(scope, element, attrs) {

            }
        };
    })
})