define(['AthleteModule'], function (AthleteModule) {
    AthleteModule.factory('exerciseStatsProcessor', function () {
        return {
            process: function (data, processorSettings) {
                console.info("Exercise stats processor processed!");

                var processedData = data.map((item) => {item.name = "PROCESSED  aasd NAME"});

                return processedData;
            }
        }
    })
})