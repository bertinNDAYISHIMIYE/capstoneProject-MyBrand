/* eslint-disable no-console */
import dotenv from 'dotenv';

dotenv.config();
export const { CLOUDNAME } = process.env;
export const { APIKEY } = process.env;
export const { APISECRET } = process.env;
export const { JWT_KEY } = process.env;
export const { NODE_ENV } = process.env;
export const MONGO_URL = process.env.NODE_ENV !== 'test'
  ? process.env.MONGO_URI
  : process.env.MONGO_URI_TEST;

console.log('XXXXXXXXX', MONGO_URL);
