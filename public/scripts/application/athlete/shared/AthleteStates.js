define(['AthleteModule'], function (AthleteModule) {
    AthleteModule.constant('AthleteStates', {
        'BOARD': {
            'state': 'athlete.board',
            'displayedName': 'Board'
        },
        'TRAINING': {
            'state': 'athlete.training',
            'displayedName': 'Training'
        }, 
        'DIET': {
            'state': 'athlete.diet',
            'displayedName': 'Diet'
        }, 
        'STATS': {
            'state': 'athlete.stats',
            'displayedName': 'Stats'
        }, 
        'GOALS': {
            'state': 'athlete.goals',
            'displayedName': 'Goals'
        },
        'DATA': {
            'state': 'athlete.data',
            'displayedName': 'Data'
        }
    })
})