import { Request, Response } from "express";
import { GITHUB_CLIENT_ID } from "../config";

export class AuthGithubController {
  public async handle(req: Request, res: Response) {
    res.redirect(
      `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}`
    );
  }
}
