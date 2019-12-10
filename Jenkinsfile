pipeline {
    agent any

   stages {
     stage('update from github') {
       steps {
	sh 'cd ~'
	sh 'git init'
	sh 'git pull origin developer'
        
       }
     }
 

      stage('install React') {
        steps {
          sh 'sudo apt update'
          sh 'sudo apt install npm'
          sh 'sudo install npm'
        }
      }


      stage('Start React') {
        steps {
          sh 'npm start'
        }
     }
   }

}
