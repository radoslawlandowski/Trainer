define(['AthleteModule'], function(AthleteModule) {
    AthleteModule.factory('ExerciseFactory', function() {
        return {    
            create: function(name) {
                return {
                    name: name,
                    sets: [],

                    addSet: function(set) {
                        this.sets.push(set);
                    },

                    removeSet: function(index) {
                        this.sets.splice(index, 1);
                    }
                }
            }
        }
    })
})