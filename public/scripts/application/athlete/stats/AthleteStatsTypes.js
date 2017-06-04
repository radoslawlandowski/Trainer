define(['AthleteModule'], function(AthleteModule) {
    AthleteModule.constant('AthleteStatsTypes', {
         'Exercise' : {
            'name': 'Exercise',
            'options': {
                'sets': ['all', 'last'],
                'repsOrWeights': ['weights', 'reps']
            }
         }, 
         'Timings': {
            'name': 'Timings',
            'options': {

            }
         }, 
         'Training': {
            'name': 'Training',
            'options': {

            }
         },
    })
})