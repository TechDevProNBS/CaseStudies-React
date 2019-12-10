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

      stage('Start React') {
        steps {
          sh 'npm install'
	  sh 'npm start'
        }
     }
   }
}
