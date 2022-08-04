import { Router } from "express";
import { RenderHtmlController } from "../controllers/renderHtmlController";

const renderHtmlRouter = Router();
const renderHtmlController = new RenderHtmlController();

renderHtmlRouter.get("/", renderHtmlController.renderIndex);
renderHtmlRouter.get("/logged", renderHtmlController.renderLoggedUser);

export { renderHtmlRouter };
