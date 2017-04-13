define(['angular', 'angular-mocks', 'MainModule'], function (angular) {
    var m = angular.module('FakeModule', ['MainModule', 'ngMockE2E']);

    m.run(function ($httpBackend, TrainingFactory, ExerciseFactory) {
        var self = this;

        var generateTraining = function (name) {
            var EXERCISES_COUNT = 3;
            var SETS_COUNT = 3;

            var training = TrainingFactory.create({'name': name});

            for(var i = 0 ; i < EXERCISES_COUNT ; i++) {
                training.addExercise(`exercise-${i}`);
            }

            for(var i = 0 ; i < SETS_COUNT ; i++) {
                training.getExercises()[0].addSet({});
            }

            return training.getData();
        }

        var training1 = generateTraining("First");
        var training2 = generateTraining("Second");
        var training3 = generateTraining("Thrid");

        self.trainings = [training1, training2, training3];

        $httpBackend.whenGET('/api/training').respond(self.trainings);

        $httpBackend.whenPOST('/api/training').respond(function (method, url, data) {
            var training = angular.fromJson(data);
            self.trainings.push(training);
            return [200, training, {}];
        });

        $httpBackend.whenGET(/.html/).passThrough(); 
    })

    return m;
})