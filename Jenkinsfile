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
          Globals.caution('asd')
        }
        
      }
    }
  }
}