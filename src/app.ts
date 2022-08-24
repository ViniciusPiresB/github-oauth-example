import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { renderHtmlRouter } from "./routes/renderHtml.routes";
import { authGithubRouter } from "./routes/authGithub.routes";

class App {
  public app: express.Application;

  constructor() {
    this.app = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use(express.static(__dirname + "/html"));
    this.app.use(bodyParser.urlencoded({ limit: "50mb", extended: false }));
    this.app.use(bodyParser.json({ limit: "50mb" }));
  }

  routes() {
    this.app.use("/", renderHtmlRouter);
    this.app.use("/auth", authGithubRouter);
  }
}

export default new App().app;
