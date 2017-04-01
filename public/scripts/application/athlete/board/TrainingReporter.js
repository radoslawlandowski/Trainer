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
                            for(var i = 0 ; i < training.exercises.length ; i++) {
                                var tonnage = {
                                    exercise: training.exercises[i].name,
                                    kilograms: 0    
                                };

                                for(var j = 0 ; j < training.exercises[i].sets.length ; j++) {
                                    tonnage.kilograms += training.exercises[i].sets[j].reps * training.exercises[i].sets[j].weight;
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