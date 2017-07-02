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
                Globals.caution 'The queen is angry!'
            }
            
         
          }
        )
      }
    }
  }
}
