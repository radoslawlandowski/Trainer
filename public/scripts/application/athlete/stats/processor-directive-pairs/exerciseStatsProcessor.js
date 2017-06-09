define(['AthleteModule', 'AthleteStatsTypes'], function (AthleteModule) {
    AthleteModule.factory('exerciseStatsProcessor', function (AthleteStatsTypes) {
        return {
            options: AthleteStatsTypes.Exercise.options,

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

                    var processedData = __extractingFunctions[option](data);
                    var dimensions = __createChartDimensions(processedData);

                    return { data: processedData, dimensions: dimensions };
                        
                    function __extractReps(data) {
                        return data.map((item) => {
                            var repsArray = item.sets.map((set) => {
                                return set.reps;
                            });

                            return __convertToObject(repsArray);
                        })
                    };

                    function __extractWeights(data) {
                        return data.map((item) => {
                            var weightsArray = item.sets.map((set) => {
                                return set.weight;
                            })

                            return __convertToObject(weightsArray);
                        })
                    };

                    function __extractRepsAndWeights(data) {
                        return data.map((item) => {
                            return item.sets.map((set) => {
                                return { reps: set.reps, weight: set.weight };
                            })
                        })
                    };

                    function __convertToObject(array) {
                        var obj = {};
                        array.map((item, index) => {
                            obj[`set ${index+1}`] = item;
                        })

                        return obj;
                    }

                    function __createChartDimensions(data) {
                        if(angular.isUndefined(data[0])) return {};
                        
                        var keys = Object.keys(data[0]);
                        var dimensions = {};

                        keys.map((item) => {
                            dimensions[item] = {
                                axis: 'y'
                            }
                        })

                        return dimensions;
                    }
                };
            } 
        }
    })
})