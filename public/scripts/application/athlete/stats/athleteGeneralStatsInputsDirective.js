define(['AthleteModule', 'angular', 'AthleteStatsTypes'], function(AthleteModule, angular) {
    AthleteModule.directive('athleteGeneralStatsInputsDirective', function(AthleteStatsTypes) {
        return {
            restrict: 'E',
            require: '^athleteStatsDirective',
            templateUrl: 'scripts/application/athlete/stats/athleteGeneralStatsInputsDirectiveTemplate.html',
            link: function(scope, element, attrs, asc) {
                scope.statsTypes = AthleteStatsTypes;
                scope.statsType = scope.statsTypes[0];

                scope.setStatsType = function (value) {
                    scope.statsType = value;
                }
            }
        };
    })
})