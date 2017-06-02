define(['AthleteModule'], function (AthleteModule) {
    AthleteModule.factory('exerciseStatsProcessor', function () {
        return {
            sets: ['all', 'last'],
            repsOrWeights: ['reps', 'exercises', 'both'],

            process: function (data, processorSettings) {

                var preprocessedData = _preProcess(data, processorSettings);

                var processedData = _process(preprocessedData, processorSettings);

                return processedData;

                function _preProcess(data, processorSettings) {
                    var preProcessedData = data.map((item) => {
                        var exercise = item.exercises.filter((exercise) => {
                            return exercise.name === processorSettings.exerciseName;
                        })

                        return exercise[0];
                    });

                    return preProcessedData;
                }
                
                function _process(preProcessedData, processorSettings) {
                    var processedData;

                    processedData = _extractSets(preProcessedData, processorSettings.set);

                    processedData = _extractRepsOrWeights(processedData, processorSettings.repsOrWeights);

                    return processedData;
                }

                function _extractSets(data, option) {
                    var extractedData;
                    
                    if(option == 'all') {
                        extractedData = __extractAllSets(data)
                    } else {
                        extractedData = __extractLastSets(data)
                    }

                    return extractedData;

                    function __extractAllSets(data) {
                        data.map((item) => {
                            
                        })
                    };

                    function __extractLastSets(data) {

                    };
                };



                function _extractRepsOrWeights(data, option) {
                    var data;
                    
                    if(option == 'reps') {
                        data = __extractReps(data);
                    } else if(option == 'exercises') {
                        data = __extractExercises(data);
                    } else {
                        data = __extractBoth(data);
                    }

                    return data;

                    function __extractReps() {

                    };

                    function __extractExercises() {

                    };

                    function __extractBoth() {

                    };
                };
            }
        }
    })
})