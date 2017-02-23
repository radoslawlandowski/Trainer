define(['AthleteModule', 'exerciseCardDirective', 'Exercises'], function(AthleteModule) {
    AthleteModule.controller('AthleteTrainingController', function(Exercises) {
        var vm = this;

        vm.exercises = Exercises;
        vm.trainingSessions = {};


    })
})