# Trainer

This is a project for integrating coaches with his athletes. It allows athletes for defining trainings, schedule and make reports from them.

From the perspective of a coach it helps to track trainings of his athletes, adjusting the trainings, correspondence and reports.

Project still in development...

To run:

    Setup:
        Node and NPM:	
            curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
            sudo apt-get install -y nodejs
        Bower:
            sudo npm install bower -g
        Grunt:
            npm install -g grunt-cli
        Tests:
            npm install karma-cli -g
            npm install protractor -g

    Run <Being in main directory>:
        
        1. npm install - loads backend deps
        2. bower install - installs frontend deps
        3. grunt install - copies libraries, fonts and images into proper directories (run it after every npm/bower lib installation)

        4. npm start - runs the app under port 3000

    Develop <Being in main directory>:
        frontend tests:
            1. grunt karma
        
        e2e tests:
        1. webdriver-manager update
        2. webdriver-manager start
        2. grunt e2e-tests
