pipeline {
  agent any
  options {
    disableConcurrentBuilds()
    timeout(time: 60, unit: 'MINUTES')
  }
  stages {
    stage('Verify Tools') {
      steps {
        parallel (
          node: {
            sh 'npm -v'
          },
          docker: {
            sh 'docker --version'
            sh 'which docker'
          }
        )
      }
    }
    stage('Build') {
      steps {
        sh 'npm prune'
        sh 'npm install'
        sh 'npm run'
      }
    }
    // stage('Test') {
    //   steps {
    //     sh 'npm test'
    //   }
    // }
    stage('Deploy') {
      when {
        branch 'master'
      }
      steps {
        sh 'docker build -t killerapp-frontend .'
        sh 'docker rm -f killerapp-frontend || true'
        sh 'docker run -d -p 4201:4201 --restart always --name killerapp-frontend killerapp-frontend'
        sh 'docker image prune -f'
      }
    }

  }
  post {
    always {
      cleanWs()
    }
  }
}
