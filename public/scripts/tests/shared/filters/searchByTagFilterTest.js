define(['angular', 'angular-mocks', 'MainModule', 'searchByTagFilter', 'Exercises'], function () {
    describe('ByTagFilter Tests', function () {

        beforeEach(module('MainModule'));

        var byTag;
        var Exercises;

        beforeEach(inject(function (_byTagFilter_, _Exercises_) {
            byTag = _byTagFilter_;
            Exercises = _Exercises_;
        }));

        var testStates = { 'first': 'firstState', 'second': 'secondState', 'third': 'thirdState' };

        describe('When called with valid input and tag', function () {
            it("it should return an array of results", function () {
                var existingTag = "chest";
                expect(byTag(Exercises, existingTag).length).toBeGreaterThanOrEqual(1);
            });
        });

        describe('When called with valid input and undefined tag', function () {
            it("it should return an entire input array", function () {
               expect(byTag(Exercises, undefined).length).toEqual(Exercises.length);
            });
        });
    });
}); 