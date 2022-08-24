import * as path from "path";

export class renderHTMLService {
  public static getPath(filePath: string) {
    return path.join(__dirname, filePath);
  }
}
