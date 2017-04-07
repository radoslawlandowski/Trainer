define(['FakeModule', 'TrainingFactory', 'ExerciseFactory'], function(FakeModule) {
    FakeModule.service('FakeAthleteTrainingService', function(TrainingFactory, ExerciseFactory, $httpBackend) {
        var self = this;

        self.trainings = [];

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

        self.trainings = [training1, training2];

        $httpBackend.whenGET('/api/training').respond(self.trainings);

        $httpBackend.whenPOST('/api/training').respond(function(method, url, data) {
            var training = angular.fromJson(data);
            self.trainings.push(training);
        });
    })
})