import { Router } from "express";
import ParserController from "../controllers/parser.controller";

class ParserRoute {
  router = Router();
  controller = new ParserController();

  constructor() {
    this.intializeRoutes();
  }

  intializeRoutes() {
    // Get a list of orders placed by users and their status.
    this.router.get("/", this.controller.getJakpotData);
  }
}

export default new ParserRoute().router;
