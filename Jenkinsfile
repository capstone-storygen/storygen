pipeline {
	agent any

	stages {
		stage('Checkout') {
			steps {
				checkout scm
			}
		}
		stage('Client Tests') {
			steps {
				dir('frontend') {
					sh 'npm install'
					sh 'npm test'
				}
			}
		}
	}
}