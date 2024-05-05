pipeline {
  agent any
  environment {
    OPENAI_API_KEY = credentials('OPENAI_API_KEY')
  }
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

    stage('Server Tests') {
      steps {
        dir(path: 'backend') {
          sh 'npm install'
          sh 'export OPENAI_API_KEY=$OPENAI_API_KEY'
          sh 'npm test'
        }

      }
    }

    stage('Build Images') {
      steps {
        sh 'docker build -t rakeshpotnuru/productivity-app:client-latest client'
        sh 'docker build -t rakeshpotnuru/productivity-app:server-latest server'
      }

    }
  }

}