var allTestFiles = []
var TEST_REGEXP = /(spec|test)\.js$/i

// Get a list of all the test files to include
Object.keys(window.__karma__.files).forEach(function (file) {
  if (TEST_REGEXP.test(file)) {
    // Normalize paths to RequireJS module names.
    // If you require sub-dependencies of test files to be loaded as-is (requiring file extension)
    // then do not normalize the paths
    var normalizedTestModule = file.replace(/^\/base\/|\.js$/g, '')
    allTestFiles.push(normalizedTestModule)
  }
})

require.config({
  // Karma serves files under /base, which is the basePath from your config file
  baseUrl: '/base',
  paths: {
      /* Modules and files */
      'MainModule': 'application/main/MainModule',
      'MainConfig': 'application/main/MainConfig',
      'AthleteModule': 'application/athlete/AthleteModule',
      'AthleteConfig': 'application/athlete/AthleteConfig',
      'AthleteStates': 'application/athlete/shared/AthleteStates',
      'AthleteMainController': 'application/athlete/main/AthleteMainController',
      'AthleteTrainingController': 'application/athlete/training/AthleteTrainingController',

      'sidebarDirective': 'application/shared/directives/sidebar/sidebarDirective',
      'exerciseCardDirective': 'application/shared/directives/exercise/exerciseCardDirective',
      'exercisePlanDirective': 'application/shared/directives/exercise/exercisePlanDirective',
      'ExerciseFactory': 'application/athlete/training/ExerciseFactory',
      'trainingDirective': 'application/shared/directives/training/trainingDirective',
      'searchBarDirective': 'application/shared/directives/searchbar/searchBarDirective',

      'Exercises': 'application/shared/constants/Exercises',
      'Muscles': 'application/shared/constants/Muscles',
      /* Libs */
      'angular': 'libs/angular.min',
      'angular-ui-router': 'libs/angular-ui-router.min',
      'angular-animate': 'libs/angular-animate.min',
      'angular-mocks': 'libs/angular-mocks',
      'ui-bootstrap-tpls': 'libs/ui-bootstrap-tpls.min'

  },
  shim: {
      'angular': {
          exports: 'angular'
      },
      'angular-ui-router': {
          deps: ['angular']
      },
      'angular-animate': {
          deps: ['angular']
      },
      'angular-mocks': {
        deps: ['angular']
      },
      'ui-bootstrap-tpls': {
          deps: ['angular']
      }
  },
  // dynamically load all test files
  deps: allTestFiles,

  // we have to kickoff jasmine, as it is asynchronous
  callback: window.__karma__.start
})
