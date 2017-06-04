define(['AthleteModule', 'AthleteStatsTypes', 'TrainingReporter'], function (AthleteModule) {
    AthleteModule.factory('trainingStatsProcessor', function (AthleteStatsTypes, TrainingReporter) {
        return {
            options: AthleteStatsTypes.Training.options,

            getExercisesNames : function (data) {
                var training = data[0]; // get first training (any other training of given name has the same exercises)

                var exercisesNames = training.exercises.map((exercise) => {
                    return exercise.name;
                })
                
                return exercisesNames;
            },

            process: function (trainings, processorSettings) {

                var processedData = _process(trainings, processorSettings);

                return processedData;

                
                function _process(trainings, processorSettings) {
                    var processedData;

                    processedData = _extractTonnage(trainings, processorSettings);

                    return processedData;
                }

                function _extractTonnage(data, option) {

                    var __extractingFunctions = {
                        'total': __extractTotal,
                        'per exercise': __extractPerExercise
                    }

                    var processedData = __extractingFunctions[option.tonnage](data);
                    var dimensions = __createChartDimensions(processedData);

                    return { data: processedData, dimensions: dimensions };

                    function __extractTotal(data) {
                        var tonnages = data.map((item, trainingIndex) => {
                            var total = 0;
                            item.exercises.map((exer) => {
                                 exer.sets.map((set, index) => {
                                    if(index === 0) return;
                                    total += set.reps * set.weight;
                                })
                            })
                            var propName = {};
                            propName['tonnage'] = total
                            return propName;
                        }) 

                        return tonnages;
                    };

                    function __extractPerExercise(data) {
                        return data.map((item) => {
                            var weightsArray = item.sets.map((set) => {
                                return set.weight;
                            })

                            return __convertToObject(weightsArray);
                        })
                    };

                    function __convertToObject(array, propertyName) {
                        var obj = {};
                        array.map((item, index) => {
                            obj[`${propertyName} ${index+1}`] = item;
                        })

                        return obj;
                    }

                    function __createChartDimensions(data) {     
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