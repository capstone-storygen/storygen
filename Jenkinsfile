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
        dir(path: 'frontend') {
          sh 'npm install'
          sh 'npm test'
        }

      }
    }

    stage('Backend Tests') {
      steps {
        dir(path: 'backend') {
          sh 'npm install'
          sh 'npm test'
        }

      }
    }

  }
}