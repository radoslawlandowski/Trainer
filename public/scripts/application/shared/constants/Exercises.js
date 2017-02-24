define(['MainModule'], function(MainModule) {
    MainModule.constant('Exercises', {
        'BicepCurl': {
            name: 'BicepCurl',
            description: 'Take the bar and just curl your biceps',
            musclesInvolved: [
                "tricep",
                "forearm"
            ]
        },
        'BenchPress': {
            name: 'Bench press',
            description: 'Push the bar high!',
            musclesInvolved: [
                "tricep",
                "chest minor",
                "chest major"
            ]
        },
        'BackRowing': {
            name: 'Rows',
            description: 'Pull the bar to your belly',
            musclesInvolved: [
                "back major",
                "back romboid",
                "bicep"
            ]
        }
    })
})