define(['AthleteModule'], function (AthleteModule) {
    AthleteModule.factory('exerciseStatsProcessor', function () {
        return {
            process: function (data, processorSettings) {
                console.info("Exercise stats processor processed!");

                var processedData = data.map((item) => {
                    var exercise = item.exercises.filter((exercise) => {
                        return exercise.name === processorSettings.exerciseName;
                    })

                    return exercise[0];
                });

                processedData = processedData.map((item) => {
                    return {set1: item.sets[1].weight, set2: item.sets[2].weight, set3: item.sets[3].weight}
                })

                console.info(processedData);

                return processedData;
            }
        }
    })
})