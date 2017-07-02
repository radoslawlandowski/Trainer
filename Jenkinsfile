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
              Globals.name = 'Alice'
              echo Globals.name /* prints: 'Alice' */
              Globals.caution 'The queen is angry!' /* prints: 'Hello, Alice. CAUTION: The queen is angry!' */
            }
            
            
          }
        )
      }
    }
  }
}