import { Request, Response } from "express";

export class AuthGithubController {
  public async handle(req: Request, res: Response) {
    res.status(200).send("AuthGithub is working.");
  }
}
