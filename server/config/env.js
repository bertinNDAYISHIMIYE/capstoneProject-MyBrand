
import dotenv from "dotenv";
dotenv.config();
export const CLOUDNAME =process.env.CLOUDNAME
export const APIKEY =process.env.APIKEY
export const APISECRET =process.env.APISECRET
export const JWT_KEY = process.env.JWT_KEY
export const NODE_ENV = process.env.NODE_ENV
export const MONGO_URL =
  process.env.NODE_ENV !== "test"
    ? process.env.MONGO_URI
    : process.env.MONGO_URI_TEST;

console.log("XXXXXXXXX",MONGO_URL)
