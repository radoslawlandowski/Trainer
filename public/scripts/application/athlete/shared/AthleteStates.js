define(['AthleteModule'], function (AthleteModule) {
    AthleteModule.constant('AthleteStates', {
        'BOARD': {
            'state': 'athlete.board',
            'displayedName': 'board'
        },
        'TRAINING': {
            'state': 'athlete.training',
            'displayedName': 'training'
        },
        'STATS': {
            'state': 'athlete.stats',
            'displayedName': 'stats'
        }, 
        'GOALS': {
            'state': 'athlete.goals',
            'displayedName': 'goals'
        },
        'DATA': {
            'state': 'athlete.data',
            'displayedName': 'data'
        }
    })
})