define(['AthleteModule'], function (AthleteModule) {
    AthleteModule.controller('AthleteDataController', function () {
        var vm = this;

        vm.editMode = false;

        vm.edit = function () {
            vm.editMode = !vm.editMode;
        }

        vm.discard = function () {
            vm.editMode = false;
        }

        vm.save = function () {
            vm.editMode = false;
        }
    })
})