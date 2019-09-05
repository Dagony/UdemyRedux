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
                withEnv(["JEST_JUNIT_OUTPUT=./jest-test-results.xml"]) {
                    sh 'npm test -- --ci --testResultsProcessor="jest-junit"'
                }
                junit 'jest-test-results.xml'
            }
        }
        stage('Deliver') {
            steps {
                sh 'npm run build'
            }
        }
    }
}
