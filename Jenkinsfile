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
          sh 'sudo -m apt update'
          sh 'sudo -m apt install npm'
          sh 'sudo -m install npm'
        }
      }


      stage('Start React') {
        steps {
          sh 'npm start'
        }
     }
   }

}
