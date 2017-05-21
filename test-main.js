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
      'AthleteDataController': 'application/athlete/data/AthleteDataController',
      'AthleteDataService': 'application/athlete/data/AthleteDataService',
      'AthleteBoardController': 'application/athlete/board/AthleteBoardController',
      'AthleteReportService': 'application/athlete/board/AthleteReportService', 
      'AthleteTrainingService': 'application/athlete/training/AthleteTrainingService',
      'performTrainingDirective': 'application/athlete/board/performTrainingDirective',
      'TrainingTimer': 'application/athlete/board/TrainingTimer',
      'TrainingReporter': 'application/athlete/board/TrainingReporter',

      'athleteStatsDirective': 'application/athlete/stats/athleteStatsDirective',
      'athleteGeneralStatsInputsDirective': 'application/athlete/stats/athleteGeneralStatsInputsDirective',
      'AthleteStatsTypes': 'application/athlete/stats/AthleteStatsTypes',

      'exerciseStatsDirective': 'application/athlete/stats/processor-directive-pairs/exerciseStatsDirective',
      'timingsStatsDirective': 'application/athlete/stats/processor-directive-pairs/timingsStatsDirective',
      'trainingStatsDirective': 'application/athlete/stats/processor-directive-pairs/trainingStatsDirective',

      'AthleteStatsController': 'application/athlete/stats/AthleteStatsController',

      'sidebarDirective': 'application/shared/directives/sidebar/sidebarDirective',
      'exerciseCardDirective': 'application/shared/directives/exercise/exerciseCardDirective',
      'exercisePlanDirective': 'application/shared/directives/exercise/exercisePlanDirective',
      'trainingDirective': 'application/shared/directives/training/trainingDirective',
      'searchBarDirective': 'application/shared/directives/searchbar/searchBarDirective',

      'ExerciseFactory': 'application/shared/factories/ExerciseFactory',
      'TrainingFactory': 'application/shared/factories/TrainingFactory',

      'searchByTagFilter': 'application/shared/filters/searchByTagFilter',
      'selectByDayFilter': 'application/shared/filters/selectByDayFilter',

      'Exercises': 'application/shared/constants/Exercises',
      'Muscles': 'application/shared/constants/Muscles',
      'Days': 'application/shared/constants/Days',

      'templates-athlete': 'application/athlete/templates/templates-athlete',
      'templates-main': 'application/main/templates/templates-main',
      'templates-shared': 'application/shared/templates/templates-shared',

      /* Libs */
      'angular': 'libs/angular.min',
      'angular-ui-router': 'libs/angular-ui-router.min',
      'angular-animate': 'libs/angular-animate.min',
      'angular-mocks': 'libs/angular-mocks',
      'ui-bootstrap-tpls': 'libs/ui-bootstrap-tpls.min',
      'jquery': 'libs/jquery.min',
      'moment': 'libs/moment.min',
      'angular-moment': 'libs/angular-moment.min'
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
