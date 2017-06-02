define(['AthleteModule', 'angular', 'AthleteStatsTypes'], function(AthleteModule, angular) {
    AthleteModule.directive('athleteGeneralStatsInputsDirective', function(AthleteStatsTypes) {
        return {
            restrict: 'E',
            require: '^athleteStatsDirective',
            scope: {

            },
            templateUrl: 'scripts/application/athlete/stats/athleteGeneralStatsInputsDirectiveTemplate.html',
            link: function(scope, element, attrs, asc) {
                scope.statsTypes = AthleteStatsTypes;
                asc.statsType = scope.statsTypes[0];

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
                    asc[property] = value;
                }
            }
        };
    })
})