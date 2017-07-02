pipeline {
  agent {
    node {
      label 'CIS'
    }
    
  }
  stages {
    stage('Tests') {
      steps {
        library 'First'
        script {
          Globals.name = 'Alice'
          echo Globals.name
          echo Globals.caution('asd')
        }
        
      }
    }
  }
}