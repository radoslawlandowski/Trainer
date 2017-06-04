define(['AthleteModule', 'angular', 'AthleteStatsTypes'], function(AthleteModule, angular) {
    AthleteModule.directive('athleteGeneralStatsInputsDirective', function(AthleteStatsTypes) {
        return {
            restrict: 'E',
            templateUrl: 'scripts/application/athlete/stats/athleteGeneralStatsInputsDirectiveTemplate.html',
            link: function(scope) {
                scope.statsTypes = AthleteStatsTypes;
                scope.statsType = scope.statsTypes[0];

                scope.setStatsType = function (value) {
                    scope.statsType = value;
                }
            }
        };
    })
})