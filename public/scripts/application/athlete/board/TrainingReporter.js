define(['AthleteModule'], function(AthleteModule) {
    AthleteModule.factory('TrainingReporter', function() {
        return {    
            create: function(title, training, timings) {
                return {
                    generateReport: function() {
                        var report = { 
                            title: title,
                            timings: timings,
                            trainingSummary: 0,
                        };

                        report.trainingSummary = (function(training) {
                            var tonnages = [];
                            for(var i = 0 ; i < training.getExercises().length ; i++) {
                                var tonnage = {
                                    exercise: training.getExercises()[i].getName(),
                                    kilograms: 0    
                                };

                                var sets = training.getExercises()[i].getSets();
                                for(var j = 0 ; j < sets.length ; j++) {
                                    tonnage.kilograms += sets[j].reps * sets[j].weight;
                                }

                                tonnages.push(tonnage);
                            }
                            return tonnages;
                        })(training); 

                        return report;
                    }
                }
            }
        }
    })
})