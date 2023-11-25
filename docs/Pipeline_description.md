### Pipeline

Pipeline has 3 jobs:
1. Build jobs: 
   - Spin up environment
   - Preparing environment variables (environment variables is defined in both Elastic Beanstalk and Circle CI)
   - Trigger install dependencies using in FE and BE source
   - Build FE and run lint check
   - Build BE

2. Hold:
   - Waiting until approve

3. Deploy
   - Spin up environment
   - Preparing environment variables (environment variables is defined in both Elastic Beanstalk and Circle CI)
   - Setting Up Elastic Beanstalk CLI
   - Install AWS CLI
   - Configure AWS Access Key ID
   - Deploy the app