#Scripts for getting React running on loal server

pipeline {
    agent any

   stages {
     stage('update from github') {
       steps {
	sh 'git init'
	sh 'git pull origin master'
         echo "pull for git"
       }
     }
   }

   stages {
      stage('install React') {
        steps {

          sh 'sudo apt update'
          sh 'sudo apt install npm'
          sh 'sudo install npm'
        }
      }
   }

   stages {
      stage('Start React') {
        steps {
          
          sh 'npm start'
        }
     }
   }

}
