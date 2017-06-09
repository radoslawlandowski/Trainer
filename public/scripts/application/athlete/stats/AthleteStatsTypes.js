define(['AthleteModule'], function(AthleteModule) {
    AthleteModule.constant('AthleteStatsTypes', {
         'Exercise' : {
            'name': 'Exercise',
            'options': {
                'sets': ['all'],
                'repsOrWeights': ['weights', 'reps']
            }
         },
         'Training': {
            'name': 'Training',
            'options': {
                'tonnages': ['total', 'per exercise']
            }
         },
    })
})