define(['AthleteModule'], function (AthleteModule) {
    AthleteModule.factory('TrainingTimer', function () {
        return {
            create: function (myTraining) {
                return {
                    startTime: 0,
                    duration: 0,
                    timings: [],

                    initialize: function() {
                        this.startTime = Date.now();

                        for(var i = 0 ; i < myTraining.exercises.length ; i++) {
                            var timing = {
                                exercise: myTraining.exercises[i],
                                totalTime: 0,
                                lastStart: 0,
                                lastStop: 0,
                                perSetAvg: 0
                            }

                            this.timings.push(timing);
                        }
                    },
                    
                    start: function(index) {
                        this.timings[index].lastStart = Date.now();
                    },

                    stop: function(index) {
                        this.timings[index].lastStop = Date.now();
                        this.timings[index].totalTime += Math.round((this.timings[index].lastStop - this.timings[index].lastStart) / 1000);
                    },

                    finish: function() {
                        this.duration = Math.round((Date.now() - this.startTime) / 1000);
                    },

                    generateReport: function() {
                        var t;
                        for(var i = 0 ; i < this.timings.length ; i++) {
                            t = this.timings[i];
                            t.perSetAvg = t.totalTime / t.exercise.sets.length;
                            t.exercise = t.exercise.name;
                            delete t.lastStart;
                            delete t.lastStop;
                        }

                        return {
                            startTime: this.startTime,
                            duration: this.duration,
                            timings: this.timings
                        }
                    }
                }
            }
        }
    })
})