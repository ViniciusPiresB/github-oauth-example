import { Router } from "express";
import { RenderHtmlController } from "../controllers/renderHtmlController";

const renderHtmlRouter = Router();
const renderHtmlController = new RenderHtmlController();

renderHtmlRouter.get("/", renderHtmlController.handle);

export { renderHtmlRouter };
