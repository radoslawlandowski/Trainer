pipeline {
  agent {
    node {
      label 'CIS'
    }
    
  }
  stages {
    stage('Tests') {
      steps {
        parallel(
          "Tests": {
            echo 'asd'
            
          },
          "Tests2": {
            library 'First'
            script {
              println myself
            }
            
            
          }
        )
      }
    }
  }
}