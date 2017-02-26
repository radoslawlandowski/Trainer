define(['MainModule'], function (MainModule) {
    MainModule.directive('searchBarDirective', function ($state) {
        return {
            restrict: 'E',
            scope: {
                'searchOption': '=',
                'searchText': '='
            },
            templateUrl: 'scripts/application/shared/directives/searchbar/searchBarDirectiveTemplate.html'
        };
    });
});