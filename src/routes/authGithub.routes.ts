import { Router } from "express";
import { AuthGithubController } from "../controllers/authGithubController";

const authGithubRouter = Router();
const authGithubController = new AuthGithubController();

authGithubRouter.get("/", authGithubController.redirect);
authGithubRouter.get("/oauth-callback", authGithubController.callback);

export { authGithubRouter };
