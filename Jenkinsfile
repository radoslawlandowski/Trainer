pipeline {
  agent {
    node {
      label 'CIS'
    }
    
  }
  stages {
    stage('Installation') {
      steps {
        sh 'npm install'
        sh 'bower install'
        sh 'grunt install'
      }
    }
    stage('Unit tests') {
      steps {
        sh 'grunt karma:singleRun'
      }
    }
    stage('End to End tests') {
      steps {
        ansiColor(colorMapName: 'xterm') {
          sh 'grunt e2e'
        }
        
      }
    }
    stage('Archive and publish results') {
      steps {
        archiveArtifacts 'testresults/**/*.*'
        junit(testResults: 'testresults/**/*.*', allowEmptyResults: true)
      }
    }
  }
}