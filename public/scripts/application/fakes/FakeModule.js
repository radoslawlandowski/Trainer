define(['angular', 'angular-mocks', 'MainModule'], function (angular) {
    var m = angular.module('FakeModule', ['MainModule', 'ngMockE2E']);

    m.run(function ($httpBackend, TrainingFactory, ExerciseFactory) {
        var self = this;

        var generateTraining = function (name) {
            var EXERCISES_COUNT = 3;
            var SETS_COUNT = 3;

            var training = TrainingFactory.create({ 'name': name });

            for (var i = 0; i < EXERCISES_COUNT; i++) {
                training.addExercise(`exercise-${i}`);
            }

            for (var i = 0; i < SETS_COUNT; i++) {
                training.getExercises()[0].addSet({});
            }

            training.setDays([true, true, true, true, true, true, true]);

            return training.getData();
        }

        var training1 = generateTraining("First");
        var training2 = generateTraining("Second");
        var training3 = generateTraining("Thrid");

        self.trainings = [training1, training2, training3];

        $httpBackend.whenGET(/.html/).passThrough();

        $httpBackend.whenGET('/api/training').respond(self.trainings);

        $httpBackend.whenPOST('/api/training').respond(function (method, url, data) {
            var training = angular.fromJson(data);

            var trainingExists = false;
            self.trainings.map((item) => {
                if (item.name === training.name) {
                    trainingExists = true;
                    return;
                }
            });

            if (trainingExists) {
                return [400, {training: training, message: "Training of this name already exists"}, {}]
            } else {
                self.trainings.push(training);
                return [200, training, {}];
            }
        });

        $httpBackend.whenPUT('/api/training').respond(function (method, url, data) {
            var training = angular.fromJson(data);
            self.trainings.map((item) => {
                if (item.name === training.name) {
                    item = training;
                }
            });

            return [200, training, {}];
        });

        self.reports = [generateTraining("First"), generateTraining("First"), generateTraining("First"), generateTraining("First"), generateTraining("First")];

        $httpBackend.whenGET('/api/reports').respond(self.reports);

        $httpBackend.whenPOST('/api/reports').respond(function (method, url, data) {
            var report = angular.fromJson(data);
            self.reports.push(report);
            return [200, report, {}];
        });
    })

    return m;
})