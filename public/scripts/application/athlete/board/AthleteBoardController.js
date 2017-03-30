define(['AthleteModule'], function(AthleteModule) {
    AthleteModule.controller('AthleteBoardController', function(states) {
        var vm = this;
        
        vm.states = states;
    })
})