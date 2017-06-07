define(['MainModule'], function (MainModule) {
    MainModule.factory('ExerciseFactory', function () {
        return {
            create: function (data) {
                return {
                    _name: data.name || "New exercise",
                    _sets: data.sets || [{reps: 0, weight: 0}],

                    getName: function() {
                        return this._name;
                    },

                    setName: function(newName) {
                        this._name = newName;
                    },

                    getSets: function() {
                        return this._sets;
                    },

                    setSets: function(newSets) {
                        this._sets = newSets;
                    },

                    addSet: function (set) {
                        this._sets.push(set);
                    },

                    removeSet: function (index) {
                        this._sets.splice(index, 1);
                    },

                    setData: function(data) {
                        this._name = data.name;
                        this._sets = data.sets;
                    },

                    getData: function() {
                        return {
                            name: this._name,
                            sets: this._sets
                        }
                    }
                }
            }
        }
    })
})