define(['AthleteModule'], function (AthleteModule) {
    AthleteModule.factory('exerciseStatsProcessor', function () {
        return {
            process: function (data, processorSettings) {
                console.info("Exercise stats processor processed!");

                var processedData = data.map((item) => {
                        var exercise = item.exercises.filter((exercise) => {
                            return exercise.name === processorSettings.exerciseName;
                        })

                        return exercise;
                    });

                return processedData;
            }
        }
    })
})