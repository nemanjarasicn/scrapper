import { Request, Response } from "express";

import parserRepository from "../repositories/parser.repository";

export default class ParserController {
  async getJakpotData(req: Request, res: Response) {
    try {
      const parserData = await parserRepository.getJakpotData();

      res.status(200).send(parserData);
    } catch (err) {
      res.status(500).send({
        message: "Some error occurred while retrieving parser.",
      });
    }
  }
}
