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
                withEnv(["JEST_JUNIT_OUTPUT=./coverage/junit.xml"]) {
                    sh 'npm test -- --ci'
                }
                junit 'coverage/junit.xml'
            }
        }
        stage('Deliver') {
            steps {
                sh 'npm run build'
            }
        }
    }
}
