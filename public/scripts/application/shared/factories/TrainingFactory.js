define(['MainModule'], function (MainModule) {
    MainModule.factory('TrainingFactory', function () {
        return {
            create: function (name) {
                return {
                    title: name,
                    exercises: [],
                    days: [false, false, false, false, true, false, false], // moment.js: days[0] = 'Sunday'!

                    addExercise: function (exercise) {
                        this.exercises.push(exercise);
                    },

                    removeExercise: function (name) {
                        this.exercises = this.exercises.filter(function(item) {
                            return item.name != name;
                        })
                    }
                }
            }
        }
    })
})