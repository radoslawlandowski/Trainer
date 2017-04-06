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

        training2.addExercise(ExerciseFactory.create("ex1"));
        training2.addExercise(ExerciseFactory.create("ex2"));
        training2.addExercise(ExerciseFactory.create("ex3"));
        // ... of testing!

        self.trainings = [training1, training2];

        self.get = function() {
            return self.trainings;
        }

        self.put = function(data) {
            var exists = false;
            self.trainings = self.trainings.filter(function(item) {
                return item.title != data.title;
            })
            
            self.trainings.push(data);
        }
    })
})