import { Application } from "express";
import ParserRoute from "./parser.route";

export default class Routes {
  constructor(app: Application) {
    app.use("/api/parser", ParserRoute);
  }
}
