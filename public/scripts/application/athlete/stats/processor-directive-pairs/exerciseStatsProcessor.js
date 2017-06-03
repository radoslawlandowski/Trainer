define(['AthleteModule'], function (AthleteModule) {
    AthleteModule.factory('exerciseStatsProcessor', function () {
        return {
            sets: ['all', 'last'],
            repsOrWeights: ['weights', 'reps', 'reps and weights'],

            getExercisesNames : function (data) {
                var training = data[0]; // get first training (any other training of given name has the same exercises)

                var exercisesNames = training.exercises.map((exercise) => {
                    return exercise.name;
                })
                
                return exercisesNames;
            },

            process: function (trainings, processorSettings) {

                var extractedExercise = _extractExercise(trainings, processorSettings.exerciseName);

                var processedData = _process(extractedExercise, processorSettings);

                return processedData;

                function _extractExercise(trainings, exerciseName) {
                    var preProcessedData = trainings.map((item) => {
                        var exercise = item.exercises.filter((exercise) => {
                            return exercise.name === exerciseName;
                        })

                        return exercise[0];
                    });

                    return preProcessedData;
                }
                
                function _process(extractedExercise, processorSettings) {
                    var processedData;

                    processedData = _extractSets(extractedExercise, processorSettings.set);

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