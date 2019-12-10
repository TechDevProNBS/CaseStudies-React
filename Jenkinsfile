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
          sh 'sudo -n apt update'
          sh 'sudo -n apt install npm'
          sh 'sudo -n install npm'
        }
      }


      stage('Start React') {
        steps {
          sh 'npm start'
        }
     }
   }

}
