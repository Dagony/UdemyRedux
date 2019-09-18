pipeline {
    agent {
        docker {
            image 'node:6-alpine'
            args '-p 3000:3000'
        }
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                script {
                  sh 'npm run test'
                }
            }
            post {
                always {
                    junit 'output/coverage/junit/junit.xml'
                }
            }
        }
        stage('Deliver') {
            steps {
                sh 'npm run build'
            }
        }
    }
}
