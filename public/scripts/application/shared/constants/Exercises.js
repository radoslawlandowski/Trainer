define(['MainModule', 'Muscles'], function(MainModule, Muscles) {
    MainModule.constant('Exercises', {
        'BicepCurl': {
            name: 'BicepCurl',
            description: 'Take the bar and just curl your biceps',
            musclesInvolved: [
                Muscles.Arms.tricep,
                Muscles.Forearms.contractor
            ]
        },
        'BenchPress': {
            name: 'Bench press',
            description: 'Push the bar high!',
            musclesInvolved: [
                Muscles.Arms.tricep,
                Muscles.Chest.major,
                Muscles.Chest.minor
            ]
        },
        'BackRowing': {
            name: 'Rows',
            description: 'Pull the bar to your belly',
            musclesInvolved: [
                Muscles.Back.major,
                Muscles.Back.romboid,
                Muscles.Arms.bicep
            ]
        }
    })
})