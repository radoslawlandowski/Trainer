define(['AthleteModule'], function (AthleteModule) {
    AthleteModule.factory('exerciseStatsProcessor', function () {
        return {
            sets: ['all', 'last'],
            repsOrWeights: ['weights', 'reps', 'reps and weights'],

            getExercisesNames : function (data) {
                var training = data[0];

                var names = training.exercises.map((exercise) => {
                    return exercise.name;
                })
                
                return names;
            },

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
                    var __extractingFunctions = {
                        'last': __extractLastSets,
                        'all': __extractAllSets
                    }

                    return __extractingFunctions[option](data);

                    function __extractAllSets(data) {
                        return data;
                    };

                    function __extractLastSets(data) {
                        return data;
                    };
                };

                function _extractRepsOrWeights(data, option) {

                    var __extractingFunctions = {
                        'reps': __extractReps,
                        'weights': __extractWeights,
                        'reps and weights': __extractRepsAndWeights
                    }

                    return __extractingFunctions[option](data);

                    function __extractReps(data) {
                        return data.map((item) => {
                            return item.sets.map((set) => {
                                return set.reps;
                            })
                        })
                    };

                    function __extractWeights(data) {
                        var extractedData = data.map((item) => {
                            var weightsArray = item.sets.map((set) => {
                                return set.weight;
                            })

                            var weightsObject = {};
                            weightsArray.map((item, index) => {
                                weightsObject[`set ${index+1}`] = item;
                            })

                            return weightsObject;
                        })

                        return extractedData;
                    };

                    function __extractRepsAndWeights(data) {
                        return data.map((item) => {
                            return item.sets.map((set) => {
                                return { reps: set.reps, weight: set.weight };
                            })
                        })
                    };
                };
            }
        }
    })
})