define(['AthleteModule'], function (AthleteModule) {
    AthleteModule.constant('AthleteStates', {
        'BOARD': {
            'state': 'athlete.board',
            'displayedName': 'Board',
            'path': '/board'
        },
        'MY_TRAINING': {
            'state': 'athlete.myTraining',
            'displayedName': 'My training',
            'path': '/mytraining'
        }, 
        'MY_DIET': {
            'state': 'athlete.myDiet',
            'displayedName': 'My diet',
            'path': '/mydiet'
        }, 
        'STATS': {
            'state': 'athlete.stats',
            'displayedName': 'Stats',
            'path': '/stats'
        }, 
        'GOALS': {
            'state': 'athlete.goals',
            'displayedName': 'Goals',
            'path': '/goals'
        },
        'DATA': {
            'state': 'athlete.data',
            'displayedName': 'Data',
            'path': '/data'
        }
    })
})