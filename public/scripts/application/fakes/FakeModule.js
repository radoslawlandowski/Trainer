define(['angular', 'angular-mocks', 'MainModule'], function (angular) {
    var m = angular.module('FakeModule', ['MainModule', 'ngMockE2E']);

    m.run(function ($httpBackend, TrainingFactory, ExerciseFactory, moment) {
        var self = this;

        var generateTraining = function (name, multiplier, summer, date) {
            multiplier = multiplier || 1;
            summer = summer || 0;
            date = date || new Date();

            var EXERCISES_COUNT = 3;
            var SETS_COUNT = 3;

            var training = TrainingFactory.create({ 'name': name });

            for (var i = 0; i < EXERCISES_COUNT; i++) {
                training.addExercise(`exercise-${i}`);
            }

            for (var i = 0; i < SETS_COUNT; i++) {
                training.getExercises()[0].addSet({reps: i * 3 + summer, weight: multiplier * i * 10 + summer});
                training.getExercises()[1].addSet({reps: i * 1 + summer, weight: multiplier * i * 10 + summer + 40});
                training.getExercises()[2].addSet({reps: i * 5 + summer, weight: multiplier * i * 10 + summer + 100});
            }

            training.setDays([true, true, true, true, true, true, true]);
            training.setDate(date);

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
        var todayDiffered = function(diff) {
            var today = moment().toDate();

            return moment(today).add(diff, 'days');
        }

        self.reports = [
            generateTraining("First", 2, 1, todayDiffered(-7)), 
            generateTraining("First", 2.2, 2, todayDiffered(0)), 
            generateTraining("First", 2.5, 3, todayDiffered(7)), 
            generateTraining("First", 3, 3, todayDiffered(14)), 
            generateTraining("First", 3, 3, todayDiffered(21)), 
            generateTraining("First", 3, 3, todayDiffered(28)), 
            generateTraining("First", 3, 2, todayDiffered(35)), 
            generateTraining("First", 3, 3, todayDiffered(42)), 
            generateTraining("First", 3, 4, todayDiffered(49)), 
            generateTraining("First", 3, 5, todayDiffered(56)), 
            generateTraining("First", 4, 5, todayDiffered(63))
        ];

        $httpBackend.whenGET('/api/reports').respond(self.reports);

        $httpBackend.whenPOST('/api/reports').respond(function (method, url, data) {
            var report = angular.fromJson(data);
            self.reports.push(report);
            return [200, report, {}];
        });
    })

    return m;
})