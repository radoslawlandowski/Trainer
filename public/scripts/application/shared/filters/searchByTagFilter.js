define(['MainModule'], function (MainModule) {
    MainModule.filter('byTag', function() {
        return function(input, tag) {
            if(tag === undefined || tag === "" || tag === null) {
                return input;
            };
            var result = [];
            for (var key in input) {
                for(var j = 0 ; j < input[key].musclesInvolved.length ; j++) {
                    if(input[key].musclesInvolved[j].includes(tag)) {
                        result.push(input[key]);
                        break;
                    }
                }
            }
            return result;
        };
    })
});