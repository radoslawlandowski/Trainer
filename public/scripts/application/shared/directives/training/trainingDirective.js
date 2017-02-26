define(['MainModule'], function (MainModule) {
    MainModule.directive('trainingDirective', function ($state) {
        return {
            restrict: 'E',
            scope: {
                'trainingData': '=?',
                'onConfirm': '&',
                'onCancel': '&'
            },
            templateUrl: 'scripts/application/shared/directives/training/trainingDirectiveTemplate.html',
            link: function (scope, element, attrs) {
            }
        };
    });
});