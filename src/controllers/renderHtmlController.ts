import { renderHTMLService } from "../services/renderHTML.service";
import { Request, Response } from "express";
export class RenderHtmlController {
  public renderIndex(req: Request, res: Response) {
    const pathOfFile = renderHTMLService.getPath("../html/index.html");
    res.sendFile(pathOfFile);
  }

  public renderLoggedUser(req: Request, res: Response) {
    const pathOfFile = renderHTMLService.getPath("../html/loggedPage.html");
    res.sendFile(pathOfFile);
  }
}
