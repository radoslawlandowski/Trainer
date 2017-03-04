define(['angular', 'angular-mocks', 'MainModule', 'searchByTagFilter', 'Exercises'], function () {
    describe('ByTagFilter Tests', function () {

        beforeEach(module('MainModule'));

        var byTag;
        var Exercises;

        beforeEach(inject(function (_byTagFilter_, _Exercises_) {
            byTag = _byTagFilter_;
            Exercises = _Exercises_;
        }));

        describe('When called with valid input and tag', function () {
            it("it should return an array of results", function () {
                expect(byTag(Exercises, "chest").length).toBeGreaterThanOrEqual(1);
            });
        });

        describe('When called with valid input and undefined tag', function () {
            it("it should return an entire input array", function () {
               expect(byTag(Exercises, undefined).length).toEqual(Exercises.length);
            });
        });
    });
}); 