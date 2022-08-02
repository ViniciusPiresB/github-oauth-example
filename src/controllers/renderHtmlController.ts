import { Request, Response } from "express";
import * as path from "path";

export class RenderHtmlController {
  public async handle(req: Request, res: Response) {
    res.sendFile(path.join(__dirname, "../html/index.html"));
  }
}
