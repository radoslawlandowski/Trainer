pipeline {
  agent {
    node {
      label 'CIS'
    }
    
  }
  stages {
    stage('Tests') {
      steps {
        echo 'asd'
        library 'First'
        script {
          @Library('First')
          
          def a = new First()
        }
        
      }
    }
  }
}