### Project overview

- In this project. I'm using the starter code provide classrom
- Try to follow the steps:
  - Set up Github, push the code to Github
  - Setup AWS CLI in local machine to test
  - Configure in AWS console and local CLI: 
    - RDS
    - Elastic Beanstalk
    - S3 bucket
  - Setup Circle CI and link to Github repository
  - Make the code changes:
    - Apply setup for environment variables
    - Apply code change for .circleci/config.yml

### How to setup

- Clone project - `git clone https://github.com/kemshiro/nd0067-c4-deployment-process-project.git`
- Install dependencies:
  - `npm run frontend:install`
  - `npm run api:install`
- Update environments:
  - udagram/udagram-frontend/src/environments
- Run:
  - `npm run api:start`
  - `npm run frontend:start`

### Evidence
- Evidence in the `screenshot` folder

### Documents

- Documents are in `docs` folder