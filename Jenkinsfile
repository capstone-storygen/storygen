pipeline {
  agent any

  environment {
    OPENAI_API_KEY = credentials('OPENAI_API_KEY')
    DOCKER_HUB_CREDENTIALS = credentials('dockerhub')
    COMPOSE_IMAGE_NAME = "amanbarar/composed-image"
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

    stage('Build and Push Images') {
      steps {
        sh 'docker-compose build'
        script {
          docker.withRegistry('https://index.docker.io/v1/', "${DOCKER_HUB_CREDENTIALS}") {
            sh 'docker-compose push'
          }
        }
      }

    }


  }

}