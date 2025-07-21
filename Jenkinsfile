pipeline{

    agent any
    tools{

        nodejs : 'NODEJS22.7.0'
    }
    environment{
        IMAGE_NAME = "nodejssimpleapp:latest"
    }
    stages{
        stage("Clone Repo"){
            step{
                 git url : "https://github.com/iamlearner1/nodejssimpleapp.git",
                 branch : 'main'
            }
        }
        stage("Install Dependencies"){
            step{
                sh 'npm install'
            }
        }
        stage("Create Image"){
            step{
                sh "docker build -t $IMAGE_NAME ."
            }
        }
        stage("Running container"){
            step{
                script{
                    sh "docker stop $IMAGE_NAME"
                    sh "docker rm $IMAGE_NAME"
                    sh "docker run -d  --name nodeapp -p 3000:3000 $IMAGE_NAME"
                }
              
            }
        }
        post{
            always{
                echo "Container created successfully and deployment done"
            }
        }
    }
}




// pipeline {
//   agent any
//   tools {
//     nodejs 'NodeJS 18.x' // Name from Jenkins global tool config
//   }
//   environment {
//     IMAGE_NAME = "nodejssimpleapp:latest"
//   }
//   stages {
//     stage('Clone Repository') {
//       steps {
//         git url: 'https://github.com/iamlearner1/nodejssimpleapp.git', branch: 'main'
//       }
//     }
//     stage('Install Dependencies') {
//       steps {
//         sh 'npm install'
//       }
//     }
//     stage('Build Docker Image') {
//       steps {
//         sh "docker build -t $IMAGE_NAME ."
//       }
//     }
//     stage('Deploy (Run Container)') {
//       steps {
//         script {
//           // Stop and remove any existing container
//           sh "docker stop nodeapp || true"
//           sh "docker rm nodeapp || true"
//           // Start the new container
//           sh "docker run -d --rm --name nodeapp -p 3000:3000 $IMAGE_NAME"
//         }
//       }
//     }
//   }
//   post {
//     always {
//       echo 'Build and local deployment stages complete.'
//     }
//   }
// }
