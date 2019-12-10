#Scripts for getting React running on loal server

pipeline {
    agent any

   stages {
     stage('update from github') {
       steps {
	sh 'cd ~/Desktop/TechDevProNBS/CaseStudies-React/'
	sh 'git init'
	sh 'git pull origin developer'
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
