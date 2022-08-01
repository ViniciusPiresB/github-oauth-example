import * as dotenv from "dotenv";

dotenv.config();

export const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;
export const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
export const PORT = process.env.PORT;
