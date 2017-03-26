define(['angular', 'angular-mocks', 'MainModule', 'Exercises'], function () {
    describe('ExerciseCardDirective Tests', function () {

        beforeEach(module('MainModule'));
        beforeEach(module('htmltemplates'));

        var element, Exercises;
        var bicepCurl;

        beforeEach(inject(function($rootScope, $compile, _Exercises_) {
            Exercises = _Exercises_;

            element = angular.element('<exercise-card-directive exercise="exercise"></exercise-card-directive>');
            
            scope = $rootScope.$new();
            bicepCurl = Exercises['BicepCurl'];
            scope.exercise = bicepCurl;

            $compile(element)(scope);
            scope.$digest();
        }));

        function getBySelector(selector) {
            return angular.element(element[0].querySelector(selector));
        }

        function toAngularElement(element) {
            return angular.element(element);
        }

        describe('When provided valid exercise attribute', function () {
            it("it should propagate exercise name properly", function () {
                var exerciseName = getBySelector('#exercise-name');

                expect(exerciseName.text()).toEqual(bicepCurl.name);
            });

            it("it should propagate exercise description properly", function () {
                var exerciseDescr = getBySelector('#exercise-description');

                expect(exerciseDescr.text()).toEqual(bicepCurl.description);
            });

            it("it should propagate muscles involved properly", function () {
                var musclesInvolvedDiv = getBySelector('#muscles-involved-group');

                var muscles = musclesInvolvedDiv.find('span');

                expect(muscles.length).toEqual(2);

                for(var i = 0 ; i < muscles.length; i++) {
                    expect(toAngularElement(muscles[i]).text()).toEqual(bicepCurl.musclesInvolved[i])
                }
            });
        });
    });
});