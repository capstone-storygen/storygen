pipeline {
  agent any

  environment {
    OPENAI_API_KEY = credentials('OPENAI_API_KEY')
    DOCKER_HUB_CREDENTIALS = credentials('dockerhub')
    COMPOSE_IMAGE_NAME = "amanbarar/composed-image"
  }

  triggers {
    githubPush(branch: 'main') // Trigger the pipeline on push events to the main branch
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
        withCredentials([usernamePassword(credentialsId: 'dockerhub', passwordVariable: 'DOCKER_PASSWORD', usernameVariable: 'DOCKER_USERNAME')]) {
                    sh 'docker login -u $DOCKER_USERNAME -p $DOCKER_PASSWORD'
                    sh 'docker-compose push'
                }
      }

    }

    stage('Remove Local Image') {
          steps {
            sh 'docker image prune -a --force'
          }
        }

  }

}