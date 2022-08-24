import { authGithubService } from "../services/authGithub.service";
import { Request, Response } from "express";
import { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET } from "../config";

export class AuthGithubController {
  public redirect(req: Request, res: Response) {
    res.redirect(
      `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}`
    );
  }

  public async callback(req: Request, res: Response) {
    const code = req.query.code;
    const body = {
      client_id: GITHUB_CLIENT_ID,
      client_secret: GITHUB_CLIENT_SECRET,
      code
    };
    try {
      const token = await authGithubService.getAccessToken(body);
      res.cookie("userToken", token);
      res.redirect("/logged");
    } catch (error) {
      res.status(400).send({ error: error });
    }
  }
}
