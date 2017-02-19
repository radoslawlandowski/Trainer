define(['AthleteModule', 'sidebarDirective'], function(AthleteModule) {
    AthleteModule.controller('AthleteMainController', function(states) {
        var vm = this;
        
        vm.states = states;
    })
})