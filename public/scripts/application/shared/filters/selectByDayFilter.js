define(['MainModule'], function (MainModule) {
    MainModule.filter('byDay', function() {
        return function(trainings, day) {
            if(day === undefined || day === "" || day === null) {
                return trainings;
            };
            var result = [];
            for(var i = 0 ; i < trainings.length ; i++) {
                if (trainings[i].days[day]) {
                    result.push(trainings[i]);
                }
            }
            
            return result;
        };
    })
});