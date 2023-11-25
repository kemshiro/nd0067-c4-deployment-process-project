import * as dotenv from "dotenv";
import * as process from "process";
dotenv.config();

// ENV variables 
// - AWS_ACCESS_KEY_ID
// - AWS_SECRET_ACCESS_KEY
// Are Also needed

export const config = {
  username: `${process.env.POSTGRES_USERNAME}`,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  // eslint-disable-next-line @typescript-eslint/camelcase
  aws_region: process.env.AWS_REGION,
  // eslint-disable-next-line @typescript-eslint/camelcase
  aws_profile: process.env.AWS_PROFILE,
  // eslint-disable-next-line @typescript-eslint/camelcase
  aws_media_bucket: process.env.AWS_BUCKET,
  url: process.env.URL,
  jwt: {
    secret: process.env.JWT_SECRET,
  },
  awsAccessKeyId : process.env.AWS_ACCESS_KEY_ID,
  awsSecretAccessKey : process.env.AWS_SECRET_ACCESS_KEY,
};
