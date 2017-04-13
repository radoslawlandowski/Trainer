define(['AthleteModule', 'AthleteDataService'], function (AthleteModule) {
    AthleteModule.controller('AthleteDataController', function (AthleteDataService) {
        var vm = this;

        vm.init = init;
        vm.edit = edit;
        vm.discard = discard;
        vm.save = save;

        vm.init();

        function init() {
            vm.editMode = false;
            vm.data = AthleteDataService.get();
        }

        function edit() {
            vm.editMode = !vm.editMode;
            vm.temp = angular.copy(vm.data);
        }

        function discard() {
            vm.editMode = false;
            vm.data = vm.temp;
        }

        function save() {
            AthleteDataService.put(vm.data);
            vm.editMode = false;
        }
    })
})