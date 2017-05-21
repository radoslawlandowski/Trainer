define(['AthleteModule', 'angular', 'AthleteStatsTypes'], function(AthleteModule, angular) {
    AthleteModule.directive('athleteGeneralStatsInputsDirective', function(AthleteStatsTypes) {
        return {
            restrict: 'E',
            require: '^athleteStatsDirective',
            scope: {

            },
            templateUrl: 'scripts/application/athlete/stats/athleteGeneralStatsInputsDirectiveTemplate.html',
            link: function(scope, element, attrs, athleteStatsController) {
                scope.statsTypes = AthleteStatsTypes;
                athleteStatsController.statsType = scope.statsTypes[0];

                var propertiesToWatch = ['trainingTitle', 'dateFrom', 'dateTo'];

                propertiesToWatch.map((property) => {
                    scope.$watch(property, function(newVal) {
                        setProperty(property, newVal);
                    });
                })

                scope.setStatsType = function (value) {
                    setProperty('statsType', value);
                }

                function setProperty(property, value) {
                    athleteStatsController[property] = value;
                }
            }
        };
    })
})