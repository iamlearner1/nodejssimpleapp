pipeline {
    agent {
        docker {
            image 'docker:24.0.7-dind'
            args '-v /var/run/docker.sock:/var/run/docker.sock'
        }
    }

    environment {
        IMAGE_NAME = 'my-node-app:latest'
        CONTAINER_NAME = 'my-node-container'
    }

    stages {
        stage('Build Docker Image') {
            steps {
                echo 'Building Docker image...'
                sh 'docker build -t $IMAGE_NAME .'
            }
        }

        stage('Run Docker Container') {
            steps {
                echo 'Running Docker container...'
                sh '''
                    docker rm -f $CONTAINER_NAME || true
                    docker run -d --name $CONTAINER_NAME -p 3000:3000 $IMAGE_NAME
                '''
            }
        }

        stage('Verify Container') {
            steps {
                echo 'Checking if container is running...'
                sh 'docker ps | grep $CONTAINER_NAME'
            }
        }

        stage('Show Logs') {
            steps {
                echo 'Application logs:'
                sh 'docker logs $CONTAINER_NAME'
            }
        }
    }
}
