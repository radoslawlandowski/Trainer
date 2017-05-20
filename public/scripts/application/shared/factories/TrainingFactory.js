define(['MainModule', 'ExerciseFactory'], function (MainModule) {
    MainModule.factory('TrainingFactory', function (ExerciseFactory) {
        return {
            create: function (data) {
                if(data.exercises != undefined) {
                    data.exercises = data.exercises.map((item) => { return ExerciseFactory.create(item) });
                }

                return {
                    _name: data.name || "New Training",
                    _exercises: data.exercises || [],
                    _days: data.days || [], // one bool for each day of week, moment.js: days[0] means 'Sunday'!

                    getName: function () {
                        return this._name;
                    },

                    setName: function (newName) {
                        this._name = newName;
                    },

                    getDays: function () {
                        return this._days;
                    },

                    setDays: function (newDays) {
                        this._days = newDays;
                    },

                    getExercises: function () {
                        return this._exercises;
                    },

                    addExercise: function (exerciseName) {
                        this._exercises.push(ExerciseFactory.create({ 'name': exerciseName }));
                    },

                    removeExercise: function (exerciseName) {
                        this._exercises = this.getExercises().filter((item) => { return item.getName() != exerciseName });
                    },

                    setData: function (data) {
                        this._name = data.name;
                        this._exercises = data.exercises.map((item) => { return ExerciseFactory.create(item) });
                        this._days = data.days;
                    },

                    getData: function () {
                        return {
                            name: this.getName(),
                            exercises: this.getExercises().map((item) => { return item.getData() }),
                            days: this.getDays()
                        }
                    }
                }
            }
        }
    })
})