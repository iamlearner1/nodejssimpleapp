pipeline {
    agent any

    tools {
        nodejs 'NODEJS22.7.0' // Match this name to what you have in Jenkins Global Tool Config
    }

    environment {
        IMAGE_NAME = 'nodejssimpleapp:latest'
        CONTAINER_NAME = 'nodeapp'
    }

    stages {
        stage('Clone Repo') {
            steps {
                git url: 'https://github.com/iamlearner1/nodejssimpleapp.git', branch: 'main'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh "docker build -t $IMAGE_NAME ."
            }
        }

        stage('Run Docker Container') {
            steps {
                script {
                    sh "docker stop $CONTAINER_NAME || true"
                    sh "docker rm $CONTAINER_NAME || true"
                    sh "docker run -d --name $CONTAINER_NAME -p 3000:3000 $IMAGE_NAME"
                }
            }
        }
    }

    post {
        always {
            echo '✅ Container created and deployment completed successfully.'
        }
    }
}
