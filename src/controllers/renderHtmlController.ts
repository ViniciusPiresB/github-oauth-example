import { Request, Response } from "express";
import * as path from "path";

export class RenderHtmlController {
  public renderIndex(req: Request, res: Response) {
    res.sendFile(path.join(__dirname, "../html/index.html"));
  }

  public renderLoggedUser(req: Request, res: Response) {
    res.sendFile(path.join(__dirname, "../html/loggedPage.html"));
  }
}
