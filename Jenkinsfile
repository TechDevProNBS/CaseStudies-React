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
	  sh 'npm run-script build'
        }
     }

        stage('Deploy') {
            steps {

                timeout (time: 2, unit: 'MINUTES') {
                    sh 'chmod 775 ./scripts/*'
                }

                timeout (time: 5, unit: 'MINUTES') {
                    sh './scripts/before-installation.sh'
                }

                timeout (time: 5, unit: 'MINUTES') {
                    sh './scripts/installation.sh'
                }

                timeout (time: 5, unit: 'MINUTES') {
                    sh './scripts/after-installation.sh'
                }

                timeout (time: 2, unit: 'MINUTES') {
                    sh 'rm -rf ./*'
                }
            }
        }

   }
}
