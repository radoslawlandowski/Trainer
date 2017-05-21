define(['AthleteModule', 'angular', 'AthleteStatsTypes'], function(AthleteModule, angular) {
    AthleteModule.directive('athleteGeneralStatsInputsDirective', function(AthleteStatsTypes) {
        return {
            restrict: 'E',
            scope: {

            },
            templateUrl: 'scripts/application/athlete/stats/athleteGeneralStatsInputsDirectiveTemplate.html',
            link: function(scope, element, attrs) {
                scope.statsTypes = AthleteStatsTypes;
                scope.chosenStatsType = scope.statsTypes[0];

                scope.setStatsType = function(statsType) {
                    scope.chosenStatsType = statsType;

                    console.log(scope.chosenStatsType);
                }
            }
        };
    })
})