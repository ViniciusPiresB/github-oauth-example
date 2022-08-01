import { Router } from "express";
import { AuthGithubController } from "../controllers/authGithubController";

const authGithubRouter = Router();

const authGithubController = new AuthGithubController();

authGithubRouter.get("/", authGithubController.handle);

export { authGithubRouter };
