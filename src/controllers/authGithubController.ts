import axios from "axios";
import { Request, Response } from "express";
import { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET } from "../config";

export class AuthGithubController {
  public async redirect(req: Request, res: Response) {
    res.redirect(
      `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}`
    );
  }

  public async callback(code: any, res: Response) {
    const body = {
      client_id: GITHUB_CLIENT_ID,
      client_secret: GITHUB_CLIENT_SECRET,
      code
    };
    const opts = { headers: { accept: "application/json" } };
    axios
      .post("https://github.com/login/oauth/access_token", body, opts)
      .then(_res => _res.data.access_token)
      .then(token => {
        res.cookie("userToken", token);
        res.redirect("/logged");
      })
      .catch(err => res.status(400).json({ error: err.message }));
  }
}
