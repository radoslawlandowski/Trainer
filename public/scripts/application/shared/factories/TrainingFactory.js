define(['MainModule'], function (MainModule) {
    MainModule.factory('TrainingFactory', function () {
        return {
            create: function (name) {
                return {
                    title: name,
                    exercises: [],

                    addExercise: function (exercise) {
                        this.exercises.push(exercise);
                    },

                    removeExercise: function (name) {
                        for(var i = 0 ; i < this.exercises.length ; i++) {
                            if(this.exercises[i].name === name) {
                                this.exercises.splice(i, 1);
                                return;
                            }
                        }
                    }
                }
            }
        }
    })
})