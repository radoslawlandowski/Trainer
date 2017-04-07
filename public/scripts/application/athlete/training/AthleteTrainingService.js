define(['AthleteModule', 'TrainingFactory', 'ExerciseFactory'], function(AthleteModule) {
    AthleteModule.service('AthleteTrainingService', function(TrainingFactory, ExerciseFactory) {
        var self = this;

        self.trainings = [];

        // For the sake...
        var training1 = TrainingFactory.create("First");
        var training2 = TrainingFactory.create("Second");

        training1.addExercise(ExerciseFactory.create("ex1"));
        training1.addExercise(ExerciseFactory.create("ex2"));
        training1.addExercise(ExerciseFactory.create("ex3"));

        training1.exercises[0].sets.push({});
        training1.exercises[1].sets.push({});
        training1.exercises[2].sets.push({});

        training2.addExercise(ExerciseFactory.create("ex1"));
        training2.addExercise(ExerciseFactory.create("ex2"));
        training2.addExercise(ExerciseFactory.create("ex3"));

        training2.exercises[0].sets.push({});
        training2.exercises[1].sets.push({});
        training2.exercises[2].sets.push({});


        // ... of testing!

        self.trainings = [training1, training2];

        self.get = function() {
            return self.trainings;
        }

        self.put = function(data) {
            self.trainings = self.trainings.filter(function(item) {
                return item.title != data.title;
            })
            
            self.trainings.push(data);
            
            return data;
        }
    })
})